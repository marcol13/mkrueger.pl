import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': 'var(--color-background)',
        'content': 'var(--color-text)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
      },
      spacing: {
        'navbar-height': 'var(--navbar-height)',
        'page-width': 'var(--page-max-width)',
      },
      gridTemplateColumns: {
        'contact': '1fr 2fr'
      },
      backgroundImage: {
        'dots': "url('icons/dots.svg')",
        'edu': "url('icons/education.svg')",
        'work': "url('icons/screen.svg')"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
