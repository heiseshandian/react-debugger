import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { flowPlugin, esbuildFlowPlugin } from "./scripts/flow";
import path from "path";

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
  resolve: {
    alias: {
      react: path.posix.resolve("src/packages/react"),
      "react-dom": path.posix.resolve("src/packages/react-dom"),
      "react-dom-bindings": path.posix.resolve(
        "src/packages/react-dom-bindings"
      ),
      "react-reconciler": path.posix.resolve("src/packages/react-reconciler"),
      scheduler: path.posix.resolve("src/packages/scheduler"),
      shared: path.posix.resolve("src/packages/shared"),
    },
  },
});
