module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8F79EB',
        secondary: '#333333',
        tertiary: '#F7F7F7',
        background: '#fcfcfc'
      },
    },
  },
  plugins: [],
};