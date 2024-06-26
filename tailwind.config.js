/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      darkpink: "#a40e4c",
      purple: "#2c2c54",
      green: "#acc3a6",
      cream: "#faf2ec",
      orange: "#f49d6e",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#acc3a6",
          secondary: "#2c2c54",
          accent: "#f49d6e",
          neutral: "#faf2ec",
          "base-100": "#ffffff",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
    ],
  },
};
