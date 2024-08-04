import Index from "../pages/Index.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserPage from "../pages/UserPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";

//定义一些路由
const routes=[
    { path:'/',component:Index },
    { path:'/user',component:UserPage },
    { path:'/search',component:SearchPage },
    { path:'/user/edit',component:UserEditPage },
    { path:'/user/list',component:SearchResultPage },
    { path:'/user/login',component:UserLoginPage},
    { path:'/team',component:TeamPage },
    { path:'/team/add',component:TeamAddPage},


]
export default routes