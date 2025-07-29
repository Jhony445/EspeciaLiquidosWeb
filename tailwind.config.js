/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0C2D48',    // Azul oscuro principal
          DEFAULT: '#145388',  // Azul medio
          light: '#1E7FCB'     // Azul brillante
        },
        secondary: {
          DEFAULT: '#F39C12',  // Ámbar para acentos
          dark: '#D35400'      // Ámbar oscuro (hover)
        },
        neutral: {
          light: '#F8F9FA',    // Fondo claro
          DEFAULT: '#E9ECEF',  // Bordes y divisiones
          medium: '#ADB5BD',   // Texto secundario
          dark: '#495057'      // Texto principal
        },
        accent: {
          success: '#28A745',  // Indicadores positivos
          warning: '#FFC107',   // Advertencias
          danger: '#DC3545'    // Errores/alertas
        }
      }
    }
  },
  plugins: [],
}
