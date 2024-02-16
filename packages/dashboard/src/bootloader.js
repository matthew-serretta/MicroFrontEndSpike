import { createApp } from "vue";
import * as VueRouter from "vue-router";

import "./index.css";

import App from "./App.vue";
import Login from "./Login.vue";
import DashboardPage from "./DashboardPage.vue";
import AboutPage from "./AboutPage.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/dashboard/:id", component: DashboardPage },
  { path: "/about", component: AboutPage },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount("#app");
