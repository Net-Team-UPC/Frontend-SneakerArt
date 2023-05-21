<template>
    <div class="split-screen-container">
        <div class="left-section">
            <img src="../../../public/logo.jpg" height="417" width="566" alt="Logo" class="logo-image"/>
        </div>
        <div class="right-section">
           <label>Create your account</label>
            <div class="flex flex-column gap-2">
                <label for="name"> Full Name</label>
                <pv-input-text id="name" v-model="value" aria-describedby="name-help" placeholder="Enter your Full Name here"/>
            </div>
            <div class="flex flex-column gap-2">
                <label for="email">Email</label>
                <pv-input-text id="email" v-model="value" aria-describedby="email-help" placeholder="Enter your Email here" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="password">Password</label>
                <pv-password id="password" v-model="value" toggleMask placeholder="Enter your Password here"/>
            </div>
            <br>
            <pv-button type="button" label="Create Account"/>
            <br>
            <small>Already have a account?</small>
        </div>
    </div>
</template>

<script setup>

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
}


@media (min-width: 768px) {
    .split-screen {
        flex-direction: row;
    }

    .left-section,
    .right-section {
        flex: 1;
    }
}
</style>
