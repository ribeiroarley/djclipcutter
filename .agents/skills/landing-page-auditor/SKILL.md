---
name: landing-page-auditor
description: Audita novos componentes, textos e layouts para garantir aderência ao design system e ausência de jargões proibidos.
---

# Landing Page Auditor Skill

Esta skill audita novos componentes, textos e layouts da Landing Page do **DJ Clip Cutter** para garantir aderência estrita ao design system, responsividade mobile-first e conformidade com o tom de voz profissional autônomo (sem jargões corporativos).

## Checklist de Execução

### 1. Varredura Textual e Conformidade de Marca
Execute verificações no código-fonte para assegurar que nenhum termo proibido foi introduzido:
- **Termos Proibidos**:
  * `"OaaS"`, `"Outcome as a Service"`
  * `"Studio Broadcast"`, `"Broadcast Master"`, referências a estúdio de TV/rádio
  * `"60 FPS"`, `"60FPS"` (use "Fluidez Nativa", "Alta Fidelidade" ou "Otimizado para Reels")
  * `"Full-Bleed de Palco"`, `"Filtro CAS 0.6"` ou códigos de engenharia expostos ao usuário
  * Menções a marcas terceiras concorrentes (`1001Tracklists`, `Cercle`, etc.)
  * Botões ou links de WhatsApp (apenas o e-mail oficial é permitido)

```bash
git grep -i "oaas"
git grep -i "broadcast"
git grep -i "fps"
git grep -i "full-bleed"
git grep -i "cas 0.6"
git grep -i "whatsapp"
```

### 2. Validação dos Botões e Links de Contato
- O canal oficial único é `djclipcutter@gmail.com`.
- Todos os botões e links `mailto:` DEVEM utilizar o helper `getSecureMailto()` com:
  * Parâmetro `subject` preenchido (ex: `"Solicitação de Produção de Cortes — DJ Clip Cutter"`).
  * Parâmetro `body` com template estruturado de 4 itens (Link do Set, Trecho preferido, Formato desejado, Nome Artístico/Instagram).

### 3. Checagem Mobile-First (360px a 430px)
- **Contenção Estrita**: Nenhum elemento pode estourar a largura da tela (`w-full max-w-full box-border`).
- **Botões**: Não utilizar larguras fixas em pixels (`w-[360px]`). Usar `w-full` com `max-w-md` ou similar e padding simétrico.
- **Estrutura Base**: Manter `overflow-x-hidden w-full max-w-[100vw]` no contêiner raiz.

### 4. Execução de Linting e Build
Certifique-se de que a árvore de código compila com zero avisos e zero erros:
```bash
npm run lint
npm run build
```
