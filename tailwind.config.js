module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      default: ['Manrope', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      'md-down': { max: '767px' },
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: '#E884C1',
      secondary: '#FFF9F6',
      dark: '#111111',
      gray: {
        600: '#EEEEEE',
        700: '#CCCCCC',
        800: '#666666',
        900: '#333333',
      },
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '0',
      },
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    },
    extend: {
      boxShadow: {
        base: '2px 2px 5px rgba(204, 204, 204, 0.15)',
        'base-hover': '2px 2px 5px rgba(204, 204, 204, 0.3)',
        round: '0 0 5px rgba(204, 204, 204, 0.15)',
        'round-hover': '0 0 5px rgba(204, 204, 204, 0.3)',
        1: '1px 1px 5px 1px rgba(204, 204, 204, 0.4)',
      },
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [],
}
