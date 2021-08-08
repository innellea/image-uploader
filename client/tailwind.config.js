module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            transition: {
                width: '2s'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
