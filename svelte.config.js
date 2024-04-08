import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess'; // Import svelte-preprocess

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({ // Use svelte-preprocess
        postcss: true, // This enables PostCSS support, which is needed for Tailwind CSS
    }),

    kit: {
        adapter: adapter(),
    }
};

export default config;
