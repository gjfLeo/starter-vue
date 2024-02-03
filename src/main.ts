import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router/auto";

import App from "./App.vue";

import "virtual:uno.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
});
app.use(router);

const pinia = createPinia();
app.use(pinia);

app.mount("#app");
