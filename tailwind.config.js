module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                preahvihear: ['Preahvihear', 'sans-serif']
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};