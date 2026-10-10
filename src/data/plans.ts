import type { PlanItem } from '../types';

export const PLANS_DATA: PlanItem[] = [
  {
    id: 'set-avulso',
    name: 'Set Avulso',
    type: 'PRODUÇÃO SOB DEMANDA • FORMATO EXCLUSIVO',
    badge: 'Produção Sob Demanda • Formato Exclusivo',
    isPopular: true,
    description: 'Produção sob demanda para apresentações gravadas, sets completos e faixas autorais. Transformação completa do seu set em vídeos verticais em alta fidelidade prontos para publicação imediata.',
    turnaround: 'Entrega Ágil sob Demanda',
    outputQuality: 'Padrão Studio Broadcast (Resolução Máx. @ 60fps)',
    deliverables: [
      'Cortes verticais em alta definição adaptados para cada rede social (Reels, Feed Retrato e Stories)',
      'Sincronia acústica no drop exato da faixa com precisão milimétrica',
      'Padrão visual de palco com Safe Zones imunes a cortes de interface',
      'Masterização de áudio estéreo com nitidez de estúdio',
      'Escolha entre templates com motion design ou vídeo nativo do YouTube'
    ],
    highlights: [
      'Contratação direta sem mensalidade ou fidelidade',
      'Ajustes finos inclusos até a aprovação final',
      'Taxa de bits pura sem perda de qualidade'
    ],
    ctaLabel: 'Solicitar Produção de Set'
  }
];
