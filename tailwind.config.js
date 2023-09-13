/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'mono':['Fira Code', 'IBM Plex Mono'],
        'fira-code': ['FiraCode', 'monospace']
      },
      spacing: {
        'home': 'calc(100vh - 7.39rem)',
      },
      colors:{
        'default-border-color': '#1d2b39',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

