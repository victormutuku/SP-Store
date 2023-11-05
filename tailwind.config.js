/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'deep-blue':'#1B3149',
        'ice-blue':'#F3F4FB',
        'second-deep-blue' : '#213A53',
        'third-deep-blue' : '#364D64',
        'bright-blue' : '#007DFC',
        'lilac' : '#6264E8',
        'jade-green' : '#4EB08D',
        'vibrant-red' : '#DB291F',
        'chip-bg-blue' :'#E6F2FF',
        'chip-bg-red' : '#FFEAE9',
        'items-sold-bg-color' : '#FDECEB',
        'gross-sale-bg-color' : '#EDF7F4',
        'refunds-bg-color' : '#EFF0FD',
        'placeholder-text-color' : '#2F465E',
        'deactivated-nav-text-color' : '#55677B',
        }
    },
  },
  plugins: [],
}

