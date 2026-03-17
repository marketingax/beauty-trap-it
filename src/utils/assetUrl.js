// This helper makes image paths work correctly in both:
// - Local dev (Vite serves from root)
// - WordPress theme (files live under /wp-content/themes/themename/)
//
// Vite replaces import.meta.env.BASE_URL with the base option from vite.config.js
// In dev: '/'   In WP build: './'
// We inject VITE_WP_PATH at build time via the build script if needed,
// but for a safe default we just use the Vite base URL.

const base = import.meta.env.BASE_URL;

export function assetUrl(path) {
    // path should be like 'assets/logo.png' (no leading slash)
    const cleanPath = path.replace(/^\//, '');
    
    // If we are in WordPress, we use the global base set in index.php
    if (typeof window !== 'undefined' && window.WP_ASSET_BASE) {
        return `${window.WP_ASSET_BASE}${cleanPath}`;
    }
    
    // Otherwise fall back to Vite's base
    return `${base}${cleanPath}`;
}
