<template>
  <pv-toast/>
  <header>
      <pv-toolbar :style="{ backgroundColor: '#FFD400' }">
      <template #start>
        <img src="src/assets/Logo.png" alt="Logo" style="position: absolute; width: 100px; height: auto;"/>
      </template>
      <template #end>
        <div class="flex-column">
          <router-link v-for="item in items"
                       :to="item.to"
                       custom
                       v-slot="{navigate, href}"
                       :key="item.label">
            <pv-button
                class="p-button-text text-white"
                :href="href"
                @click="navigate">{{ item.label }}</pv-button>
          </router-link>
        </div>
      </template>
    </pv-toolbar>
  </header>
  <pv-sidebar v-model:visible="drawer"></pv-sidebar>
  <router-view></router-view>
</template>

<script>
import Toolbar from "primevue/toolbar";

export default {
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home'},
        { label: 'About', to: '/about'},
          { label: 'Design', to: '/about'},
          { label: 'Trend', to: '/about'},
          { label: 'Subscription', to: '/about'},
          { label: 'My Collection', to: '/about'},
        { label: 'News', to: '/shoes-list'}
      ]
    }
  },
  components:{
      'pv-toolbar': Toolbar,
  }
}

</script>
