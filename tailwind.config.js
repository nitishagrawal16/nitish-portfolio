/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F5F5F5',
        'surface-2': '#EBEBEB',
        ink: '#0D0D0D',
        muted: '#888888',
        accent: '#D4A853',
        dark: '#0D0D0D',
        border: '#E5E5E5',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
