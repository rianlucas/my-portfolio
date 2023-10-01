import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'fira-code': ['FiraCode', 'monospace']
      },
      spacing: {
        'home': 'calc(100vh - 7.39rem)',
      },
      colors:{
        'default-border-color': '#1d2b39',
        'default-text-color': '#607B96',
      }
    },
  },
  plugins: [],
}
export default config
