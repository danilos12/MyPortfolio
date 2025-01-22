import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import php from 'vite-plugin-php'; // Import as default

const laravel = async () => {
    return (await import('laravel-vite-plugin')).default;
};

export default defineConfig({
    base: '/MyPortfolio/', // Set this to your repository name
    plugins: [
        laravel().then(laravel => laravel({
            input: [
                'resources/js/app.jsx', // Main JS file
                'resources/css/app.css', // Main CSS file
            ],
            refresh: true, // Enable hot module replacement
        })),
        react(),
        php(), // Use the PHP plugin
    ],
    build: {
        outDir: 'dist', // Output directory for build files
        assetsInclude: ['**/*.php'], // Include PHP files
        rollupOptions: {
            input: {
                main: 'resources/views/app.blade.php', // Point to your Blade file
            },
        },
    },
});