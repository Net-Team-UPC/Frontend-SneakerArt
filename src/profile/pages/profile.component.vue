
<template>
    <div>
        <div class="toolbar">
            <i class="pi pi-home custom-icon" @click="gotohome"></i>
        </div>

        <div class="formulario">
            <div class="flex flex-column gap-2">
                <label for="name" style="color: #7C838A;"> Full Name</label>
                <pv-input-text id="name"  v-model="name" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="age" style="color: #7C838A;">Age</label>
                <pv-input-text id="age"  v-model="age" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="country" style="color: #7C838A;">Country</label>
                <pv-input-text id="country"  v-model="country" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="size" style="color: #7C838A;">Size</label>
                <pv-input-text id="size"  v-model="size" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="fbrand" style="color: #7C838A;">Favorite Brand</label>
                <pv-input-text id="fbrand"  v-model="fbrand" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="email" style="color: #7C838A;">Email</label>
                <pv-input-text id="email"  v-model="email" />
            </div>
        </div>
        <br>
        <div class="image-upload">
            <div class="image-container">
                <img v-if="imageUrl" :src="imageUrl" alt="Profile Image" />
            </div>
            <div class="upload-icon" @click="openFilePicker">
                <i class="pi pi-upload"></i>
            </div>
            <input type="file" ref="fileInput" style="display: none" @change="handleFileChange">
        </div>
        <br>
        <pv-button class="boton" type="button" label="Edit"  />
        <br>
        <div class="footer"></div>
    </div>
</template>

<script>
import {ProfileService} from "../services/profile.service.js";
export default {
    data() {
        return {
            profileService: null,
            profiles: [],
            errors: [],
            name: '',
            age: '',
            country: '',
            size: '',
            fbrand: '',
            email: '',
            imageUrl: '', // Elimina la ruta de la imagen actual
            isEditing: false,
        };
    },
    methods: {
        gotohome() {
            this.$router.push({ name: 'home' });
        },
        openFilePicker() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            if (!file) {
                return; // Salir si no se seleccionó ningún archivo
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const imageSource = e.target.result;
                this.imageUrl = imageSource;
            };
            reader.readAsDataURL(file);
        },
    },
    created() {
        this.profileService = new ProfileService();
        this.profileService.getAll()
            .then((response) => {
                this.profiles = response.data;
            })
            .catch(e => this.errors.push(e));
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
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: orange;
}


    .formulario {
        position: absolute;
        top: 130px;
        left: 20%;
        transform:translateX(-50%);
        margin: 20px;
        width: 700px;

    }

    .boton {
        position: absolute;
        top: 690px;
        left: 20%;
        transform:translateX(-50%);
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
        left: 70%;
        transform:translateX(-50%);;
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .image-container img {
        width: 500px; /* Modifica el ancho de la imagen */
        height: 500px; /* Modifica la altura de la imagen */
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        max-height: 100%;
        border-radius: 70%;
        border: 4px solid darkseagreen; /* Ajusta el grosor y color del borde según tus preferencias */
    }

    .upload-icon {
        position: absolute;
        top: 700px;
        left: 70%;
        transform:translateX(-50%);
        margin-top: 10px;
        cursor: pointer;

    }
/* Estilos responsivos */
@media (max-width: 768px) {
    .formulario {
        width: 90%;
        max-width: 500px;
    }

    .boton {
        width: 100%;
        max-width: 300px;
    }

    .image-container {
        width: 90%;
        max-width: 400px;
        height: auto;
    }

    .image-container img {
        width: 100%;
        height: auto;
    }

    .upload-icon {
        top: 500px;
    }
}
</style>