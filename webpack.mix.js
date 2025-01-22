const mix = require('laravel-mix');

mix.js('resources/js/app.jsx', 'public/js')
    .sass('resources/css/app.scss', 'public/css') // If you're using SCSS
    .version(); // Enable versioning for cache busting