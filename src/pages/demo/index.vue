<template>
  <NH1>starter-vue</NH1>

  <GLink to="/">返回首页</GLink>

  <NH2>UI框架</NH2>

  <NH3>NaiveUI</NH3>

  <div class="flex flex-col gap-4">
    <NSpace>
      <NButton type="primary">
        Primary
      </NButton>
      <NButton>
        Normal
      </NButton>
      <NButton circle @click="isDark = !isDark">
        <template #icon><div class="i-mingcute:sun-line dark:i-mingcute:moon-line" /></template>
      </NButton>
    </NSpace>

    <NSpace>
      <NButton type="success" @click="message.success('success')">
        Success
      </NButton>
      <NButton type="warning" @click="message.warning('warning')">
        Warning
      </NButton>
      <NButton type="error" @click="message.error('error')">
        Error
      </NButton>
      <NButton type="info" @click="message.info('info')">
        Info
      </NButton>
    </NSpace>

    <NForm inline>
      <NFormItem label="Input">
        <NInput />
      </NFormItem>
      <NFormItem label="DatePicker">
        <NDatePicker type="date" />
      </NFormItem>
    </NForm>
  </div>

  <NH3>UnoCSS</NH3>

  <NH3>PostCSS</NH3>
  <NUl>
    <NLi>
      <GLink href="https://github.com/postcss/autoprefixer">autoprefixer</GLink>
      <span>：</span>
      <span class="select-all">自动添加厂商前缀</span>
    </NLi>
    <NLi>
      <GLink href="https://unocss.dev/integrations/postcss">@unocss/postcss</GLink>
      <span>：</span>
      <span class="unocss-postcss-test">UnoCSS 集成</span>
    </NLi>
  </NUl>

  <NH3>图标</NH3>

  <NTable class="w-auto" :single-line="false">
    <NTbody>
      <NTr>
        <NTh><GLink href="https://icones.js.org/collection/mingcute">@iconify/mingcute</GLink></NTh>
        <NTd><div class="i-mingcute:add-line" /></NTd>
        <NTd><div class="i-mingcute:minimize-line" /></NTd>
        <NTd><div class="i-mingcute:search-2-line" /></NTd>
        <NTd><div class="i-mingcute:copy-line" /></NTd>
        <NTd><div class="i-mingcute:delete-2-line" /></NTd>
        <NTd><div class="i-mingcute:more-1-line" /></NTd>
      </NTr>
    </NTbody>
  </NTable>

  <NH2>插件</NH2>

  <NUl>
    <NLi><GLink href="https://github.com/unplugin/unplugin-auto-import">unplugin-auto-import</GLink>：API 自动导入</NLi>
    <NLi><GLink href="https://github.com/unplugin/unplugin-vue-components">unplugin-vue-components</GLink>：组件自动导入</NLi>
    <NLi><GLink href="https://github.com/posva/unplugin-vue-router">unplugin-vue-router</GLink>：根据文件路径自动生成路由</NLi>
    <NLi><GLink href="https://github.com/unplugin/unplugin-vue-markdown">unplugin-vue-markdown</GLink>：将 Markdown 转为 Vue 组件</NLi>
  </NUl>

  <NH2>其他</NH2>

  <NH3>VueUse</NH3>
  <NP>当前的时间戳：{{ timestamp }}</NP>

  <NH3>Day.js</NH3>
  <NP>已停留×10：{{ duration.humanize() }}</NP>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";

useHead({
  title: "Demo",
});

const message = useMessage();

const isDark = useDark();

const timestamp = useTimestamp();
const time1 = ref(dayjs());
const time2 = computed(() => dayjs(timestamp.value));
const duration = computed(() => dayjs.duration(time2.value.diff(time1.value) * 10));
</script>

<style scoped>
.unocss-postcss-test {
  @apply transition-all;
  &:hover {
    @apply opacity-25;
  }
}
</style>
