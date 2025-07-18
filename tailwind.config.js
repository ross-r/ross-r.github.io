/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="business"]'],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [
      "light", 
      "dark", 
      "dim",
      {
        custom: {
          primary: '#3B82F6',     // blue
          secondary: '#10B981',   // emerald
          accent: '#A78BFA',      // violet
          neutral: '#1E293B',     // dark slate
          'base-100': '#0F172A',  // page background
          'base-200': '#1E293B',  // card/section background
          'base-300': '#334155',  // border
          info: '#60A5FA',
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
    ],
  },
}

