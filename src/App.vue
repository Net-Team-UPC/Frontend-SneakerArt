<template>
  <pv-toast/>

  <router-view></router-view>

</template>

<script>
import Toolbar from "primevue/toolbar";
import FooterContent from "./public/pages/footer.component.vue";

export default {
    data() {
        return {
            drawer: false,
            items: [
                { label: 'Home', to: '/home'},
                { label: 'About', to: '/about'},
                { label: 'Design', to: '/about'},
                { label: 'Trend', to: '/about'},
                { label: 'Subscription', to: '/about'},
                { label: 'My Collection', to: '/collection'},
                { label: 'News', to: '/about'},
                { label: 'Register', to: '/register'},
                { label: 'Login', to: '/login'},

            ]
        }
    },
    components:{
      FooterContent,
        'pv-toolbar': Toolbar,
    }
}

</script>


