<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="theme"
    :theme-overrides="themeOverrides"
    inline-theme-disabled
  >
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <slot />
          </NDialogProvider>
        </NLoadingBarProvider>
      </NNotificationProvider>
    </NMessageProvider>
    <NGlobalStyle />
  </NConfigProvider>
</template>

<script lang="ts" setup>
import themeOverridesDark from "@/configs/naive-ui/theme-override-dark";
import themeOverridesLight from "@/configs/naive-ui/theme-override-light";
import { darkTheme, dateZhCN, lightTheme, zhCN } from "naive-ui";

const theme = ref(lightTheme);
const themeOverrides = ref(themeOverridesLight);
useDark({
  onChanged: (value, defaultHandler, mode) => {
    defaultHandler(mode);
    theme.value = value ? darkTheme : lightTheme;
    themeOverrides.value = value ? themeOverridesDark : themeOverridesLight;
  },
});
</script>

<style>
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.2s;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
}
</style>
