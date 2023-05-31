import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";

//Lazy loading Components
const ShoesListService = () => import('../collection/pages/collection.component.vue')
const AboutComponent = () => import('../public/pages/about.component.vue')
const RegisterComponent = () => import("../public/pages/register.component.vue");
const LoginComponent = () => import("../public/pages/login.component.vue");
const ShoesListComponent = () =>import("../collection/pages/collection.component.vue")
const DesignComponent = ()=>import("../public/pages/design.component.vue")
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
            path: '/collection',
            name: 'collection',
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
            path: '/design',
            name: 'design',
            alias: '/',
            component: DesignComponent
        },
        /*
                {path:'/', redirect: { name :'home' }}
        */
    ]
});
export default router