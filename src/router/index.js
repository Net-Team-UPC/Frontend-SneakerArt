import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
// Lazy loading Components
const ShoesListService = () =>
    import("../collection/pages/collection.component.vue");
const AboutComponent = () => import("../public/pages/about.component.vue");
const RegisterComponent = () =>
    import("../profile/pages/register.component.vue");
const LoginComponent = () => import("../profile/pages/login.component.vue");
const ShoesListComponent = () =>
    import("../collection/pages/collection.component.vue");
const DesignComponent = () => import("../design/pages/design.component.vue");
const ProfileComponent = () => import("../profile/pages/profile.component.vue");
const ForgotPasswordComponent = () =>
    import("../public/pages/fpassword.vue");

//Application Routes
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/home",
            name: "home",
            component: HomeComponent,
        },
        {
            path: "/about",
            name: "about",
            component: AboutComponent,
        },
        {
            path: "/collection",
            name: "collection",
            component: ShoesListComponent,
        },
        {
            path: "/register",
            name: "register",
            alias: "/",
            component: RegisterComponent,
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent,
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfileComponent,
        },
        {
            path: "/design",
            name: "design",
            component: DesignComponent,
        },
        {
            path: "/fpassword",
            name: "fpassword",
            component: ForgotPasswordComponent,
        },
        /*
                    {path:'/', redirect: { name :'home' }}
            */
    ],
});



// Configuración de la ruta /design/search
export default router;
