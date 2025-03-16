const mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

mix.js('resources/js/app.jsx', 'public/js')
    .sass('resources/css/app.scss', 'public/css') // If you're using SCSS
    .version(); // Enable versioning for cache busting

mix.webpackConfig({
    plugins: [
        new BrowserSyncPlugin({
            proxy: 'http://myportfolio.local', // Your local development URL
            files: [
                'app/**/*.php',
                'resources/views/**/*.php',
                'public/js/**/*.js',
                'public/css/**/*.css'
            ],
            notify: false
        })
    ]
});