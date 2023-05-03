<template>
 <div class="container">
     <div class="columns">
         <div class="column is-6 is-offset-3">
             <h3 class ="title is-3">Crear una cuenta</h3><hr>
             <form action="#" @submit.prevent="register">
                 <div class="field">
                     <label class="label">Name</label>
                     <div class="control">
                         <input class="input" type="text" placeholder="e.g Alex Smith" v-model="name">
                     </div>
                 </div>
                 <div class="field">
                     <p class="control has-icons-left has-icons-right">
                         <input class="input" type="email" placeholder="Email" v-model="email">
                         <span class="icon is-small is-left">
                         <i class="fas fa-envelope"></i>
                         </span>
                         <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                         </span>
                     </p>
                 </div>
                 <div class="field">
                     <p class="control has-icons-left">
                         <input class="input" type="password" placeholder="Password" v-model="password">
                         <span class="icon is-small is-left">
                         <i class="fas fa-lock"></i>
                         </span>
                     </p>
                 </div>
                 <div class="field">
                     <p class="control">
                         <button type="submit" class="button is-primary">
                             Create Account
                         </button>
                     </p>
                     <p class="subtitle is-5">Already have a account?<RouterLink to="/login">Login</RouterLink></p>
                 </div>
             </form>
             <div class="notification is-danger" v-if="error">
                 {{error}}
             </div>
         </div>
     </div>
 </div>
</template>
<script>


export default {
    data(){
        return{
            name:'',
            email:'',
            password:'',
            error:''
        }
    },
    name:'Register',
    methods:{
        register(){
            if (this.name && this.email && this.password){
                    
            }else {
                this.error='Todos los campos son requeridos'
            }
        }
    }
}
</script>