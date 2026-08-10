import { useState } from "react"
import { useSimulationStorage } from "./useSimulationStorage"
import type { ChatMessage } from "@/data/chat"
import { chatPrompt } from "@/data/chatPrompt"
import { getChatResponse } from "@/services/aiService"

export const useConversation = (id: string) => {
  const { getFormData, saveConversation } = useSimulationStorage()

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const simulation = getFormData(id)

    if (simulation?.chat) {
        return simulation.chat
    }
    return []
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = async (question: string) => {
    const simulation = getFormData(id)

    if (!simulation) {
        setError('Simulação não encontrada.')
        return
    }

    const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        content: question,
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)

    setIsLoading(true)
    setError(null)

    try {
        const prompt = chatPrompt(simulation, messages, question)

        const responseText = await getChatResponse(prompt)

        const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: responseText,
        }

        const finalMessages = [...updatedMessages, assistantMessage]
        setMessages(finalMessages)

        saveConversation(id, finalMessages)
    } catch {
        setError('Erro ao obter resposta. Tente novamente.')
    } finally {
        setIsLoading(false)
    }
    }

  return { messages, isLoading, error, sendMessage }
}




