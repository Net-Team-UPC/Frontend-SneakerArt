<template>
  <div class="row">
    <div class="col-md-6 right ">
      <h1>Star your own sneaker designs right now</h1>
      <pv-button @click="navigateToLogin" class="centered" style="background-color: #FFD400; color:black" label="Get started design" icon="pi pi-arrow-right" icon-pos="right" ></pv-button>
      <pv-button class="centered" style="color: black" label="Trending Now" text raised ></pv-button>
    </div>
    <div class="col-6 right img-fluid text-center">
<!--      Edit image-->
      <img style="width: 100%; height: 100%" class="img-fluid" src="public/home-image.png" alt="">
    </div>
  </div>
</template>

<style>
.img {
  width: 50%;
  height: 28.125vw; /* (50% * 9 / 16) */
  background-size: cover;
}
.centered {
  display: flex;
  justify-content: center;
  text-align: center  ;
}
.posicion {

}
.color{
  background-color: #FFD400;
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
