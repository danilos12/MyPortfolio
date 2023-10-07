const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    
    ],

    theme: {
        extend: {
            screens: {
                'sm': {'max': '640px'},    // Mobile screens
                'md': {'max': '767px'},    // Tablet screens
                'lg': {'max': '1023px'},   // Small desktop screens
                'xl': {'max': '1279px'},   // Large desktop screens
              },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            fontWeight: {
                'black':'1000',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
