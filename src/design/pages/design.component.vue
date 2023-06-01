<template>
    <i class="pi pi-home" style="position: absolute; top: 1rem; left: 1rem; font-size: 2rem;" @click="gotohome"></i>

    <div class="container">
        <div class="brand">
            <pv-dropdown v-model="selectedBrand" :options="brand" showClear option-label="name" option-value="code" placeholder="Select a Brand" class="w-full md:w-14rem" />
        </div>
        <br>
        <div class="models">
            <pv-dropdown v-model="selectedModel" :options="availableModels" showClear placeholder="Select a Model" :disabled="!selectedBrand" class="w-full md:w-14rem" />
        </div>
        <br>
        <div class="size">
            <pv-dropdown v-model="selectedSize" :options="size" showClear optionLabel="name" placeholder="Select a Size" class="w-full md:w-14rem" />
        </div>
        <br>
        <div class="color">
            <pv-dropdown v-model="selectedColor" :options="availableColors" showClear optionLabel="name" placeholder="Select a Color" :disabled="!selectedModel" class="w-full md:w-14rem" />
        </div>
        <pv-button class="boton" type="button" label="Search" @click=""/>

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
     },
    data() {
        return {
            designs:[],
            design: {},
            designService:null,

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
};
</script>

<style>
body {
    min-height: 100vh;
    background-image: url('/public/Fondo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* Otros estilos */
    /* ... */
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

}
.boton {
    position: absolute;
    top: 350px;
    left: 550px;
    width: calc(100% - 100px); /* Ajusta el ancho deseado */
    max-width: 200px;
    height: 40px;
    background-color: #FFD400;
    color: black;
    font-size: 25px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
}
@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
</style>