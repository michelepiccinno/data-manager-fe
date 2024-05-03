<script>
import { stringifyQuery } from 'vue-router';

export default {

  name: "TicketDetail",

  props: {
    title: String,
    dimension: String,
  }

}
</script>

<template>
  <div>
    <h1>Titolo: {{ title }}</h1>
    <h4>Dimensione: {{ dimension }}</h4>
  </div>
</template>
