/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'russian-violet': "#231942",
      'ultra-violet': "#5E548E",
      'african-violet': "#9F86C0",
      'lilac': "#BE95C4",
      'lavender': "#E0B1CB",
      'white': "#ffffff",
      'black': "#000000"
    },
    extend: {},
  },
  plugins: [],
}