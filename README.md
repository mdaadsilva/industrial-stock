# industrial-stock

Sistema de Estoque Industrial — projeto de estudo para testes automatizados end-to-end (E2E) com Playwright.

## Objetivo

Este projeto **não é um produto em produção**. Ele existe para servir de base realista para estudo e prática de:

- QA e automação de testes
- Playwright
- Testes E2E (end-to-end)
- Testes de regressão
- Boas práticas de front-end pensando em automação (roles semânticas, labels, `data-testid` quando necessário)

A ideia é construir uma aplicação com cara de sistema corporativo/industrial (controle de estoque, produtos, movimentações, perfis de usuário) para depois escrever e evoluir suítes de testes Playwright em cima dela.

## Contexto de estudo

O projeto é construído de forma incremental. A cada etapa, uma nova funcionalidade é adicionada via Pull Request, com commits e descrições em português, simulando um fluxo de trabalho profissional baseado em branches e revisão de código.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Playwright](https://playwright.dev/) (testes E2E)
- Persistência inicial via `localStorage` (ver [Arquitetura](#arquitetura))

Sem backend, banco de dados ou Docker nesta fase — o foco é o front-end e a automação de testes.

## Instalação

Pré-requisitos: [Node.js](https://nodejs.org/) 20+ e npm.

```bash
npm install
```

## Execução

```bash
npm run dev
```

A aplicação fica disponível em [http://localhost:3000](http://localhost:3000).

## Comandos disponíveis

| Comando               | Descrição                                    |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento          |
| `npm run build`        | Gera o build de produção                      |
| `npm run start`        | Executa o build de produção                   |
| `npm run lint`         | Executa o ESLint                              |

## Playwright

> Configuração ainda não incluída nesta etapa do projeto — em breve.

A construção do front-end prioriza locators recomendados pelo Playwright (`getByRole`, `getByLabel`, `getByText`) em vez de seletores CSS frágeis. `data-testid` é usado apenas quando não há alternativa semântica razoável.

## Arquitetura

```text
src/
├── app/          # Rotas (Next.js App Router) e páginas
├── components/   # Componentes de UI reutilizáveis (layout, elementos genéricos)
├── features/     # Código organizado por domínio (auth, produtos, estoque, etc.)
├── hooks/        # Hooks React reutilizáveis
├── lib/          # Configurações e utilitários centrais da aplicação
├── services/     # Camada de acesso a dados (hoje via localStorage)
├── types/        # Tipos e interfaces TypeScript compartilhados
└── utils/        # Funções utilitárias genéricas

tests/            # Testes E2E com Playwright
```

A camada `services/` isola o acesso a dados do restante da aplicação. Hoje ela é implementada usando `localStorage`, mas a ideia é que essa camada possa futuramente ser substituída por chamadas a uma API real sem exigir mudanças nos componentes ou nas páginas que a consomem.

## Funcionalidades

### Implementado

- Projeto Next.js com App Router, TypeScript, Tailwind CSS e ESLint
- Estrutura de pastas do front-end
- Layout principal (header, sidebar) e dashboard inicial
- Páginas placeholder: login, produtos, estoque, movimentações, usuários

### Planejado

- Configuração de testes E2E com Playwright e teste de smoke inicial
- Autenticação (mockada, sem backend real)
- Perfis de acesso: Admin, Supervisor, Operador
- Cadastro de produtos
- Entrada e saída de estoque
- Alteração de quantidade
- Busca e filtros
- Histórico de movimentações
- Controle de permissões por perfil
- Suíte de testes E2E cobrindo os fluxos acima

## Workflow de contribuição

O projeto segue um fluxo baseado em Pull Requests: cada funcionalidade é implementada em uma branch própria, validada (lint, build e testes) e integrada à `main` via PR, com commits seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/) em português.
