const mix = require('laravel-mix');

mix.js('resources/js/app.jsx', 'public/jsx')
   .postCss('resources/css/app.css', 'public/css', [
      require('tailwindcss'),
   ]);
