<template>
    <div class="design-view">
    <i class="pi pi-home" style="position: absolute; top: 1rem; left: 1rem; font-size: 2rem;" @click="gotohome"></i>

    <div class="container">
        <div class="brand">
            <pv-dropdown v-model="selectedBrand" :options="brand" showClear option-label="name" option-value="code" placeholder="Select a Brand" class="w-full md:w-20rem" style="border: 5px solid darkseagreen; "/>
        </div>
        <br>
        <div class="models">
            <pv-dropdown v-model="selectedModel" :options="availableModels" showClear placeholder="Select a Model" :disabled="!selectedBrand" class="w-full md:w-20rem" style="border: 5px solid darkseagreen; "/>
        </div>
        <br>
        <div class="size">
            <pv-dropdown v-model="selectedSize" :options="size" showClear optionLabel="name" placeholder="Select a Size" class="w-full md:w-20rem" style="border: 5px solid darkseagreen; "/>
        </div>
        <br>
        <div class="color">
            <pv-dropdown v-model="selectedColor" :options="availableColors" showClear optionLabel="name" placeholder="Select a Color" :disabled="!selectedModel" class="w-full md:w-20rem" style="border: 5px solid darkseagreen; " />
        </div>
        <br>
        <pv-button class="boton" type="button" label="Search" @click="searchDesign" />
        <br>
    </div>
    <div class="image-container" v-if="selectedImage">
        <img :src="selectedImage" alt="Selected Design" class="design-image" />
    </div>
    </div>
</template>

<script >
import {DesignService} from "../services/design.service.js";
import {FilterMatchMode} from "primevue/api";

export default {
    methods: {
        gotohome() {
            this.$router.push({name: 'home'})
        },
        initFilters() {
            this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
        },
        searchDesign() {
            const selectedBrand = this.selectedBrand;
            const selectedModel = this.selectedModel;
            const selectedColor = this.selectedColor.name;
            console.log(selectedBrand);
            console.log(selectedModel);
            console.log(selectedColor);
            this.designService.search(selectedBrand, selectedModel, selectedColor)
                .then((response) => {
                    if (response.data.length > 0) {
                        const matchedDesign = response.data[0];
                        this.selectedImage = matchedDesign.img;
                    } else {
                        this.selectedImage = null; // No matching design found
                        console.log("No funciona mano");
                    }
                }).catch(e => this.errors.push(e));
        }
     },
    data() {
        return {
            errors: [],
            designs:[],
            design: {},
            designService:null,
            selectedImage: null,
            selectedBrand:null,
            brand: [
                { name: 'Nike', code: 'NK' },
                { name: 'Adidas', code: 'AD' },
                { name: 'Converse', code: 'CV' }
            ],
            selectedModel: null,
            models: {
                NK: ['Free Metcon 5','Rival Fly 3'],
                AD: ['Forum Low Classic',  'Ozelia'],
                CV: ['Chuck Taylor 70','Hombre Run Star Motion Ox']
            },
            selectedColor: null,
            colors: {
                'Free Metcon 5': [{ name: 'White' }, { name: 'Black' }],
                'Rival Fly 3': [{ name: 'Green' }, { name: 'Blue' }],
                'Forum Low Classic': [{ name: 'Cloud White' }, { name: 'Better Scarlet' }],
                'Ozelia': [{ name: 'Cloud White' }, { name: 'Core Black' }],
                'Chuck Taylor 70': [{ name: 'Black' }, { name: 'Brown' }],
                'Hombre Run Star Motion Ox': [{ name: 'White' }, { name: 'Black' }]
            },
            selectedSize:null,
            size: [
                { name: '35.5', code: 'S35.5' },
                { name: '36', code: 'S36' },
                { name: '36.5', code: 'S36.5' },
                { name: '38', code: 'S38' },
                { name: '38.5', code: 'S38.5' },
                { name: '39', code: 'S39' },
                { name: '40', code: 'S40' },
                { name: '40.5', code: 'S40.5' },
                { name: '41', code: 'S41' },
                { name: '42', code: 'S42' },
                { name: '43', code: 'S43' },
                { name: '44', code: 'S44' },
                { name: '44.5', code: 'S44.5' },
                { name: '45', code: 'S45' },
                { name: '46', code: 'S46' }
            ],
        };
    },
    watch: {
        selectedModel(newModel) {
            this.selectedColor = null; // Reiniciar el color seleccionado cuando se cambia el modelo
            this.color = this.availableColors; // Actualizar la lista de colores según el modelo seleccionado
            console.log('Selected Model:', newModel); // Imprimir el valor de selectedModel en la consola
        },
    },
    computed: {
        availableModels() {
            if (this.selectedBrand) {
                return this.models[this.selectedBrand] || [];
            } else {
                return [];
            }
        },
        availableColors() {
            if (this.selectedModel) {
                const modelColors = this.colors[this.selectedModel];
                if (modelColors) {
                    return modelColors;
                }
            }
            return [];
        }
    },
    created(){
        this.designService = new DesignService();
        this.designService.getAll()
            .then((response) => {
                this.designs=response.data;
            }).catch(e => this.errors.push(e));
    }
};
</script>

<style>
.design-view {
    min-height: 100vh;
    background-image: url('/public/Fondo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 0 auto; /* Ajusta el margen horizontal si es necesario */
    position: relative;
    top: 50%;
    transform: translateY(50%);
    margin-left: 30%; /* Ajusta el margen izquierdo en porcentaje para moverlo a la derecha */
    .boton {
        position: absolute;
        top: 100%; /* Ajusta la posición vertical en relación con el contenedor */
        left: 50%; /* Ajusta la posición horizontal en relación con el contenedor */
        transform: translate(-50%, -50%); /* Centra el botón exactamente en el centro del contenedor */
        width: 80%; /* Ajusta el ancho del botón utilizando un porcentaje */
        max-width: 200px; /* Establece un ancho máximo en píxeles */
        height: 40px;
        background-color: #FFD400;
        color: black;
        font-size: 25px;
        font-weight: bold;
        border-radius: 10px;
        border: none;
    }
}
.image-container {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 50vh;
    width: 70vw;
    margin-top: -20vh; /* Ajusta el valor de margin-top según tus necesidades */
    margin-left: 10vw; /* Ajusta el valor de margin-left según tus necesidades */
}
.design-image {
    width: 40%;
    height: auto;
    border: 4px solid darkseagreen; /* Ajusta el grosor y color del borde según tus preferencias */

}
@media (max-width: 768px) {
    .boton,
    .container {
        width: 100%;
    }
    .image-container {
        height: 30vh; /* Ajusta la altura en tamaños de pantalla más pequeños */
        width: 90vw; /* Ajusta el ancho en tamaños de pantalla más pequeños */
        margin-top: -15vh; /* Ajusta el valor de margin-top en tamaños de pantalla más pequeños */
        margin-left: 5vw; /* Ajusta el valor de margin-left en tamaños de pantalla más pequeños */
    }
    .design-image {
        width: 200px;
        height: 200px;
    }
}
</style>