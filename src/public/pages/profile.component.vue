
<template>
    <div class="toolbar">
        <i class="pi pi-home custom-icon"></i>
    </div>
    <div class="formulario">
        <div class="flex flex-column gap-2">
            <label for="name" style="color: #7C838A;"> Full Name</label>
            <pv-input-text id="name" v-model="name" />
        </div>
        <div class="flex flex-column gap-2">
            <label for="age" style="color: #7C838A;">Age</label>
            <pv-input-text  id= "age"  v-model="age"/>
        </div>
        <div class="flex flex-column gap-2">
            <label for="country" style="color: #7C838A;">Country</label>
            <pv-input-text  id= "country"  v-model="country"/>
        </div>
        <div class="flex flex-column gap-2">
            <label for="size" style="color: #7C838A;">Size</label>
            <pv-input-text  id= "size"  v-model="size"/>
        </div>
        <div class="flex flex-column gap-2">
            <label for="fbrand" style="color: #7C838A;">Favorite Brand</label>
            <pv-input-text  id= "fbrand"  v-model="fbrand"/>
        </div>
        <div class="flex flex-column gap-2">
            <label for="email" style="color: #7C838A;">Email</label>
            <pv-input-text id="email" v-model="email"/>
        </div>
    </div>
    <br>
    <pv-button class="boton" type="button" label="Create Account" />
    <br>
    <div class="footer"></div>
</template>
<script setup>

</script>
<style scoped>
.toolbar {
    background-color: #FFD400;
    padding: 20px;
}
.custom-icon{
    font-size:24px;
}
.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: orange;
}
</style>