/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include your main HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include all Vue/JS/TS files in src/**
  ],
  theme: {
    extend: {
       // Make sure your primary color definition is here too if you used it
       colors: {
            primary: {
                50: '#eff6ff',
                100: '#dbeafe',
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#60a5fa',
                500: '#3b82f6',
                600: '#2563eb', // As used in LandingPage.vue
                700: '#1d4ed8',
                800: '#1e40af',
                900: '#1e3a8a',
                950: '#172554',
            }
        }
    },
  },
  plugins: [],
}