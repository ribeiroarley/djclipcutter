import React, { useState } from 'react';
import { FAQ_DATA } from '../../data/faq';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { getSecureEmail } from '../../utils/security';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const secureEmail = getSecureEmail();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswerText = (answer: string) => {
    if (answer.includes(secureEmail)) {
      const parts = answer.split(secureEmail);
      return (
        <>
          {parts[0]}
          <a
            href="#contato"
            className="text-accent-neon font-mono font-bold hover:underline hover:text-white transition-colors inline-flex items-center gap-1 mx-1 px-1.5 py-0.5 rounded bg-accent-neon/10 border border-accent-neon/30"
          >
            {secureEmail}
          </a>
          {parts[1]}
        </>
      );
    }
    return answer;
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-bg-secondary/60 relative border-t border-border-official">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <Badge variant="cyan" size="md">
            <span className="flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-cdj-cyan" />
              Transparência de Operação
            </span>
          </Badge>
          <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
            PERGUNTAS FREQUENTES (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-text-secondary font-sans">
            Tudo o que você precisa saber sobre o fluxo de corte, entrega em alta fidelidade e contratação sob demanda.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl bg-bg-card border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-accent-neon/40 shadow-[0_0_20px_rgba(255,85,0,0.08)]'
                    : 'border-[#182234] hover:border-accent-neon/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-sm sm:text-base leading-snug transition-colors ${
                      isOpen ? 'text-accent-neon' : 'text-white group-hover:text-accent-neon'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-bg-primary border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 border-accent-neon text-accent-neon shadow-[0_0_12px_rgba(255,85,0,0.3)]'
                        : 'border-[#182234] text-text-secondary group-hover:border-accent-neon/50 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth Expand Container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 py-4 sm:py-5 text-sm sm:text-[15px] text-zinc-300 font-sans leading-relaxed border-t border-[#182234] bg-bg-primary/50">
                      {renderAnswerText(item.answer)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
