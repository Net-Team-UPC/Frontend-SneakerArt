<template>
  <div>
    <pv-column v-for="shoe in shoes">shoe.name </pv-column>
  </div>
</template>
<script>
import {ShoesListService} from "../services/shoes-list.service.js";

export default {
  name: "shoes-list",
  components: {},
  data() {
    return {
      shoes:[],
      shoe: {},
      shoesService:null,
    };
  },
  created(){
    this.shoesService = new ShoesListService();
    this.shoesService.getAll().then((response) => {
      this.shoes=response.data;
    }).catch(e => this.errors.push(e));
  },
}

</script>

<style scoped>

</style>