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
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

