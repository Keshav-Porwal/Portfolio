/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF8',
        surface: '#FFFFFF',
        primary: '#1a1a1a',
        secondary: '#6b6b6b',
        muted: '#999999',
        accent: '#c45d3e',
        body: '#3d3d3d',
        codebg: '#f5f0eb',
        border: '#e5e5e5',
        'border-faint': '#f0f0f0',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '960px',
      },
    },
  },
  plugins: [],
}
