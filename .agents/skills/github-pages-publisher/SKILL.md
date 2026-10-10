---
name: github-pages-publisher
description: Valida, compila e prepara o deploy para o GitHub Pages via GitHub Actions.
---

# GitHub Pages Publisher Skill

Esta skill guia e executa o processo completo de validação, compilação e publicação da Landing Page do **DJ Clip Cutter** no GitHub Pages através do workflow automatizado do GitHub Actions.

## Passos de Execução

### 1. Checagem do `base: './'` no `vite.config.ts`
Certifique-se de que a configuração do Vite utiliza caminhos relativos para evitar erros 404 em assets no GitHub Pages:
```typescript
export default defineConfig({
  base: './',
  plugins: [react()],
})
```

### 2. Validação da Esteira do GitHub Actions (`.github/workflows/deploy.yml`)
Confirme se o workflow de deploy existe e possui:
- Trigger em push na branch `main` e `workflow_dispatch`.
- Permissões de `pages: write` e `id-token: write`.
- Step de build com `npm ci` e `npm run build`.
- Upload de artifact da pasta `./dist`.
- Presença do arquivo `.nojekyll` em `public/` (se necessário) para evitar que o Jekyll ignore arquivos com underline.

### 3. Execução do Build Local
Antes de qualquer push, valide localmente para garantir ausência de erros de tipagem e de empacotamento:
```bash
npm run lint
npm run build
```
Certifique-se de que a pasta `dist/` foi gerada corretamente com `index.html` e os assets empacotados.

### 4. Instrução de Commit e Push para a Branch Main
Com o build local validado, adicione as alterações, faça o commit com mensagem descritiva e envie para o repositório remoto:
```bash
git add .
git commit -m "chore: deploy updates to github pages"
git push origin main
```
O GitHub Actions iniciará automaticamente o job `build-and-deploy` e publicará a nova versão no GitHub Pages.
