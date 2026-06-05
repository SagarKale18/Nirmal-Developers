// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2A2A2A",
//         accent: "#4F7C82",
//         lightbg: "#FAFAFA",
//         borderclr: "#E2E2E2",
//         muted: "#6B6B6B",
        
//       },
//        backgroundImage: {
//         'hero-pattern': "url('./src/assets/images/project-bg.jpg')",
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:   "#1A1A1A",
        teal:   "#2D6B70",
        teallt: "#3D8A90",
        gold:   "#C8A96B",
        goldlt: "#D4BC8A",
        bg:     "#F9F7F2",
        text:   "#333333",
        muted:  "#7A7A7A",
        border: "#E0DDD6",
        white:  "#FFFFFF",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}