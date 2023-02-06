import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaLinkedinIn, RiTwitterLine, RiGithubLine, RiLinkedinBoxLine } from "oh-vue-icons/icons";

addIcons(FaLinkedinIn, RiTwitterLine, RiGithubLine, RiLinkedinBoxLine);

createApp(App).use(router).component("v-icon", OhVueIcon).mount("#app");
