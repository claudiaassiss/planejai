# 💰 Planej.ai

## 📖 Sobre o projeto

O **Planej.ai** é uma aplicação web que ajuda o usuário a entender sua situação financeira e traçar um caminho realista até um objetivo (uma viagem, uma reserva de emergência, um curso, etc). A partir de dados simples renda, gastos fixos, dívidas e a meta desejada, o app calcula a viabilidade do plano e usa a API do Gemini para gerar um diagnóstico personalizado, com sugestões práticas e um chat de acompanhamento para tirar dúvidas sobre o resultado.

## 🎬 Demonstração

![Renda](image.png)   ![Custos fixos](image-1.png)  ![Dívidas](image-2.png)  ![Meta](image-3.png) ![Valor da meta](image-4.png) ![Prazo](image-5.png)
![Simulação](image-6.png)  ![Chat](image-7.png)  ![Histórico](image-8.png)

## ✨ Funcionalidades

- [x] Simulação guiada por formulário em etapas (renda, custos fixos, dívidas, meta e prazo)
- [x] Máscara automática de valores em reais
- [x] Cálculo de viabilidade da meta com base no saldo mensal disponível
- [x] Diagnóstico financeiro personalizado gerado por IA (Gemini)
- [x] Sugestões de economia, renda extra e investimentos
- [x] Chat de acompanhamento com contexto da simulação
- [x] Histórico de simulações, com consulta e exclusão
- [x] Tema claro/escuro com persistência de preferência

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- **[React 19](https://react.dev/)** — biblioteca para construção da interface
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[Vite](https://vitejs.dev/)** — bundler e servidor de desenvolvimento
- **[React Router](https://reactrouter.com/)** — roteamento entre páginas
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização utilitária
- **[Lucide React](https://lucide.dev/)** — ícones
- **[React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton)** — estados de carregamento
- **[Google Gemini API](https://ai.google.dev/)** — geração do diagnóstico financeiro e das respostas do chat
- **[Oxlint](https://oxc.rs/)** — lint

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Um gerenciador de pacotes ([npm](https://www.npmjs.com/), já incluso no Node.js)
- Uma chave de API do [Google AI Studio](https://aistudio.google.com/) (Gemini)

## 📦 Instalação

```bash
# Clone este repositório
git clone https://github.com/claudiaassiss/planejai.git

# Acesse a pasta do projeto
cd planejai

# Instale as dependências
npm install

## 📁 Estrutura de pastas

src/
├── components/
│   ├── features/          # Componentes específicos de cada funcionalidade
│   │   ├── Simulation/         # Formulário de simulação (etapas, hero, progresso)
│   │   ├── SimulationResults/  # Cards de resultado e histórico
│   │   └── Insights/           # Exibição do diagnóstico de IA
│   ├── layout/             # Layout raiz e cabeçalho
│   └── shared/              # Componentes reutilizáveis (Button, Input, Divider...)
├── context/theme/          # Contexto de tema claro/escuro
├── data/                    # Etapas do formulário e construção dos prompts de IA
├── hooks/                   # Hooks customizados (simulação, insight, conversa, tema)
├── pages/                   # Páginas da aplicação
├── services/                # Integração com a API do Gemini
├── utils/                    # Funções utilitárias (moeda, cálculos financeiros)
└── router.tsx                # Definição das rotas

## 👩‍💻 Autora

Desenvolvido por **Claudia Assis**, estudante de Análise e Desenvolvimento de Sistemas.

<a href="https://github.com/claudiaassiss" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-@claudiaassiss-181717?logo=github&logoColor=white" alt="GitHub" />
</a