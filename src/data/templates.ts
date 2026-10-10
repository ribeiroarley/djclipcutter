import type { TemplateItem } from '../types';

export const TEMPLATES_DATA: TemplateItem[] = [
  {
    id: 'editorial-waveform',
    name: 'Card Editorial com Waveform',
    tagline: 'Minimalismo editorial de revista internacional com espectro dinâmico',
    category: 'Editorial Studio',
    description: 'Composição de alta tipografia com waveform vetorial de alta definição sincronizada no beat exato. Informações de BPM, tonalidade harmônica e minutagem precisa.',
    features: [
      'Waveform vetorial fluida em Neon #FF5500',
      'Tipografia editorial suíça com grid estrito',
      'Indicadores harmônicos (Camelot Wheel / Key) e BPM dinâmico',
      'Compatibilidade perfeita com capas de gravadoras'
    ],
    mockTrack: {
      title: 'Obsidian Pulse (Extended Festival Cut)',
      artist: 'Aethelgard & Resonance',
      genre: 'Melodic Techno',
      bpm: 126,
      key: '8A (A Minor)',
      timecode: '28:44 / 31:12'
    },
    accentColor: '#FF5500',
    secondaryColor: '#00E5FF',
    badge: 'Mais Utilizado',
    safeZoneReady: true,
  },
  {
    id: 'vinil-3d',
    name: 'Vinil de Luxo 3D (33 RPM)',
    tagline: 'Estética analógica premium com rotação fotorrealista e reflexos luminosos',
    category: 'High-End Physical',
    description: 'Simulação física de acetato 180g girando a 33 RPM com iluminação de palco em tempo real, ranhuras hiperdetalhadas e selo central personalizado com a identidade do artista.',
    features: [
      'Efeito de rotação realista 33 RPM com iluminação especular',
      'Ranhuras micro-entalhadas com profundidade visual de alta definição',
      'Envelope protetor fosco com acabamento de colecionador',
      'Braço fonocaptor reativo aos picos de graves'
    ],
    mockTrack: {
      title: 'Analog Horizons (Warehouse Edit)',
      artist: 'Kaelen Vance',
      genre: 'Raw & Deep Techno',
      bpm: 130,
      key: '4A (F Minor)',
      timecode: '42:15 / 45:30'
    },
    accentColor: '#FF5500',
    secondaryColor: '#FF8800',
    badge: 'Visual Analógico',
    safeZoneReady: true,
  },
  {
    id: 'cd-jewel-case',
    name: 'CD Jewel Case Y2K',
    tagline: 'Acabamento acrílico translúcido com prisma holográfico da era de ouro eletrônica',
    category: 'Retro-Futurista',
    description: 'Estética nostálgica de estojo acrílico polido com refração luminosa holográfica. O disco reflete arco-íris conforme a câmera se movimenta, trazendo autenticidade máxima de clube.',
    features: [
      'Refração acrílica com adesivos de identificação de gravadora',
      'Gradiente prismático holográfico sobre a mídia prateada',
      'Spine lateral com catalogação de estúdio serializada',
      'Encarte frontal modular com artes do set'
    ],
    mockTrack: {
      title: 'Digital Euphoria (Club Remaster 2026)',
      artist: 'Vektor 99 & Solaria',
      genre: 'Euro Trance / Neo-Rave',
      bpm: 138,
      key: '11B (A Major)',
      timecode: '15:20 / 18:05'
    },
    accentColor: '#00E5FF',
    secondaryColor: '#FF5500',
    badge: 'Y2K Club Culture',
    safeZoneReady: true,
  },
  {
    id: 'pendrive-pro-usb',
    name: 'Pen Drive Pro USB',
    tagline: 'O amuleto indispensável de todo DJ de palco em design industrial blindado',
    category: 'Booth Hardware',
    description: 'Representação em alumínio anodizado da mídia de alta velocidade utilizada nas cabines de festival. LEDs de atividade piscam em sincronia com o fluxo de dados e os drops.',
    features: [
      'Carcaça de liga metálica usinada com gravação a laser',
      'LED de leitura/escrita piscando na cadência exata do bumbo',
      'Medidor de capacidade de exportação em alta resolução',
      'Acabamento fosco anti-risco com detalhes industriais'
    ],
    mockTrack: {
      title: 'Mainstage Drive (Unreleased VIP)',
      artist: 'Nexus Prime',
      genre: 'Peak Time Driving',
      bpm: 132,
      key: '6A (G Minor)',
      timecode: '52:10 / 54:55'
    },
    accentColor: '#00E5FF',
    secondaryColor: '#FF5500',
    badge: 'Pro DJ Tool',
    safeZoneReady: true,
  },
  {
    id: 'now-playing-player',
    name: 'Now Playing Player',
    tagline: 'Interface moderna de streaming com scrubber animado e tipografia limpa',
    category: 'Streaming UI',
    description: 'Design contemporâneo para os puristas da clareza visual. Barra de progresso com tempo decorrido, controles de transporte estilizados e ênfase total na arte da faixa e no produtor.',
    features: [
      'Barra de scrubber fluida marcando milissegundos',
      'Blur orgânico do background gerado pela capa oficial',
      'Indicador de fidelidade 24-bit / 96kHz Lossless',
      'Transições suaves entre nome da track e do artista'
    ],
    mockTrack: {
      title: 'Solar Eclipse (Vocal Deep Mix)',
      artist: 'Elysian Soul ft. Mira',
      genre: 'Deep & Organic House',
      bpm: 122,
      key: '2A (E-Flat Minor)',
      timecode: '08:14 / 11:22'
    },
    accentColor: '#FF5500',
    secondaryColor: '#FFFFFF',
    badge: 'Alta Legibilidade',
    safeZoneReady: true,
  },
  {
    id: 'fita-cassete-k7',
    name: 'Fita Cassete Vintage K7',
    tagline: 'Textura magnética orgânica com bobinas giratórias e saturação nostálgica',
    category: 'Vintage Audio',
    description: 'Carretéis mecânicos de fita magnética que se movem em tempo real. Janela transparente com indicador de lado A/B e rotulagem manual datada, ideal para sets underground e lo-fi.',
    features: [
      'Movimento real de transferência de fita entre bobinas',
      'Textura plástica fumê fosca com parafusos de latão',
      'Tipografia datilografada estilizada e carimbos de data',
      'Efeito de calor analógico no visual de áudio'
    ],
    mockTrack: {
      title: 'Tape Session 004 (Berlin Underground)',
      artist: 'MonoChrome Sessions',
      genre: 'Dub Techno',
      bpm: 124,
      key: '9A (G-Sharp Minor)',
      timecode: '33:10 / 36:40'
    },
    accentColor: '#FFAA00',
    secondaryColor: '#FF5500',
    badge: 'Underground Aesthetic',
    safeZoneReady: true,
  },
  {
    id: 'mixer-dj-pro-vu',
    name: 'Mixer de DJ Pro (VU Meter LED)',
    tagline: 'Colunas de LEDs hiper-reativas calibradas em dB para visualização de ganho puro',
    category: 'Booth Hardware',
    description: 'O coração da cabine em destaque. Bargraphs luminosos de 12 segmentos verdes, amarelos e vermelhos que sobem e descem instantaneamente na batida de graves e médios.',
    features: [
      'Medidores VU com decaimento balístico de padrão estúdio',
      'Escala calibrada de -40dB a +12dB Peak Clipping',
      'Potenciômetros fader estéreo com serigrafia tátil',
      'Glow reflexivo no painel metálico escovado'
    ],
    mockTrack: {
      title: 'Redline Impact (Festival Anthem)',
      artist: 'Overdrive Protocol',
      genre: 'Hard Techno',
      bpm: 145,
      key: '1A (A-Flat Minor)',
      timecode: '19:45 / 22:15'
    },
    accentColor: '#FF1744',
    secondaryColor: '#00E676',
    badge: 'Máximo Impacto',
    safeZoneReady: true,
  },
  {
    id: 'fone-cabine-dj',
    name: 'Fone de Cabine DJ',
    tagline: 'Ícone supremo de monitoramento profissional com almofada e headband reforçado',
    category: 'Iconic Booth',
    description: 'A silhueta emblemática dos fones profissionais de estúdio suspensa com iluminação de recorte e reflexos escovados. O cabo espiralado reage dinamicamente aos drops.',
    features: [
      'Alça de couro sintético com textura micro-perfurada',
      'Conchas acústicas com articulação giratória 90 graus',
      'Cabo espiralado estéreo com plug P10 banhado a ouro',
      'Iluminação dramática de backlight de festival'
    ],
    mockTrack: {
      title: 'Cue Monitor (Live Master Track)',
      artist: 'Acoustic Shift',
      genre: 'Progressive House',
      bpm: 125,
      key: '5B (B-Flat Major)',
      timecode: '25:00 / 27:35'
    },
    accentColor: '#00E5FF',
    secondaryColor: '#FF5500',
    badge: 'DJ Icon',
    safeZoneReady: true,
  },
  {
    id: 'cdj-jog-wheel-pro',
    name: 'CDJ Jog Wheel Pro',
    tagline: 'O display central iluminado mais cobiçado dos palcos mundiais',
    category: 'Booth Hardware',
    description: 'O clássico anel iluminado de display circular central com agulha indicadora de rotação angular, anel de LEDs com aceleração de pitch bend e arte da track no visor LCD.',
    features: [
      'Display LCD central com marcador de posição de agulha',
      'Halo de LEDs circulares em Azul Pioneer CDJ e Laranja Neon',
      'Textura antiderrapante micro-ranhurada na borda exterior',
      'Indicador de Beat Sync e Quantize ativo no visor'
    ],
    mockTrack: {
      title: 'Midnight Transmission (Festival Cut)',
      artist: 'Cipher & Lumina',
      genre: 'Melodic Techno',
      bpm: 128,
      key: '7A (D Minor)',
      timecode: '38:12 / 41:00'
    },
    accentColor: '#00E5FF',
    secondaryColor: '#FF5500',
    badge: 'Padrão Cabine Pro',
    safeZoneReady: true,
  },
];
