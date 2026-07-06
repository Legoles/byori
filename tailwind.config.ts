import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './composables/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0F',
          soft: '#111118',
          card: '#15151E',
          elev: '#1B1B26'
        },
        ink: {
          DEFAULT: '#FAFAFA',
          dim: '#A9A9B8',
          mute: '#6B6B7C'
        },
        accent: {
          DEFAULT: '#B14EFF',
          soft: '#C77BFF',
          deep: '#7A1FCC',
          glow: '#E0A8FF'
        },
        line: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          soft: 'rgba(255,255,255,0.04)',
          strong: 'rgba(255,255,255,0.12)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif']
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        '8xl': ['6rem',   { lineHeight: '1.00', letterSpacing: '-0.045em' }],
        '9xl': ['8rem',   { lineHeight: '0.95', letterSpacing: '-0.05em' }]
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        glow: '0 0 80px -10px rgba(177, 78, 255, 0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.04)'
      },
      animation: {
        'slow-spin': 'spin 30s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'float': 'float 7s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite'
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    }
  },
  plugins: []
}
