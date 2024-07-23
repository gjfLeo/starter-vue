<template>
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
</template>

<script lang="ts" setup>
const loadingBar = useLoadingBar();
const { beforeEach, afterEach } = useRouter();
beforeEach(() => loadingBar.start());
afterEach(() => loadingBar.finish());
</script>
