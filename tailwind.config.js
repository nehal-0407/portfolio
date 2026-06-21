/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F7F8FA',
          dark: '#0E1216',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#EEF1F4',
          dark: '#161B20',
          'dark-alt': '#1C2228',
        },
        ink: {
          DEFAULT: '#14171A',
          dark: '#EDEFF1',
        },
        slate: {
          DEFAULT: '#5A6470',
          dark: '#9AA4AE',
        },
        line: {
          DEFAULT: '#E2E5E9',
          dark: '#262D33',
        },
        accent: {
          DEFAULT: '#1E5AA8',
          deep: '#123E78',
          light: '#4C8FD9',
        },
        scan: {
          warm: '#E0703D',
          cool: '#1E5AA8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'scan-gradient': 'linear-gradient(90deg, #1E5AA8 0%, #4C8FD9 55%, #E0703D 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
