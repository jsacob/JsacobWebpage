/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./Frontend/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        header: "rgba(var(--header))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        text: "rgba(var(--text))",
        button: "rgba(var(--button)",
      },
    },
  },
  plugins: [],
};
