# DIRETRIZES DO PROJETO — DJ CLIP CUTTER LANDING PAGE

## 1. Identidade e Posicionamento de Marca
- Posicionamento: Serviço de produção audiovisual e cortes sob demanda para DJs, especializado e autônomo.
- Tom de Voz: Profissional, direto ao ponto, técnico sem pedantismo, prático e ágil.
- Proibições Rígidas (NUNCA incluir):
  * "Studio Broadcast", "Broadcast Master" ou qualquer menção a estúdio de TV/rádio.
  * "OaaS", "Outcome as a Service" ou jargões corporativos de startup.
  * "Full-Bleed de Palco", "Filtro CAS 0.6" ou códigos de engenharia em telas para clientes.
  * Promessas engessadas de resolução ("4K nativo") ou taxa de quadros fixa ("60 FPS").
  * Marcas ou referências a concorrentes (1001Tracklists, Cercle, etc.).
  * Links ou botões de WhatsApp.
- Canal Oficial Único: djclipcutter@gmail.com.
  * Todos os botões mailto DEVEM incluir ?subject= e &body= pré-preenchidos.

## 2. Design System & Tokens
- Cores Oficiais:
  * Background: #050a12 (Dark Profundo) / Cards: #090e17 (Surface com borda sutil #182234)
  * Destaque Neon: #FF5500 (Laranja SoundCloud)
  * Texto Primário: #F4F4F5 / Texto Secundário: #A1A1AA
- Tipografia: Bebas Neue (títulos/impacto), DM Sans (corpo), Space Mono (metadados/código).
- Safe Zones: Visualização protegida para 1:1 (Feed quadrado), 4:5 (Feed retrato) e 9:16 (Reels/Stories).

## 3. Padrões de Código e Responsividade (Mobile-First)
- Stack: React 19 + Vite + TypeScript + Tailwind CSS.
- Responsividade: Zero overflow horizontal em viewports estreitos (360px a 430px).
  * Todos os botões devem ter max-w-full e box-sizing contido.
  * Não utilizar classes com larguras fixas em pixels sem controle responsivo.
- Verificação Obrigatória: Antes de concluir qualquer tarefa, rodar `npm run lint` e `npm run build`.
