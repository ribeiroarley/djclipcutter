import React, { useState } from 'react';
import { Mail, Menu, X, Disc3 } from 'lucide-react';
import { getSecureEmail, getSecureMailto } from '../../utils/security';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Vídeo YouTube', href: '#video-youtube' },
    { label: 'Templates', href: '#templates' },
    { label: 'Engenharia', href: '#engenharia' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050a12]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* BLOCO 1 (ESQUERDA): LOGO + SUB-BADGE EMPILHADO */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-bg-card border border-border-official flex items-center justify-center transition-all shadow-sm group-hover:border-accent-neon/60 group-hover:shadow-neon-sm">
            {/* Stylized soundwave mark */}
            <div className="flex items-center gap-0.5 h-4 sm:h-5">
              <span className="w-1 bg-accent-neon rounded-full h-2" />
              <span className="w-1 bg-accent-neon rounded-full h-4" />
              <span className="w-1 bg-cdj-cyan rounded-full h-5" />
              <span className="w-1 bg-accent-neon rounded-full h-3" />
              <span className="w-1 bg-accent-neon rounded-full h-1.5" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bebas text-xl sm:text-2xl tracking-wider text-white leading-none group-hover:text-accent-neon transition-colors">
              DJ CLIP CUTTER
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-emerald-400/90 uppercase">
                ONLINE • DISPONÍVEL
              </span>
            </div>
          </div>
        </a>

        {/* BLOCO 2 (CENTRO): NAVEGAÇÃO ENXUTA (NOMES CURTOS PARA NÃO APERTAR) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-accent-neon after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* BLOCO 3 (DIREITA): BOTÃO DE CONTATO DESKTOP */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            href={getSecureMailto()}
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#FF6600] text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_28px_rgba(255,85,0,0.5)] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4" />
            <span>{getSecureEmail().toUpperCase()}</span>
          </a>
        </div>

        {/* GATILHO MOBILE (LG:HIDDEN) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-secondary hover:text-white rounded-lg border border-border-official active:scale-95 transition-all"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-accent-neon" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border-official bg-[#050a12]/98 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="pb-3 border-b border-border-official/60 flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase">
                ONLINE • DISPONÍVEL
              </span>
            </div>
            <span className="text-xs font-mono text-text-secondary flex items-center gap-1">
              <Disc3 className="w-3.5 h-3.5 text-accent-neon animate-spin-slow" /> FLUIDEZ NATIVA
            </span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-bg-subtle hover:text-accent-neon transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={getSecureMailto()}
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#FF5500] hover:bg-[#FF6600] text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(255,85,0,0.3)] text-center"
            >
              <Mail className="w-4 h-4" />
              <span>{getSecureEmail().toUpperCase()}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
