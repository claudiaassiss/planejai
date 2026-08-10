import type { ChatMessage } from "@/data/chat"
import type { SimulationFormData, SimulationRecord } from "@/data/simulation"

const LOCAL_STORAGE_KEY = 'simulation-data'

export const useSimulationStorage = () => {
    const saveFormData = (formData: SimulationFormData) => {
        const id = crypto.randomUUID()
        const record: SimulationRecord = { ...formData, id, createdAt: new Date().toISOString() }

        const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
        const savedData = storage
            ? (JSON.parse(storage) as SimulationRecord[])
            : []

        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([...savedData, record])
        )

        return id
    }

    const getFormData = (id: string) => {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY)

        if(!storage) {
            return null
        }

        const savedData = JSON.parse(storage) as SimulationRecord[]
        return savedData.find((record) => record.id === id) || null
    }

    const updateSimulation = (id: string, data: SimulationFormData) => {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
        const savedData = storage
            ? (JSON.parse(storage) as SimulationRecord[])
            : []
        const updated = savedData.map((record) =>
            record.id === id ? {...data } : record
        )

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated))
    }

    const getAllSimulations = () => {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (!storage) {
            return []
        }

        const savedData = JSON.parse(storage) as SimulationRecord[]
        return savedData
    }

    const deleteSimulation = (id: string) => {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (!storage) {
            return
        }

        const savedData = JSON.parse(storage) as SimulationRecord[]
        const updated = savedData.filter((record) => record.id !== id)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated))
    }

    const saveConversation = (id: string, messages: ChatMessage[]) => {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
        const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : []

        const updated = savedData.map((record) =>
            record.id === id ? { ...record, chat: messages } : record)

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated))
    }

    return { saveFormData, getFormData, updateSimulation, getAllSimulations, deleteSimulation, saveConversation }
}