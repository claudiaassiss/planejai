# 💰 Planej.ai

## Sobre o projeto

O Planej.ai é uma aplicação web desenvolvida para auxiliar no planejamento financeiro pessoal por meio de simulações financeiras e recursos de Inteligência Artificial Generativa.

A aplicação permite que o usuário informe dados como renda, custos fixos, dívidas, objetivo financeiro e prazo, utilizando essas informações para calcular a viabilidade da meta.

A partir dos dados da simulação, a aplicação utiliza a API do Google Gemini para gerar um diagnóstico personalizado, apresentando sugestões práticas relacionadas à organização financeira, economia, geração de renda e planejamento.

Além do diagnóstico, o Planej.ai também possui um chat de acompanhamento com IA, permitindo que o usuário tire dúvidas e converse sobre os resultados obtidos na simulação.

O projeto foi desenvolvido como parte de um desafio de programação aplicada, dividido em etapas de desenvolvimento, incluindo a implementação do histórico de simulações e posteriormente a funcionalidade de interação com IA.

## Objetivo

O principal objetivo do Planej.ai é tornar o planejamento financeiro mais simples, acessível e personalizado.

A proposta é utilizar tecnologia para transformar números e informações financeiras em recomendações que possam ser compreendidas e utilizadas pelo usuário no seu planejamento.

O projeto busca:

- Facilitar a análise da situação financeira;
- Avaliar a viabilidade de metas;
- Utilizar IA para gerar recomendações personalizadas;
- Apresentar sugestões práticas;
- Permitir acompanhamento através de um chat com IA;
- Facilitar a consulta de simulações anteriores.

## Funcionalidades

- [x] Simulação guiada por formulário em etapas (renda, custos fixos, dívidas, meta e prazo)
- [x] Máscara automática de valores em reais
- [x] Cálculo de viabilidade da meta com base no saldo mensal disponível
- [x] Diagnóstico financeiro personalizado gerado por IA (Gemini)
- [x] Sugestões de economia, renda extra e investimentos
- [x] Chat de acompanhamento com contexto da simulação
- [x] Histórico de simulações, com consulta e exclusão
- [x] Tema claro/escuro com persistência de preferência

## Demonstração

| Renda | Custos fixos | Dívidas |
|---|---|---|
| ![Renda](docs/images/image0.png) | ![Custos fixos](docs/images/image1.png) | ![Dívidas](docs/images/image2.png) |

| Meta | Valor da meta | Prazo |
|---|---|---|
| ![Meta](docs/images/image3.png) | ![Valor da meta](docs/images/image4.png) | ![Prazo](docs/images/image5.png) |

| Simulação | Chat | Histórico |
|---|---|---|
| ![Simulação](docs/images/image6.png) | ![Chat](docs/images/image7.png) | ![Histórico](docs/images/image8.png) |

## Tecnologias utilizadas

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

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Um gerenciador de pacotes ([npm](https://www.npmjs.com/), já incluso no Node.js)
- Uma chave de API do [Google AI Studio](https://aistudio.google.com/) (Gemini)

## Instalação

**1. Clone este repositório**

\`\`\`bash
git clone https://github.com/claudiaassiss/planejai.git
\`\`\`

**2. Acesse a pasta do projeto**

\`\`\`bash
cd planejai
\`\`\`

**3. Instale as dependências**

\`\`\`bash
npm install
\`\`\`

**4. Configure a variável de ambiente**

Crie um arquivo `.env` na raiz do projeto com sua chave da API do Gemini:

\`\`\`bash
VITE_GEMINI_API_KEY=sua_chave_aqui
\`\`\`

> ⚠️ Confira no código-fonte (procure por `import.meta.env`) qual é o nome exato dessa variável no seu projeto, e ajuste aqui caso seja diferente.

**5. Rode o projeto em modo de desenvolvimento**

\`\`\`bash
npm run dev
\`\`\`

A aplicação estará disponível em `http://localhost:5173` (ou na porta indicada no terminal).

## Autora

Feito por **Claudia Assis** 💜

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/claudia-almeida-53a46831b/)
[![GitHub](https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github)](https://github.com/claudiaassiss)
