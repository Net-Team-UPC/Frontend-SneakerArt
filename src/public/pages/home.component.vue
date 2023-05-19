<template>
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

export default defineComponent({
  methods:{
    navigateToLogin(){
      this.$router.push({name:'login'})
    }
  }
})
</script>
