<template>
    <div class="split-screen-container">
        <div class="left-section">
            <img src="../../assets/logo.jpg" height="417" width="566" alt="Logo" class="logo-image"/>
        </div>
        <div class="right-section  custom-vertical-space">
            <label class="title">Enter your email to send you a new password</label><br><br>
            <div class="formulario">
                <div class="flex flex-column gap-2">
                    <label for="email" style="color: #7C838A;">Email</label>
                    <pv-input-text id="email" v-model="email"  placeholder="Enter your Email here"/>
                </div><br><br>
            </div>
            <br>
            <pv-button class="boton" type="button" label="Click here to send a email" @click="gotologin" />
            <br>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            email: '',
        };
    },
    methods: {
        gotologin() {
            this.$router.push({ name: "login" });
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
    background-color: white;
    padding: 20px;
    position: relative; /* Agrega posición relativa para los elementos posicionados absolutamente */
}
.custom-vertical-space {
    height: 500px; /* Ajusta la altura según tus necesidades */
    margin-top: auto;
    margin-bottom: auto;
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

.right-section .formulario input[id="email"]{
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



@media (min-width: 430px) {
    .right-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .right-section .title,
    .right-section .formulario{
        position: static;
        width: 100%;
        max-width: 750px; /* Ajusta el ancho máximo deseado */
        margin-left: auto;
        margin-right: auto;
    }
    .right-section .boton{
        position: static;
        width: 100%;
        max-width: 400px; /* Ajusta el ancho máximo deseado */
        margin-left: auto;
        margin-right: auto;
    }
}

</style>
