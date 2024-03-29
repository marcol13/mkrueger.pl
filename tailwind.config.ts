import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
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
        'bulb': '0 0 10px var(--color-primary), 0 0 15px var(--color-primary)',
        'footer': '0 -5px 20px #12110C',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)'
      },
      transition: {
        'opacity': 'opacity'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
