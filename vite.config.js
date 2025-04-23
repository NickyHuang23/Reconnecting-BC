import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: false, // prevents auto-open attempt that triggers xdg-open error
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
  },
  base: "./",
});
