import { SimulationHistoryCard } from "@/components/features/SimulationResults/SimulationHistoryCard"
import { PageHero } from "@/components/shared/PageHero"
import { useSimulationStorage } from "@/hooks/useSimulationStorage"
import { useState } from "react"

export function SimulationHistoryPage() {
    const { getAllSimulations, deleteSimulation } = useSimulationStorage()

    const [simulations, setSimulations] = useState(getAllSimulations())

    const handleDelete = (id: string) => {
        deleteSimulation(id)
        setSimulations(getAllSimulations())
    }

    return (
        <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
            <PageHero
                title="Histórico de simulações"
                subtitle="Acompanhe o histórico de suas simulações e visualize os detalhes de cada uma delas."
            />

            {simulations.length === 0 ? (
                <p className="mt-6 text-center text-muted-foreground">
                    Nenhuma simulação encontrada.
                </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-4">
                {simulations.map((simulation) => (
                    <SimulationHistoryCard
                        key={simulation.id}
                        simulation={simulation}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </main>
    )
}