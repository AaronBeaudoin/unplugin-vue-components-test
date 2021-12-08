import pathTools from "path";
import { defineConfig } from "vite";
import VuePlugin from "@vitejs/plugin-vue";
import VueComponentsPlugin from "unplugin-vue-components/vite";

function toKebabCase(text) {
  let expression = /[A-Z]+(?![a-z])|[A-Z]/g;
  let replacer = (match, offset) => (offset ? "-" : "") + match.toLowerCase();
  return text.replace(expression, replacer);
}

function ComponentResolver(path) {
  return name => {
    if (!name.startsWith("Custom")) return;
    return pathTools.join(__dirname, path, `${toKebabCase(name.slice(6))}.vue`);
  };
}

export default defineConfig({
  plugins: [
    VuePlugin(),
    VueComponentsPlugin({
      resolvers: [
        ComponentResolver("components")
      ]
    })
  ]
});
