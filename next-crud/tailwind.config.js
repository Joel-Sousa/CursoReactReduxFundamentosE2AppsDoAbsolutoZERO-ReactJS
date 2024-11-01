/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {

  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safeList:[
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  theme: {
  extend: {},
  },
  plugins: [],
  }