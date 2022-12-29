import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/index.scss";

import "@UI/styles/ui.scss";


import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

createApp(App)
  .use(store)
  .use(router).use(ElementUI)
  .mount("#app");
