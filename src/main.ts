import { createApp } from 'vue';
import App from './App.vue';
import Vant from "vant";
import * as VueRouter from 'vue-router';
import routes from "./config/router";
import "vant/lib/index.css" // 全局引入样式
//这边要二次引入，防止popup把toast顶掉出现白色
import "vant/es/toast/style"
const app = createApp(App);
app.use(Vant)


const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})

app.use(router)


app.mount('#app')