import { fileURLToPath, URL } from "node:url";

import UnheadVite from "@unhead/addons/vite";
import postcssUnoCss from "@unocss/postcss";
import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import postcssAutoprefixer from "autoprefixer";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import Markdown from "unplugin-vue-markdown/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      exclude: ["**/components/**/*"],
      extensions: [".vue", ".md"],
      dts: "types/router.d.ts",
    }),

    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    VueJsx(),
    VueDevTools(),

    // https://github.com/unplugin/unplugin-vue-markdown
    Markdown({

    }),

    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "@vueuse/core",
        "vitest",
        VueRouterAutoImports,
        {
          "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
          "@unhead/vue": ["useHead"],
        },
      ],
      dts: "types/imports.d.ts",
    }),

    // https://github.com/unplugin/unplugin-vue-components
    Components({
      dirs: ["src/components"],
      globalNamespaces: ["shared"],
      extensions: ["vue", "md"],
      resolvers: [NaiveUiResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "types/components.d.ts",
    }),

    UnoCSS(),

    // https://unhead.unjs.io/
    UnheadVite(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    postcss: {
      plugins: [
        postcssAutoprefixer(),
        postcssUnoCss(),
      ],
    },
  },
});
