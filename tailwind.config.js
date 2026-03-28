/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0d0d0d',
        surfaceHover: '#161616',
        border: '#27272a',
        textMain: '#f4f4f5',
        textMuted: '#a1a1aa',
        accent: '#8b5cf6',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
