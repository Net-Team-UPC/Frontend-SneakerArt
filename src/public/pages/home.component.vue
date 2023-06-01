<template>
    <pv-toolbar :style="{ backgroundColor: '#FFD400' }">
        <template #start>
            <img src="../../../public/logo.jpg" height="417" width="566" alt="Logo" style="position: absolute; width: 100px; height: auto;"/>/>
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
  <div class="row">
    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
      <h1 class="centered-title">Start your own sneaker designs right now</h1>
      <pv-button @click="navigateToLogin" class="centered-button" style="background-color: #FFD400; color:black" label="Get started design" icon="pi pi-arrow-right" icon-pos="right"></pv-button>
      <pv-button class="centered-button" style="color: black" label="Trending Now" text raised></pv-button>
    </div>
    <div class="col-6 right img-fluid text-center">
      <img class="img-fluid w-80 h-60" src="public/home-image.png" alt="">
    </div>
  </div>

</template>

<style>
.centered-title {
  text-align: center;
}

.centered-button {
  display: flex;
  justify-content: center;
}
</style>

<script>

import {defineComponent} from "vue";

export default defineComponent({data() {
        return {
            drawer: false,
            items: [
                { label: 'Home', to: '/home'},
                { label: 'Design', to: '/design'},
                { label: 'My Collection', to: '/collection'},
                { label: 'Profile', to: '/profile'},
                { label: 'Log Out',to:'/login'}
            ]
        }
    },
  methods:{
    navigateToLogin(){
      this.$router.push({name:'login'})
    }
  }
})
</script>
