import type { TechnicalPillar } from '../types';

export const TECHNICAL_PILLARS: TechnicalPillar[] = [
  {
    id: 'curadoria-drops',
    title: 'Curadoria dos Melhores Momentos',
    kicker: 'Pilar 01 • Sincronia Perfeita com o Drop',
    description: 'Nenhum corte aleatório. Analisamos a densidade harmônica e a tensão do build-up para isolar o exato compasso, a pausa de expectativa e o impacto fulminante do drop na pista.',
    metric: '100%',
    metricLabel: 'Sincronia Perfeita no Beat',
    tags: ['Sincronia no Drop', 'Curadoria Musical', 'Trava de Compasso', 'Energia de Pista']
  },
  {
    id: 'processamento-gpu',
    title: 'Alta Fidelidade Visual de Palco',
    kicker: 'Pilar 02 • Renderização de Alta Fidelidade',
    description: 'Reescalonamento de ponta com nitidez adaptativa e interpolação fluida de quadros. Cores com gradação cinematográfica preparadas para reprodução cristalina em telas OLED e displays Retina.',
    metric: 'PRO BITRATE',
    metricLabel: 'Otimização Nativa de Resolução',
    tags: ['Alta Fidelidade Visual', 'Bitrate de Estúdio', 'Nitidez Adaptativa de Palco', 'Zero Compressão Suja']
  },
  {
    id: 'motion-design-reativo',
    title: 'Motion Design Reativo de Palco',
    kicker: 'Pilar 03 • Identidade Visual Viva',
    description: 'A assinatura inconfundível do DJ Clip Cutter: waveforms vetoriais e elementos visuais em Laranja SoundCloud Neon (#FF5500) e Azul Pioneer CDJ (#00E5FF) que pulsam e respondem de verdade à pressão sonora da música.',
    metric: '60 FPS',
    metricLabel: 'Fluidez Fluorescente Sem Latência',
    tags: ['#FF5500 Neon Glow', 'Visual Reativo ao Som', 'Estética Cabine DJ', 'Design Editorial']
  }
];

export const SAFE_ZONE_SPECS = [
  {
    ratio: '9:16',
    title: 'Full Vertical Cinema',
    resolution: '1080 × 1920 (9:16)',
    description: 'Imersão total de tela em smartphones. Os cantos respeitam margens de interface do app para que ícones de like, comentários e legenda nunca tampem os elementos gráficos.',
    status: 'Seguro para Reels, Shorts e TikTok'
  },
  {
    ratio: '4:5',
    title: 'Feed Retrato de Alto Engajamento',
    resolution: '1080 × 1350',
    description: 'O formato com maior área de rolagem orgânica no feed. Todo o card editorial e os dados da faixa permanecem 100% visíveis sem qualquer corte agressivo.',
    status: 'Ideal para posts de feed e carrosséis'
  },
  {
    ratio: '1:1',
    title: 'Safe Zone Central da Grade',
    resolution: '1080 × 1080',
    description: 'O núcleo da composição. A arte do disco, o título do artista e a assinatura do DJ ficam rigorosamente centralizados na miniatura da grade do perfil.',
    status: 'Zero cortes na grade quadrada'
  }
];

export { FAQ_DATA } from './faq';
