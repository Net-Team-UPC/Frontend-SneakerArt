import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import fpassword from "../public/pages/fpassword.vue";
//Lazy loading Components
const ShoesListService = () => import('../shoes-list/pages/shoes-list.component.vue')
const AboutComponent = () => import('../public/pages/about.component.vue')
const RegisterComponent = () => import("../public/pages/register.component.vue");
const LoginComponent = () => import("../public/pages/login.component.vue");
const ShoesListComponent = () =>import("../shoes-list/pages/shoes-list.component.vue")
//Application Routes
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',

            component: HomeComponent
        },
        {
            path: '/about',
            name: 'about',
            component: AboutComponent
        },
        {
            path: '/shoes-list',
            name: 'shoes-list',
            component: ShoesListComponent
        },
        {
            path: '/register',
            name: 'register',

            component: RegisterComponent
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        },
        {
            path: '/forgotpassword',
            name: 'forgotpassword',
            alias: '/',
            component: fpassword
        },
        /*
                {path:'/', redirect: { name :'home' }}
        */
    ]
});
export default router