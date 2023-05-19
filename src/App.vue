<template>
  <pv-toast/>
  <header>
      <pv-toolbar :style="{ backgroundColor: '#FFD400' }">
      <template #start>
        <img src="https://s3-alpha-sig.figma.com/img/fe44/7d50/20fa26f58a728cb37a1c5a8e5f0777f4?Expires=1684108800&Signature=Tc5aqWclxW99uyhjk~288huULiFPOQcbhhdIQ28RUculwXhPvPCuujWifPUjg52rNTxXUtW28q2LTjbUyhfakJNjW1Ez9cA8c9P1SowB5vTDSjoVzW7NAmizsb07oGt~GgLrxhPhp7GtyBxG6l9-M-kCJZFQkYCqjU6xdf53xYVUwqk-Y7u0meRbvi4KsvTPYNej8rAbrIZq-c29i5QrqFpCXKNq5-r3rFtxlub2rMkY0UwaZLntnN9OIglszfLYQTVHXYOfsv94zz1ulG3WJVoGwSpEm97TFlDCUJFI1MBpCwEWut~EW2uJme3GZCNvGBKq4aUCAEqIHZUqhblVrQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Logo" style="position: absolute; width: 100px; height: auto;"/>
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
                { label: 'My Collection', to: '/about'},
                { label: 'News', to: '/shoes-list'},
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


