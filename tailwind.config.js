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
          header: '#FAF7F2', // Soft cream (reference-like)
          text: '#1a1a1a',
          accent: '#E0D5C8', // Subtle border/line tone
          gold: '#1a1a1a',   // Re-used for dark headline/logo text
        },
        // Cream/beige background colors (matching reference)
        cream: {
          50: '#FDFCFA',
          100: '#FAF7F2',
          150: '#F7F3ED', // New intermediate tone
          200: '#F5F0EB',
          250: '#F0EAE3', // New intermediate tone
          300: '#EDE6DD',
          400: '#E0D5C8',
          500: '#D4C9BC', // Darker cream for borders
        },
        // Dark text colors
        dark: {
          DEFAULT: '#1a1a1a',
          800: '#252525',
          700: '#333333',
          600: '#4a4a4a',
          500: '#666666',
          400: '#888888',
          300: '#aaaaaa',
        },
        // Accent colors - soft sage green for subtle highlights
        sage: {
          50: '#F5F7F5',
          100: '#E8EDE8',
          200: '#D1DCD1',
          300: '#A8C0A8',
          400: '#7FA37F',
        },
        // Warm accent
        warm: {
          100: '#FDF8F3',
          200: '#F9EFE4',
          300: '#E8D5C4',
          400: '#D4B89A',
        },
        // Coral/salmon accent for bullet points
        coral: {
          DEFAULT: '#1a1a1a',
          light: '#333333',
          dark: '#000000',
        },
        // WhatsApp green
        whatsapp: '#25D366',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.08)',
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
