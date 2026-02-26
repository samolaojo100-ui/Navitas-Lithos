// Add before </body> for optimal loading:
<link rel="preload" href="fonts.woff2" as="font" type="font/woff2" crossorigin>

// Compress images:
// Use WebP format with fallbacks
<img src="image.webp" alt="..." onerror="this.src='image.jpg'">

// Add service worker for offline support (optional)