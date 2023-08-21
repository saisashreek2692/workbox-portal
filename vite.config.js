import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { registerSW } from "virtual:pwa-register";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        cleanupOutdatedCaches: false,
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        sourcemap: true,
      },
      devOptions: {
        enabled: true,
      },
      updateSW,
    }),
  ],
});

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});
