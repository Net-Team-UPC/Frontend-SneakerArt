<template>
  <div class="row">
    <div class="col-md-6 right ">
      <h1>Star your own sneaker designs right now</h1>
      <pv-button @click="navigateToLogin" class="centered" style="background-color: #FFD400; color:black" label="Get started design" icon="pi pi-arrow-right" icon-pos="right" ></pv-button>
      <pv-button class="centered" style="color: black" label="Trending Now" text raised ></pv-button>
    </div>
    <div class="col-6 right img-fluid text-center">
      <img style="width: 100%; height: 100%" class="img-fluid" src="https://s3-alpha-sig.figma.com/img/ee73/3a40/2bfcb29971dbf1324b2aee3663057040?Expires=1684108800&Signature=dvBAfiQ49VhrWhLxigmvxMJm5xGErMILHxG-rxml4MChitfvDeNy4UUNEfXmrfqWUByoZ7cE2N~q-s9t2m14-G91Jx6ME9LhGgBbx3qsvxeUL1udmmca2cbFPRNyIQMSv5mvtN5PTx354NWkpwfo7Q6wsggxwVb1GUk50leo2-TUYxBi5d7NBKuhXQZzki1QzBv7-NM34rCtvLgg6S0NuFttv46iB8DQPdTZzO8wpP6npNv7HdTpRt2NE0kYVWOxpkQJ0TaBV9L0SNGzPO8qiyIL~LgR9FLmEMi8CFZmQUm1fsLL22DGwBr8o0HLIT7bgEZNPu0NULBFPr~eu2ZEoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
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
