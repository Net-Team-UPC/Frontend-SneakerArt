<template>
    <i class="pi pi-home" style="position: absolute; top: 1rem; left: 1rem; font-size: 2rem;" @click="gotohome"></i>

    <div class="container">
    <div class="brand">
        <pv-dropdown v-model="selectedBrand" :options="brand" showClear option-label="name" option-value="code" placeholder="Select a Brand" class="w-20rem"   />
    </div><br>
    <div class="models">
        <pv-dropdown v-model="selectedModel" :options="availableModels" showClear placeholder="Select a Model" :disabled="!selectedBrand" class="w-20rem"   />
    </div><br>
    <div class="size">
        <pv-dropdown v-model="selectedSize" :options="size" showClear optionLabel="name" placeholder="Select a Size" class="w-20rem"  />
    </div><br>
    <div class="color">
        <pv-dropdown v-model="selectedColor" :options="color" showClear optionLabel="name" placeholder="Select a Color" class="w-20rem"  />
    </div>
    </div>
</template>

<script >
export default {
    methods: {
        gotohome() {
            this.$router.push({name: 'home'})
        }
    },
    data() {
        return {
            selectedBrand: null,
            brand: [
                { name: 'Nike', code: 'NK' },
                { name: 'Adidas', code: 'AD' },
                { name: 'Converse', code: 'CV' }
            ],
            selectedModel: null,
            models: {
                NK: ['Free Metcon', 'Rival Fly 3'],
                AD: ['Forum Loew Classic', 'Ozelia'],
                CV: ['Chuck', 'Hombre Run Star']
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
            selectedColor:null,
            color: [
                { name: 'White', code: 'WH' },
                { name: 'Black', code: 'BL' },
                { name: 'Red', code: 'RE' },
                { name: 'Green', code: 'GR' }
            ],
        };
    },
    computed: {
        availableModels() {
            if (this.selectedBrand) {
                return this.models[this.selectedBrand] || [];
            } else {
                return [];
            }
        }
    }
};
</script>

<style>
body {
    min-height: 100vh;
    background-image: url('../../../public/Fondo.jpg');
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

@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}
</style>