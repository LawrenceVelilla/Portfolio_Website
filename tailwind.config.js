/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#344e41',
          'secondary': '#588157',
          'background': '#dad7cd',
          'accent': '#283618',
        },
        fontFamily: {
          sans: ['var(--font-poppins)', 'sans-serif'],
          italiana: ['Italiana', 'serif'],
        },
      },
    },
    plugins: [],
  }