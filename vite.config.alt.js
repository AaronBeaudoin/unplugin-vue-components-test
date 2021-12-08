import { defineConfig } from "vite";
import VuePlugin from "@vitejs/plugin-vue";
import VueComponentsPlugin from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    VuePlugin(),
    VueComponentsPlugin({
      dirs: ["components"]
    })
  ]
});
