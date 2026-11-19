import { defineConfig } from "vite";

export default defineConfig({
  base: "/sections/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    // maplibre-gl est distribué en un seul fichier déjà minifié (~911 kB,
    // ~250 kB gzip) impossible à tree-shaker. On assume cette taille.
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/maplibre-gl")) {
            return "maplibre";
          }
        },
      },
    },
  },
});
