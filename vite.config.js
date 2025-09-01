/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 9090 },
  define: {
    __API_URL__: JSON.stringify("https://api-quickews.canny0.workers.dev"),
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src", "index.html"),
        features: resolve(__dirname, "src", "features", "index.html"),
        installation: resolve(__dirname, "src", "installation", "index.html"),
        rateUs: resolve(__dirname, "src", "rate-us", "index.html"),
        feedback: resolve(__dirname, "src", "feedback", "index.html"),
        // purpose: resolve(__dirname, "src", "purpose", "index.html"),
        privacyPolicy: resolve(
          __dirname,
          "src",
          "privacy-policy",
          "index.html"
        ),
      },
    },
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  root: resolve(__dirname, "src"),
  publicDir: resolve(__dirname, "public"),
});

// <a href="https://www.flaticon.com/free-icons/cursor" title="cursor icons">Cursor icons created by Freepik - Flaticon</a>
