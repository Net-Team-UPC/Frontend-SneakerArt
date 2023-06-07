<template>
    <i class="pi pi-home" style="position: absolute; top: 1rem; left: 1rem; font-size: 2rem;" @click="gotohome"></i>
    <div class="row">
    <div class="container">
      <div class="row">
        <div class="column"  v-for=" shoe of shoes">
          <pv-card class="mat-card">
            <template #title >
              <div class="title">
                {{shoe.name}}
              </div>
              <div class="img-container">
                <img :src="shoe.img" alt="shoe-image">
              </div>
            </template>
            <template #content >
              <div class="centered-content content">
                 {{shoe.description}}
                <div class="price-container">
                  Price: {{shoe.price}}
                  <div>
                    <pv-button style="background-color: black; color:white" label="SHOP">SHOP</pv-button>
                  </div>
                </div>
              </div>
            </template>
          </pv-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {CollectionService} from "../services/collection.service.js";
import {FilterMatchMode} from "primevue/api";

export default {
  name: "collection",
  data() {
    return {
      shoes:[],
      shoe: {},
      shoesService:null,
    };
  },
  created(){
    this.shoesService = new CollectionService();
    this.shoesService.getAll()
        .then((response) => {
          this.shoes=response.data;
    }).catch(e => this.errors.push(e));
  },
  methods:{
    initFilters() {
      this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
    },
      gotohome() {
          this.$router.push({name: 'home'})
      },
  },
}

</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  box-sizing: border-box;
}
.title{
  text-align: center;
}

@media (min-width: 576px) {
  .column {
    flex-basis: 50%;
  }
}

@media (min-width: 992px) {
  .column {
    flex-basis: 33.33%;
  }
}
.img-container img {
  max-width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  margin: auto;
}

.price-container{
  text-align: center;
  font-size: 20px;
  padding: 15px;

}

.mat-card {
  padding: inherit;
  box-shadow: black 0px 0px 10px;
}

.content {
  padding: 15px;
  font-size: 20px;
}
</style>