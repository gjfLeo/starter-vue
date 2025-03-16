import type { GlobalTheme, GlobalThemeOverrides } from "naive-ui";
import type { Ref } from "vue";
import { themeOverridesDark, themeOverridesLight } from "@gjfleo/naive-ui-theme";
import { darkTheme, lightTheme } from "naive-ui";

export default function useThemes() {
  const theme: Ref<GlobalTheme> = ref(lightTheme);
  const themeOverrides: Ref<GlobalThemeOverrides> = ref(themeOverridesLight);
  useDark({
    onChanged: (value, defaultHandler, mode) => {
      defaultHandler(mode);
      theme.value = value ? darkTheme : lightTheme;
      themeOverrides.value = value ? themeOverridesDark : themeOverridesLight;
    },
  });
  return {
    theme,
    themeOverrides,
  };
}
