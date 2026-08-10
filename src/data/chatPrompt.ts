import { calcMonthlySavings } from "@/utils/simulation";
import type { ChatMessage } from "./chat";
import type { SimulationRecord } from "./simulation";
import { parseCurrency } from "@/utils/currency";

export function chatPrompt(
    simulation: SimulationRecord,
    conversationHistory: ChatMessage[],
    newQuestion: string,
) {
  const { income, expenses, debts, goalName, goalAmount, goalDeadline } = simulation;
  
  const historyText = conversationHistory
    .map((message) => `${message.role === 'user' ? 'Usuário' : 'Assistente'}: ${message.content}`)
    .join('\n');

    const monthlySavings = calcMonthlySavings(simulation)
    const monthlySavingsNeeded =
       parseCurrency(goalAmount) / parseInt(goalDeadline)

   return `
        Você é um educador financeiro especializado em finanças pessoais.
        Responda a pergunta do usuário com base nos dados da simulação financeira fornecida, considerando o histórico de conversa anterior, se houver.  

        Você está respondendo uma pergunta de acompanhamento sobre uma simulação financeira já realizada. Sua resposta será exibida como texto simples 
        numa conversa de chat, então não use formatação especial.

        Dados da simulação:
        - Renda mensal bruta: ${income}
        - Custos fixos essenciais: ${expenses}
        - Dívidas e parcelas mensais: ${debts}
        - Valor disponível por mês: ${monthlySavings} reais
        - Meta: ${goalName}
        - Custo da meta: ${goalAmount}
        - Prazo desejado: ${goalDeadline} meses
        - Economia mensal necessária para atingir a meta no prazo: ${monthlySavingsNeeded} reais
        - Saldo após reserva para a meta: ${monthlySavings - monthlySavingsNeeded} reais

        ${conversationHistory.length > 0 ? `Conversa até agora:\n${historyText}` : ''}

        Pergunta do usuário: ${newQuestion}

        Regras:
        - Responda em português do Brasil
        - Seja claro, didático e encorajador, voltado para pessoas sem conhecimento financeiro
        - Forneça respostas concisas e objetivas, sem repetir informações já fornecidas
        - Não use markdown
        - Evite respostas genéricas, seja específico e prático
        
   ` 
}