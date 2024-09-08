/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"'],
                fair: ['"Playfair Display"', 'serif'],
                Jomo: ['"Jomolhari"', 'serif']
            },
            padding: {
                unset: 'unset'
            }
        }
    },
    plugins: []
};
