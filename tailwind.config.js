/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors based on reference design
        brand: {
          header: '#efe5da', // Warm beige for header
          text: '#1a1a1a',
          accent: '#d4c5b5', // Darker beige for borders/accents
        },
        // Cream/beige background colors (matching reference)
        cream: {
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F5F0EB',
          300: '#EDE6DD',
          400: '#E0D5C8',
        },
        // Dark text colors
        dark: {
          DEFAULT: '#1a1a1a',
          700: '#333333',
          600: '#4a4a4a',
          500: '#666666',
          400: '#888888',
        },
        // Coral/salmon accent for bullet points
        coral: {
          DEFAULT: '#E07B5D',
          light: '#F09B82',
          dark: '#C45A3C',
        },
        // WhatsApp green
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Dancing Script', 'cursive'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
