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
            <pv-dropdown v-model="selectedColor" :options="availableColors" showClear optionLabel="name" placeholder="Select a Color" :disabled="!selectedModel" class="w-full md:w-20rem" style="border: 5px solid darkseagreen; "/>
        </div>
        <br>
        <pv-button class="boton" type="button" label="Search" @click="searchDesign" />
        <br>
    </div>
        <div class="image-container" v-if="selectedImage">
            <div class="image-wrapper">
                <img :src="selectedImage" alt="Selected Design" class="design-image" />
                <div class="image-details">
                    <p><strong>Sneaker:</strong> {{ selectedBrand }}</p>
                    <p><strong>Model:</strong> {{ selectedModel }}</p>
                    <p><strong>Size:</strong> {{ selectedSize ? selectedSize.name : '' }}</p>
                    <p><strong>Color:</strong> {{ selectedColor ? selectedColor.name : '' }}</p>
                </div>
                <pv-button class="buy" type="button" label="Buy" />
            </div>
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

<style scoped>
.design-view {
    min-height: 100vh;
    background-image: url('/src/assets/Fondo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;

    background-position: center;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(60%);
    margin-left: 1%;
}

.boton {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 40px;
    background-color: #FFD400;
    color: black;
    font-size: 25px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    width: 25%;
    margin-top: -16vh;
    margin-left: 60vw;
}

.design-image {
    width: 100%;
    height: 100%;
    object-fit:cover;
    border: 4px solid darkseagreen;
}

.image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-details {
    margin-top: 10px;
    text-align: center;
    color: black;
    background-color:#FC9222;
}

@media (max-width: 768px) {
    .boton,
    .container {
        width: 100%;
    }

    .image-container {
        height: 30vh;
        width: 90vw;
        margin-top: -15vh;
        margin-left: 5vw;
    }

    .design-image {
        width: 200px;
        height: 200px;
    }
}
</style>