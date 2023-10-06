import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import axios from "axios";
// import VueAxios from "vue-axios";
// Vue.use(VueAxios, axios);

createApp(App).use(ElementPlus).mount("#app");

// import { createApp } from 'vue'
// import App from './App.vue'
// //main.js
// import { router } from './router/index'
// // createApp(App).mount('#app')
// const app = createApp(App)
// // 使用 Vue Router
// app.use(router)
// app.mount('#app')
