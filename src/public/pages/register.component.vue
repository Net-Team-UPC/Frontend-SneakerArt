<script setup>
import {ref} from "vue";
import {useUserStore} from "../../stores/user.js";
const email =ref("");
const password =ref("");

const userStore = useUserStore();
const register = ()=>{
  userStore.register(email.value,password.value)
}
</script>

<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="register_input">
        <input type="email" required v-model="email"/>
        <label>Email</label>
      </div>
      <div class="register_input">
        <input type="password" required v-model="password"/>
        <label>Password</label>
      </div>
      <button class="register_submit" type="submit">Register</button>
    </form>
  </div>
</template>



<style>
.register{
  margin:100px auto;
  width: 400px;
  padding: 40px;
  background: #282828;
  box-sizing:border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,0.6);
  border-radius: 10px;
}
</style>