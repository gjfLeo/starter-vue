import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import theme from "./src/configs/theme";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefixedOnly: true,
    }),
    presetIcons({
      scale: 1.1,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx(),
  ],
  rules: [
    [/^(?:grid-)?col-gap-(\d+)$/, ([,d]) => ({ "column-gap": `${Number(d) / 4}rem` })],
    [/^(?:grid-)?row-gap-(\d+)$/, ([,d]) => ({ "row-gap": `${Number(d) / 4}rem` })],
  ],
  theme,
});
