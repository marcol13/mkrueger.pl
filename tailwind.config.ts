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
        'box': 'var(--color-box)',
        'grey-primary': 'var(--color-grey-primary)',
        'grey-secondary': 'var(--color-grey-secondary)'
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
      },
      boxShadow: {
        'bulb': '0 0 10px var(--color-primary), 0 0 15px var(--color-primary)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
