import 'react-loading-skeleton/dist/skeleton.css'

import Skeleton from 'react-loading-skeleton'

import { useInsight } from '@/hooks/useInsight'

import { Content } from '../Insights/Content'
import { Error } from '../Insights/Error'
import { useConversation } from '@/hooks/useConversation'
import { Input } from '@/components/shared/Input'
import { Button } from '@/components/shared/Button'
import { useEffect, useRef, useState } from 'react'

interface AIInsightCardProps {
  simulationId: string
}

export function AIInsightsCard({ simulationId }: AIInsightCardProps) {
  const { insight, isLoading, error, fetchInsight } = useInsight(simulationId)
  const [question, setQuestion] = useState('')
  const {
    messages,
    isLoading: isChatLoading,
    error: chatError,
    sendMessage,
  } = useConversation(simulationId)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])


  function handleSendMessage() {
    if (!question.trim()) {
      return
    } 
    sendMessage(question)
    setQuestion('')
  }

  return (
    <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
      <div className="mb-3 flex items-center gap-1.5">
        <span>✨</span>
        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          Insight Financeiro Personalizado
        </span>
      </div>

      {isLoading && (
        <div className="flex">
          <Skeleton
            count={10.5} //quantidade de linhas do skeleton
            baseColor="var(--color-skeleton-base)"
            highlightColor="var(--color-skeleton-highlight)"
            className="mb-3 flex rounded-lg"
            containerClassName="flex-1"
            inline
          />
        </div>
      )}
      {!isLoading && error && (
        <Error
          simulationId={simulationId}
          message={error}
          onRetry={() => {
            fetchInsight(simulationId)
          }}
        />
      )}
      {!isLoading && insight && !error && <Content insight={insight} />}

      {!isLoading && insight && !error && (
        <div className="mt-6 border-t border-border pt-4">
          <div className="flex flex-col gap-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${message.role === 'user' ? 'bg-primary text-white self-end'
                  : 'bg-gray-200 text-gray-800 self-start'
                  } rounded-lg p-3 max-w-[80%]`}
              >
                {message.content}
              </div>
            ))}

            {isChatLoading && (
              <div className="self-start rounded-lg bg-gray-200 p-3 text-sm text-gray-500">
                Pensando...
              </div>
            )}

            {chatError && (
              <p className="text-sm text-red-500">{chatError}</p>
            )}

            <div ref={messagesEndRef} />

          </div>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1">
              <Input
                placeholder="Faça uma pergunta sobre sua simulação..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>

            <Button
              variant="primary"
              onClick={handleSendMessage}
              disabled={isChatLoading || !question.trim()}
            > 
              Enviar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}