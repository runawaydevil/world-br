# World Monitor

**Painel de inteligência em tempo real** — notícias agregadas com IA, monitoramento geopolítico e infraestrutura em uma única interface.

Esta é **nossa versão** do projeto, com foco na variante **Brasil** (interface em português, fontes brasileiras e rodapé Grupo Murad). Mantida pelo **Grupo Murad**.

**Repositório:** [github.com/runawaydevil/world-br](https://github.com/runawaydevil/world-br)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

![World Monitor](new-world-monitor.png)

---

## Por que o World Monitor?

| Problema | Solução |
| -------- | ------- |
| Notícias espalhadas em dezenas de fontes | **Um único painel** com 100+ feeds curados |
| Sem contexto geográfico para eventos | **Mapa interativo** com 40+ camadas acionáveis |
| Sobrecarga de informação | **Resumos com IA** e detecção de pontos críticos |
| Ferramentas OSINT caras | **Código aberto** (AGPL v3) |
| Feeds estáticos | **Atualizações em tempo real** e vídeos ao vivo |
| IA só na nuvem | **Ollama / LM Studio** local, sem envio de dados |
| Só na web | **PWA** instalável e app desktop (Tauri) |
| Mapas 2D | **Globo 3D** WebGL (deck.gl) com dezenas de camadas |

---

## Variantes

O projeto roda em várias variantes a partir do mesmo código. No cabeçalho você pode alternar entre:

- **Full** — geopolítica, conflitos, infraestrutura global
- **Tech** — startups, IA, nuvem, segurança
- **Finance** — mercados, bancos centrais, câmbio
- **Happy** — notícias positivas
- **Brasil** — interface em português do Brasil, notícias e fontes brasileiras (G1, UOL, Folha, Valor, TecMundo, etc.)

Você pode rodar localmente ou fazer deploy na Vercel e definir a variante desejada.

---

## Principais recursos

- **Interface em vários idiomas** — incluindo português do Brasil (pt-BR). Na variante Brasil, o idioma padrão é pt-BR.
- **Mapa 3D** — deck.gl + MapLibre; dezenas de camadas (conflitos, bases militares, cabos submarinos, protestos, desastres, clima, mercados, etc.).
- **Resumos com IA** — cadeia Ollama (local) → Groq → OpenRouter → T5 no navegador; cache em Redis.
- **Índice de instabilidade por país (CII)** — pontuação em tempo real; breves por país com notícias e sinais ativos.
- **Notícias ao vivo** — 150+ feeds RSS; variante Brasil com fontes como G1, Folha, Valor, CNN Brasil, TecMundo.
- **Mercados** — Finnhub, radar macro de 7 sinais, cripto, ETFs.
- **PWA** — instalável, mapa offline, tema escuro/claro.
- **App desktop** (Tauri) — Windows, macOS, Linux, com sidecar Node e chaves no cofre do sistema.

---

## Início rápido

### Pré-requisitos

- **Node.js** 18+ (recomendado LTS)
- Opcional: **Vercel CLI** (`npm i -g vercel`) para rodar frontend + APIs localmente

### Clone e instalação

```bash
git clone https://github.com/runawaydevil/world-br.git
cd world-br
npm install
```

### Rodar localmente

**Só o frontend (mapa e UI; APIs/notícias podem ficar vazias sem backend):**

```bash
npm run dev
```

Abra no navegador a URL indicada (ex.: `http://localhost:4582`). Se a porta 4582 estiver em uso, o Vite usará outra (ex.: 4583).

**Variante Brasil:**

```bash
npm run dev:br
```

**Frontend + APIs (recomendado se tiver Vercel CLI):**

```bash
cp .env.example .env.local   # preencha as chaves que for usar
vercel dev
```

Abre em `http://localhost:4582` (ou na porta que o Vercel indicar).

### Variáveis de ambiente

O app funciona sem chaves; painéis que dependem de APIs ficam vazios ou desativados. Para uso completo, copie e preencha:

```bash
cp .env.example .env.local
```

Principais grupos (todos opcionais):

| Grupo | Variáveis | Uso |
| ----- | --------- | --- |
| **IA** | `GROQ_API_KEY`, `OPENROUTER_API_KEY` | Resumos na nuvem |
| **Cache** | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Deduplicação e cache |
| **Mercados** | `FINNHUB_API_KEY` | Cotações e índices |
| **UI** | `VITE_VARIANT` (`full`, `tech`, `finance`, `happy`, `br`) | Variante da build |

Consulte [.env.example](.env.example) para a lista completa.

---

## Deploy na Vercel

1. Conecte o repositório ao projeto na Vercel.
2. Em **Settings → Environment Variables**, defina pelo menos `VITE_VARIANT` (ex.: `br` para a variante Brasil) e as chaves que quiser (Groq, Upstash, Finnhub, etc.).
3. O build padrão (Vite) já usa `VITE_VARIANT`; pasta de saída: `dist`.

Para detalhes locais e variante Brasil, veja [docs/DEPLOY_VERCEL.md](docs/DEPLOY_VERCEL.md).

---

## Stack técnica

| Camada | Tecnologias |
| ------ | ----------- |
| **Frontend** | TypeScript, Vite, deck.gl, MapLibre GL, PWA |
| **IA** | Ollama / LM Studio, Groq, OpenRouter, Transformers.js |
| **APIs** | Vercel Edge Functions (api/), Redis (Upstash) |
| **Desktop** | Tauri 2 (Rust) + sidecar Node.js |

---

## Licença

GNU Affero General Public License v3.0 (AGPL-3.0) — veja [LICENSE](LICENSE).

---

Desenvolvido pelo **Grupo Murad**.
