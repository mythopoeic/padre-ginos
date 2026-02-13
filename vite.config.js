import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  publicDir: "../public",
  server: {
    host: true, // listen on 0.0.0.0 (LAN/Tailscale), not just localhost :contentReference[oaicite:1]{index=1}
    port: 5173,
    strictPort: true,

    // IMPORTANT: allow the hostname your testers will hit (the Pi's ts.net name)
    // Example: "pi-hostname.ts.net" (or whatever you use)
    allowedHosts: [
      "localhost",
      "fehringer-dev-server.tailca238d.ts.net",
      "fehringer-dev-server.ts.net",
      "100.88.122.128",
      // optionally also allow your MagicDNS short name if you use it:
      // "pi-hostname"
    ],

    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },

    // Optional: if HMR acts weird behind the Pi proxy, uncomment and adjust:
    // hmr: { clientPort: 80 }, // if users access via http://pi-hostname.ts.net :contentReference[oaicite:2]{index=2}
  },
  plugins: [react()],
});
