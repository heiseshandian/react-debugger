import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { flowPlugin, esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()],
    },
  },
  plugins: [react(), flowPlugin()],
  define: {
    __DEV__: true,
    __EXPERIMENTAL__: true,
    __PROFILE__: true,
  },
});
