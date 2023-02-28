/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary:'#F9EDC2',
        secondary:'#CCB4C3'

      }),
      textColor: (theme) => ({
        primary:'#1A3950',
        secondary:'#CCB4C3',
        userName:'#61357B',
        userBio:"#121212",
        chat:"#5D3277",
        appName:"#794A91",
        navColor:"#673B81"
      }),
      borderColor: (theme) => ({
        primary:'#1A3950',
        secondary:'#CCB4C3'
      })
    },
  },
  plugins: [],
}
