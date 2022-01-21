module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        'clr-btn': 'hsl(154, 59%, 51%)',
        'clr-form-text-primary': 'hsl(249, 10%, 26%) ',
        'clr-form-text-secondary': 'hsl(246, 25%, 77%)',
        'clr-form-accent-primary': 'hsl(248, 32%, 49%)',
        'clr-form-accent-secondary': 'hsl(0, 100%, 74%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}