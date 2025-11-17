/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'amber-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #f97316 100%)'
      }
    }
  },
  plugins: []
};
