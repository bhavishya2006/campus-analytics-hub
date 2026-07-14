/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16241E",
        panel: "#1D2E26",
        row: "#182922",
        line: "#33473C",
        muted: "#8FA396",
        faint: "#6E8577",
        paper: "#F4EFE1",
        amber: "#E8A33D",
        good: "#7FBF8E",
        warn: "#C97B63",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
