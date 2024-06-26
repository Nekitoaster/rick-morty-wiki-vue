import "./main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VueAxios from "vue-axios";
import globalComponents from "./components/global";
import axios from "axios";

const app = createApp(App);

app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.use(store);
app.use(globalComponents);

app.mount("#app");
