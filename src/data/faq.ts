import type { FaqItem } from '../types';
import { getSecureEmail } from '../utils/security';

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como funciona o envio do material para produção?',
    answer:
      'Você só precisa nos enviar o link da sua apresentação gravada no YouTube ou do set/faixa no SoundCloud. Também aceitamos o envio de arquivos brutos diretamente (vídeo MP4/MOV ou áudio WAV/MP3 de alta fidelidade). A partir daí, nossa tecnologia cuida de todo o mapeamento acústico, recorte e acabamento visual.'
  },
  {
    question: 'Como os melhores momentos do set são selecionados?',
    answer:
      'Utilizamos análise acústica avançada que mapeia as curvas de energia, variações de frequência e picos de RMS do áudio para identificar com precisão matemática os drops, transições e momentos de maior impacto da sua apresentação, garantindo que o vídeo comece e termine no ponto alto da faixa.'
  },
  {
    question: 'Quais formatos de vídeo eu recebo?',
    answer:
      'Todos os cortes são entregues masterizados e prontos para publicação nos principais formatos de rede social: Reels (9:16 vertical), Feed Retrato (4:5) e Stories. Toda a diagramação é projetada com Safe Zones blindadas, garantindo que o artista, o nome da faixa e a barra de ondas sonoras fiquem 100% visíveis tanto no feed em tela cheia quanto no corte quadrado (1:1) da grade do seu perfil.'
  },
  {
    question: 'Qual a diferença entre os cortes de YouTube e os templates de SoundCloud?',
    answer:
      'Para apresentações gravadas em vídeo (YouTube), realizamos o enquadramento vertical inteligente Full-Bleed com resolução máxima preservada e filtro de nitidez adaptativo (AMD CAS) que valoriza os lasers, iluminação e o público de palco. Para sets e faixas de áudio (SoundCloud ou arquivos locais), você escolhe entre nossa coleção de templates interativos com motion design reativo (Vinil 3D, CD Jewel Case, Jog Wheel CDJ-3000, Mixer Pro, Fone de Cabine, entre outros) com waveform que pulsa no ritmo exato do grave.'
  },
  {
    question: 'Posso personalizar os créditos e a identidade visual?',
    answer:
      'Sim. A barra superior pode levar a assinatura editorial oficial ou o seu próprio @ de artista/gravadora. O bloco de créditos inferior exibe com destaque o seu nome artístico e o título oficial do set ou da faixa, com tipografia limpa, moderna e sem quebras de texto.'
  },
  {
    question: 'Como faço para solicitar a produção do meu set?',
    answer: `Trabalhamos no formato sob demanda por set avulso, sem contratos engessados. Basta clicar em qualquer botão de contato da página ou enviar um e-mail diretamente para ${getSecureEmail()} com o link do seu set para combinarmos os detalhes e iniciarmos a produção.`
  }
];
