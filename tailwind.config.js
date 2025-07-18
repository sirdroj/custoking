export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        "manrope": ['Manrope, sans-serif' ],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ["Inter", "sans-serif"], // Add Inter as a font family



      },
      cursor: {
        // 'fancy': url("https://www.flaticon.com/free-icon/mouse_1536479"),
      },
      colors: {
        'blue1':"#007AFF"
        
        // Add more custom colors as needed
      },
    },
    
    
  },
  plugins: [],
}