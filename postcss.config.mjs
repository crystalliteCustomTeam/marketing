/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.TAILWIND === "production" ? { cssnano: { preset: 'default', } } : {})
  },
};

export default config;