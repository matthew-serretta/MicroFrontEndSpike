import { createApp } from "vue";
import * as VueRouter from "vue-router";

import "./index.css";

import App from "./App.vue";
import PeoplePage from "./PeoplePage.vue";
import PersonPage from "./PersonPage.vue";
import AboutPage from "./AboutPage.vue";

const routes = [
  { path: "/", component: PeoplePage },
  { path: "/:id", component: PersonPage },
  { path: "/about", component: AboutPage },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount("#app");
