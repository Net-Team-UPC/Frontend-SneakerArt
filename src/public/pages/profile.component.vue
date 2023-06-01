
<template>
    <div>
        <div class="toolbar">
            <i class="pi pi-home custom-icon" @click="gotohome"></i>
        </div>

        <div class="formulario">
            <div class="flex flex-column gap-2">
                <label for="name" style="color: #7C838A;"> Full Name</label>
                <pv-input-text id="name" :readonly="!isEditing" v-model="name" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="age" style="color: #7C838A;">Age</label>
                <pv-input-text id="age" :readonly="!isEditing" v-model="age" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="country" style="color: #7C838A;">Country</label>
                <pv-input-text id="country" :readonly="!isEditing" v-model="country" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="size" style="color: #7C838A;">Size</label>
                <pv-input-text id="size" :readonly="!isEditing" v-model="size" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="fbrand" style="color: #7C838A;">Favorite Brand</label>
                <pv-input-text id="fbrand" :readonly="!isEditing" v-model="fbrand" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="email" style="color: #7C838A;">Email</label>
                <pv-input-text id="email" :readonly="!isEditing" v-model="email" />
            </div>
        </div>
        <br>
        <div class="image-upload">
            <div class="image-container">
                <img :src="imageUrl" alt="Imagen">
            </div>
            <div class="upload-icon" @click="openFilePicker">
                <i class="pi pi-upload"></i>
            </div>
            <input type="file" ref="fileInput" style="display: none" @change="handleFileChange">
        </div>
        <br>
        <pv-button class="boton" type="button" label="Edit" @click="toggleEditing" />
        <br>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: '',
            country: '',
            size: '',
            fbrand: '',
            email: '',
            imageUrl: 'ruta_de_la_imagen_actual.jpg'
        };
    },
    methods: {
        gotohome(){
            this.$router.push({name:'home'})
        },
        openFilePicker() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            if (!this.isEditing) {
                return;
            }
            const file = event.target.files[0];
            // Aquí puedes realizar cualquier lógica adicional, como validar el tipo de archivo, tamaño, etc.

            // Ejemplo para mostrar la nueva imagen
            const reader = new FileReader();
            reader.onload = (e) => {
                this.imageUrl = e.target.result;
            };
            reader.readAsDataURL(file);

        },
        toggleEditing() {
            this.isEditing = !this.isEditing;
        }
    }
};
</script>
<style scoped>
.toolbar {
    background-color: #FFD400;
    padding: 20px;
}

.custom-icon {
    font-size: 24px;
}

.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: orange;
}


    .formulario {
        position: absolute;
        top: 100px;
        left: 900px;
        margin: 20px;
        width: 700px;

    }

    .boton {
        position: absolute;
        top: 690px;
        left: 920px;
        width: 150px;
        margin-top: 10px;
        background-color: #FFD400;

    }

    .image-upload {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;

    }

    .image-container {
        position: absolute;
        top: 200px;
        left: 200px;
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .image-container img {
        width: 300px; /* Modifica el ancho de la imagen */
        height: 300px; /* Modifica la altura de la imagen */
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;

    }

    .upload-icon {
        position: absolute;
        top: 600px;
        left: 400px;
        margin-top: 10px;
        cursor: pointer;

    }
/* Estilos responsivos */


</style>