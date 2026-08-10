import { Button } from "@/components/shared/Button"
import type { SimulationRecord } from "@/data/simulation"
import { calcMonthlySavings } from "@/utils/simulation"
import { Goal, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface SimulationHistoryCardProps {
    simulation: SimulationRecord
    onDelete: (id: string) => void
}

export function SimulationHistoryCard({ simulation, onDelete }: SimulationHistoryCardProps) {
    const monthlySavings = calcMonthlySavings(simulation)
    const formattedDate = simulation.createdAt
        ? new Date(simulation.createdAt).toLocaleDateString('pt-BR')
        : 'Data não disponível'
        
    const navigate = useNavigate()

    return (
        <div className="bg-card flex flex-col gap-4 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
            <div className="bg-muted-primary flex h-10 w-10 items-center justify-center rounded-full">
                <Goal size={20} className="text-primary" />
            </div>
            <div>
            <p className="text-foreground font-semibold">
                {simulation.goalName}
            </p>
            <p className="text-muted-foreground text-xs">{formattedDate}</p>
            </div>
        </div>

        <div className="flex gap-6">
            <div>
            <p className="text-muted-foreground text-xs uppercase">Custo da meta</p>
            <p className="text-foreground font-semibold">R$ {simulation.goalAmount}</p>
            </div>
            <div>
            <p className="text-muted-foreground text-xs uppercase">Prazo</p>
            <p className="text-foreground font-semibold">{simulation.goalDeadline} meses</p>
            </div>
            <div>
            <p className="text-muted-foreground text-xs uppercase">Economia mensal</p>
            <p className="text-foreground font-semibold">R$ {monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <Button variant="ghost" icon={Trash2} onClick={() => onDelete(simulation.id)} />
            <Button variant="secondary" onClick={() => void navigate(`/resultado/${simulation.id}`)} >
                Ver detalhes
            </Button>
        </div>
        </div>
    )
}
