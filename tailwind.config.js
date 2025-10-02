/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      // Mobile Portrait (320px - 479px)
      'xs': '320px',
      
      // Mobile Landscape (480px - 767px)
      'sm': '480px',
      
      // Tablet Portrait (768px - 991px)
      'md': '768px',
      
      // Tablet Landscape (992px - 1199px)
      'lg': '992px',
      
      // Laptop/Desktop (1200px - 1535px)
      'xl': '1200px',
      
      // Widescreen (1536px and up)
      '2xl': '1536px',
    },
    extend: {
      // Keep any existing theme extensions
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xs: '1rem',
          sm: '2rem',
          md: '2.5rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },
    },
  },
  plugins: [],
};