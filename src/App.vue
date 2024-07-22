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
                  <RouterView v-slot="{ Component, route }">
                    <Transition name="page-transition" mode="out-in">
                      <div :key="route.path">
                        <component :is="Component" />
                      </div>
                    </Transition>
                  </RouterView>
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
import { darkTheme, dateZhCN, lightTheme, zhCN } from "naive-ui";
import themeOverridesLight from "@/constants/naive-ui/theme-override-light";
import themeOverridesDark from "@/constants/naive-ui/theme-override-dark";

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
  /* position: absolute;
  width: 100%; */
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
}
</style>
