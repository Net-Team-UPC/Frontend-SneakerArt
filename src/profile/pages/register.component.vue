<template>
    <div class="split-screen-container">
        <div class="left-section">
            <img src="../../assets/logo.jpg" height="417" width="566" alt="Logo" class="logo-image"/>
        </div>
        <div class="right-section"><br><br><br><br><br><br>
           <label class="title">Create your Free Account</label>
            <div class="formulario">
            <div class="flex flex-column gap-2">
                <label for="name" style="color: #7C838A;"> Full Name</label>
                <pv-input-text id="name" v-model="name" placeholder="Enter your Full Name here"/>
            </div><br><br>
            <div class="flex flex-column gap-2">
                <label for="email" style="color: #7C838A;">Email</label>
                <pv-input-text id="email" v-model="email"  placeholder="Enter your Email here"/>
            </div><br><br>
            <div class="flex flex-column gap-2">
            <label for="password" style="color: #7C838A;">Password</label>
            <pv-input-text type="password" id= "password"  v-model="password"  placeholder="Enter your Password here"/>
            </div>
            </div>
            <br>
            <pv-button class="boton" type="button" label="Create Account" @click="handleButtonClick"/>
            <br>
            <small class="login" style="color:#7C838A">Already have a account?<span style="color: #FFD400;cursor: pointer;" @click="gotologin">Login</span></small>
        </div>
    </div>
</template>
<script>
import { ProfileService } from "../services/profile.service.js";


export default {
    data() {
        return {
            profileService: null,
            profiles: [],
            errors: [],
            name: "",
            email: "",
            password: "",
            counter: "", // Nuevo contador para generar IDs
            showError: false, // Bandera para controlar si se muestra el error o no

        };
    },
    created() {
        this.profileService = new ProfileService();
    },
    methods: {
        async handleButtonClick() {
            try {
                await this.handleCreateAccount();
                if (!this.showError) {
                    this.gotologin();
                }
            } catch (error) {
                console.error(error);
            }
        },
        gotologin() {
            this.$router.push({ name: "login" });
        },
        async handleCreateAccount() {
            // Verificar si todos los campos están completos
            if (!this.name || !this.email || !this.password) {
                alert("No ha llenado todos los campos");
                this.showError = true; // Establecer la bandera de error en true
                return;
            }
            // Validar el nombre
            if (!this.isValidName(this.name)) {
                alert("Nombre invalido");
                this.showError = true; // Establecer la bandera de error en true
                return;
            }
            // Validar el correo electrónico
            if (!this.isValidEmail(this.email)) {
                alert("Email invalido");
                this.showError = true; // Establecer la bandera de error en true
                return;
            }

            // Crear un objeto con los datos del perfil
            const profileData = {

                name: this.name,
                email: this.email,
                password: this.password,
            };

            try {
                // Inicializar el servicio de perfil
                this.profileService = new ProfileService();
                // Guardar el perfil en la base de datos
                await this.profileService.create(profileData);
                // Otras acciones después de guardar el perfil en la base de datos

            } catch (error) {
                console.error(error);
                // Manejo de errores en caso de fallo al guardar en la base de datos
                alert("Error al crear la cuenta");
                this.showError = true; // Establecer la bandera de error en true

            }
            this.counter++; // Incrementar el contador para generar el nuevo ID
        },
        isValidName(name) {
            // Verificar si el nombre contiene caracteres no permitidos (solo letras y espacios)
            const regex = /^[a-zA-Z\s]+$/;
            return regex.test(name);
        },
        isValidEmail(email) {
            // Verificar si el correo electrónico tiene un formato válido
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        },
    },

};
</script>
<style>
.split-screen-container {
    display: flex;
    height: 100vh; /* Ajusta la altura de acuerdo a tus necesidades */
    overflow-y:hidden;
}

.left-section {
    flex: 1;
    background-color: #FFD400; /* Estilo de fondo para la sección izquierda */
    padding: 20px; /* Ajusta el espaciado interior de acuerdo a tus necesidades */
    position: relative;
}

.logo-image {
    width: 70%; /* Ajusta el ancho de la imagen según tus necesidades */
    height: auto; /* La altura se ajustará automáticamente para mantener la proporción */
    max-width: 100%; /* Limita el ancho máximo de la imagen al 100% del contenedor */
    max-height: 100%; /* Limita la altura máxima de la imagen al 100% del contenedor */
    display: block; /* Asegura que la imagen sea un elemento de bloque y no tenga espacios en blanco alrededor */
    position: absolute; /* Permite posicionar la imagen dentro del contenedor */
    top: 50%; /* Posiciona la imagen en el centro verticalmente */
    left: 50%; /* Posiciona la imagen en el centro horizontalmente */
    transform: translate(-50%, -50%); /* Centra la imagen exactamente en el centro */
}
.right-section {
    flex: 1;
    background-color: white;
    padding: 20px;
    position: relative; /* Agrega posición relativa para los elementos posicionados absolutamente */
}

.right-section .title {
    position: absolute;
    top: 160px;
    left: 50px;
    font-size: 26px;
    font-weight: bold;
}

.right-section .formulario {
    position: absolute;
    top: 250px;
    left: 50px;
    width: calc(100% - 100px); /* Ajusta el ancho deseado */
}

.right-section .formulario input[id="name"],
.right-section .formulario input[id="email"],
.right-section .formulario input[type="password"] {
    width: 100%;
    border-radius: 20px;
    background-color: rgba(176, 186, 195, 0.4);
}

.right-section .boton {
    position: absolute;
    top: 650px;
    left: 50px;
    width: calc(100% - 100px); /* Ajusta el ancho deseado */
    max-width: 340px;
    height: 60px;
    background-color: #FFD400;
    color: black;
    font-size: 25px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
}

.right-section .login {
    position: absolute;
    top: 730px;
    left: 50px;
    font-size: 18px;
    width: calc(100% - 100px); /* Ajusta el ancho deseado */
    height: 27px;
    text-align: center;
}

@media (min-width: 430px) {
    .right-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .right-section .title,
    .right-section .formulario,
    .right-section .boton,
    .right-section .login {
        position: static;
        width: 100%;
        max-width: 750px; /* Ajusta el ancho máximo deseado */
        margin-left: auto;
        margin-right: auto;
    }
}

</style>
