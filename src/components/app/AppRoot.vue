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
import { dateZhCN, zhCN } from "naive-ui";

const { theme, themeOverrides } = useThemes();
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
