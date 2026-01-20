/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md'
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#10b981',
        'brand-dark': '#1f2937',
        'brand-light': '#f9fafb',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
