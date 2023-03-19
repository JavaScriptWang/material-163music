import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "balm-ui-plus": "balm-ui/dist/balm-ui-plus.js",
      "balm-ui-css": "balm-ui/dist/balm-ui.css",
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      plugins: path.resolve(__dirname, "src/plugins"),
      views: path.resolve(__dirname, "src/views"),
      layouts: path.resolve(__dirname, "src/layouts"),
      utils: path.resolve(__dirname, "src/utils"),
      apis: path.resolve(__dirname, "src/apis"),
      dirs: path.resolve(__dirname, "src/directives"),
    },
  },
});
