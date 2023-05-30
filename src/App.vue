<template>
  <pv-toast/>
  <header>
      <pv-toolbar :style="{ backgroundColor: '#FFD400' }">
      <template #start>
        <img src="public/logo.jpg" alt="Logo" style="position: absolute; width: 100px; height: auto;"/>
      </template>
      <template #end>
        <div class="flex-column">
          <router-link v-for="item in items"
                       :to="item.to"
                       custom
                       v-slot="{navigate, href}"
                       :key="item.label">
            <pv-button
                class="p-button-text text-white"
                :href="href"
                @click="navigate">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"></pv-sidebar>
  <router-view></router-view>
  <footer-content></footer-content>
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


