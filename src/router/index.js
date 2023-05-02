import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import ShoesListComponent from "../shoes-list/pages/shoes-list.component.vue";

//Lazy loading Components
const ShoesListService = () => import('../shoes-list/pages/shoes-list.component.vue')
const AboutComponent = () => import('../public/pages/about.component.vue')

//Application Routes
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            alias: '/',
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
        /*
                {path:'/', redirect: { name :'home' }}
        */
    ]
})

export default router