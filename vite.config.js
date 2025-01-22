import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const laravel = async () => {
    return (await import('laravel-vite-plugin')).default;
};

export default defineConfig({
    base: '/MyPortfolio/',
    plugins: [
        laravel().then(laravel => laravel({
            input: [
                'resources/js/app.jsx',
                'resources/css/app.css',
            ],
            refresh: true,
        })),
        react(),
    ],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});