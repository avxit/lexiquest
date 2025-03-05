import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			outdir: './src/lib/paraglide',
			project: './project.inlang',
			strategy: ['url']
		}),
		tailwindcss()
	]
});
