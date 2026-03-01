# Deploy na Vercel (online)

## 1. Deploy pelo terminal

Na pasta do projeto:

```powershell
vercel --prod
```

(Se ainda não tiver logado: `vercel login`.)

O projeto já está linkado (pasta `.vercel`). O build roda nos servidores da Vercel (Linux), então não depende do `cmd.exe` do seu PC.

## 2. Variante Brasil no ar

No [Dashboard da Vercel](https://vercel.com/dashboard) → seu projeto **worldmonitor** → **Settings** → **Environment Variables**:

- Adicione **`VITE_VARIANT`** = **`br`** (para produção em português Brasil).
- Opcional: defina as mesmas variáveis do seu `.env` (ex.: `GROQ_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `FINNHUB_API_KEY`) para as APIs funcionarem online.

Depois faça um novo deploy (**Redeploy** no dashboard ou `vercel --prod` de novo) para o build usar as novas variáveis.

## 3. Build e comando de build

- **Build Command:** deixe o padrão (Vercel detecta Vite) ou use `npm run build`.
- Com **`VITE_VARIANT=br`** nas variáveis de ambiente, o build já gera a variante Brasil.
- **Output Directory:** `dist`.

## 4. Rodar localmente (Windows)

Scripts ajustados para não depender de `cross-env`:

```powershell
npm run dev
npm run dev:br
```

Se aparecer **`Cannot find module 'rollup/parseAst'`** (bug do npm no Windows com dependências opcionais), faça uma reinstalação limpa:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
```

Depois:

```powershell
npm run dev:br
```
