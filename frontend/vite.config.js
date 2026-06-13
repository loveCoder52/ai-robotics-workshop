import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Proxy API calls to the Express backend during development
    proxy: {
      "/api": {
        target: "https://ai-robotics-workshop-1gnq8l0ez-love-sharma-s-projects.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
