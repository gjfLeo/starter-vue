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
            <NLayout>
              <NLayoutContent
                class="h-screen" content-class="p-4" :native-scrollbar="false"
              >
                <main style="max-width: 72rem; margin: 0 auto">
                  <RouterView />
                </main>
              </NLayoutContent>
            </NLayout>
          </NDialogProvider>
        </NLoadingBarProvider>
      </NNotificationProvider>
    </NMessageProvider>
    <NGlobalStyle />
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { NLayoutContent, darkTheme, dateZhCN, lightTheme, zhCN } from "naive-ui";
import themeOverridesLight from "@/constants/naive-ui/theme-override-light";
import themeOverridesDark from "@/constants/naive-ui/theme-override-dark";

const isDark = useDark();
const theme = computed(() => isDark.value ? darkTheme : lightTheme);
const themeOverrides = computed(() => isDark.value ? themeOverridesDark : themeOverridesLight);
</script>
