  <script>
  import { RouterLink, RouterView } from 'vue-router'
  import TicketsTable from './components/TicketsTable.vue';
import TheHeader from './pages/TheHeader.vue';

  export default {
    components: {
      TicketsTable,
      TheHeader
    },
  }
</script>

<template>
  <TheHeader />
  <router-view />


</template>

<style scoped></style>
