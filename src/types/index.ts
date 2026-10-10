export type AspectRatioType = '9:16' | '4:5' | '1:1';

export interface TemplateTrackMock {
  title: string;
  artist: string;
  genre: string;
  bpm: number;
  key: string;
  timecode: string;
}

export interface TemplateItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  mockTrack: TemplateTrackMock;
  accentColor: string;
  secondaryColor?: string;
  badge: string;
  safeZoneReady: boolean;
}

export interface TechnicalPillar {
  id: string;
  title: string;
  kicker: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
}

export interface PlanItem {
  id: string;
  name: string;
  type: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  turnaround: string;
  outputQuality: string;
  deliverables: string[];
  highlights: string[];
  ctaLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
