<template>
    <div class="split-screen-container">
        <div class="left-section">
            <img src="../../../public/logo.jpg" height="417" width="566" alt="Logo" class="logo-image"/>
        </div>
        <div class="right-section">
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
            <pv-button class="boton" type="button" label="Create Account" @click="handleCreateAccount"/>
            <br>
            <small class="login" style="color:#7C838A">Already have a account?<span style="color: #FFD400;">Login</span></small>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },
    methods: {
        handleCreateAccount() {
            // Verificar si todos los campos están completos
            if (!this.name || !this.email || !this.password) {
                alert('No ha llenado todos los campos');
                return;
            }
            // Validar el nombre
            if (!this.isValidName(this.name)) {
                alert('Nombre invalido');
                return;
            }

            // Validar el correo electrónico
            if (!this.isValidEmail(this.email)) {
                alert('Email invalido');
                return;
            }

            // Si todas las validaciones pasan, puedes proceder a la siguiente vista o realizar otras acciones
            // ...
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
        }
    }
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
    background-color: white; /* Estilo de fondo para la sección derecha */
    padding: 20px; /* Ajusta el espaciado interior de acuerdo a tus necesidades */
    .title {
        position: absolute; /* Cambia 'absolute' por la posición deseada */
        top: 160px; /* Cambia '50px' por la posición vertical deseada */
        left: 1200px; /* Cambia '50px' por la posición horizontal deseada */
        font-size: 26px; /* Cambia '24px' por el tamaño de fuente deseado */
        font-weight: bold; /* Aplica negrita al texto */
    }
    .formulario{
        position: absolute; /* Cambia 'absolute' por la posición deseada */
        top: 250px; /* Cambia '50px' por la posición vertical deseada */
        left: 1000px; /* Cambia '50px' por la posición horizontal deseada */
        width:750px;
    }
    .formulario input[id="name"],
    .formulario input[id="email"],
    .formulario input[type="password"] {
        border-radius: 20px; /* Ajusta el valor según el grado de redondez deseado */
        background-color:rgba(176, 186, 195, 0.4);
    }
    .boton {
        position: absolute;
        top: 650px;
        left: 1200px;
        width: 340px; /* Ajusta el ancho deseado */
        height: 60px; /* Ajusta la altura deseada */
        background-color: #FFD400; /* Cambia '#FFD400' por el color de fondo deseado */
        color: black; /* Cambia '#FFFFFF' por el color de texto deseado */
        font-size: 25px; /* Ajusta el tamaño de fuente deseado */
        font-weight: bold; /* Aplica negrita al texto */
        border-radius: 10px; /* Ajusta el grado de redondez deseado */
        border: none; /* Elimina el borde si no lo deseas */
    }
    .login{
        position: absolute; /* Cambia 'absolute' por la posición deseada */
        top: 730px; /* Cambia '50px' por la posición vertical deseada */
        left: 1100px; /* Cambia '50px' por la posición horizontal deseada */
        font-size: 18px; /* Ajusta el tamaño de fuente deseado */
        width:278px;
        height:27px;
    }

}


@media (min-width: 768px) {
    .split-screen-container {
        flex-direction: row;
    }
    .left-section,
    .right-section {
        flex: 1;
    }
}
</style>
