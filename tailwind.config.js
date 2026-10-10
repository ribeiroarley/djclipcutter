/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050a12',
          secondary: '#090e17',
          card: '#0c1424',
          subtle: '#101a2e',
        },
        accent: {
          neon: '#FF5500',      // Laranja SoundCloud Neon
          hover: '#FF6A1A',
          dim: '#CC4400',
          glow: 'rgba(255, 85, 0, 0.4)',
        },
        cdj: {
          cyan: '#00E5FF',      // Azul Pioneer CDJ-3000
          glow: 'rgba(0, 229, 255, 0.35)',
        },
        text: {
          primary: '#F4F4F5',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        border: {
          official: '#182234',
          subtle: '#223048',
          glow: 'rgba(255, 85, 0, 0.25)',
        },
        vu: {
          green: '#00E676',
          yellow: '#FFEA00',
          red: '#FF1744',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-glow': '0 0 25px rgba(255, 85, 0, 0.45)',
        'neon-sm': '0 0 10px rgba(255, 85, 0, 0.3)',
        'neon-lg': '0 0 45px rgba(255, 85, 0, 0.6)',
        'cyan-glow': '0 0 25px rgba(0, 229, 255, 0.4)',
        'cyan-sm': '0 0 10px rgba(0, 229, 255, 0.25)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(24, 34, 52, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'vu-meter': 'vuMeter 1.2s ease-in-out infinite alternate',
        'spin-slow': 'spin 18s linear infinite',
        'waveform': 'waveAnim 1.4s ease-in-out infinite alternate',
      },
      keyframes: {
        vuMeter: {
          '0%': { height: '15%' },
          '35%': { height: '65%' },
          '70%': { height: '40%' },
          '100%': { height: '95%' },
        },
        waveAnim: {
          '0%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1.0)' },
          '100%': { transform: 'scaleY(0.4)' },
        }
      }
    },
  },
  plugins: [],
}
