/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      // Here we can configure default fonts on the project. We can use this in the className of each component.
      fontFamily: {
        main: ["Montserrat"],
        alata: ["Montserrat"],
        arial: ["Arial"],
        sans: ["Arial", "Inter", "sans-serif"],
      },
      // Here we can configure the colors of the project. We can use this in the className of each component.
      colors: {
        "main-color": "#6E3CD2",
        "secondary-color": "#C0185D",
        "secondary-color-background": "#C1285D33",
        "instruction-color": "#FFCB31",
        "instruction-color-background": "#E7FD601F",
        "paragraph-color": "#FBFBFB",
        "paragraph-light-color": "#8F8F8F",
        "black-color": "#000000",
        "background-color": "#F5F5F5",
        "header-color": "#FAFAFA",
        "title-color": "#6E3CD2",
        "subtitle-color": "#002751",
      },
      // Here we can configure the sizes of the project. We can use this in the className of each component.
      fontSize: {
        "title-size": "25px",
        'subtitle-size': '25px',
        "p-size": "16px",
        'instructions-size': '14px',
        'button-size': '16px',
      },
      boxShadow: {
        border: "0 0 0 2px white, 0 0 0 3.5px #6e3cd2",
      },
    },
  },
  plugins: [],
};
