/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      colors: {
        "magenta": "#C1256C",
        "blue": "#010C5C",
        "cream": "#E3DDD1",
      },
      fontFamily: {
        azeret: ["Azeret Mono", "monospace"],
        battambang: ["Battambang", "serif"],
        birthstone: ["Birthstone Bounce", "serif"]
      }
    },
  },
  plugins: [],
}

