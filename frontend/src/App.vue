  <script>
  import { RouterLink, RouterView } from 'vue-router'
  import TicketsTable from './components/TicketsTable.vue';
  import TheHeader from './pages/TheHeader.vue';
  import axios from 'axios';

  export default {
    components: {
      TicketsTable,
      TheHeader
    },
    data() {
      return {
        info: null
      }
    },
    mounted() {
      axios
        .get('http://127.0.0.1:8000/api/welcome')
        .then(response => (this.info = response))
    }
  }
</script>

<template>
  <TheHeader />
  <router-view />
  {{ info }}

</template>

<style scoped></style>
