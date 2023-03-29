/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f7ad96",
        
"secondary": "#0798b5",
        
"accent": "#ffc8af",
        
"neutral": "#263640",
        
"base-100": "#EEEFF2",
        
"info": "#8BA8DA",
        
"success": "#0B603B",
        
"warning": "#F7BC26",
        
"error": "#F54254",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

