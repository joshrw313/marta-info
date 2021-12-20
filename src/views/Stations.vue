<template>
<div>
<h1>Stations</h1>
<LinkList :list="railStations" root='stations' />
</div>
</template>

<script>
  import LinkList from "../components/LinkList.vue";
  import railStations from "../railStations.js";
  export default {
    name: 'Routes',
    data() {
      return {
         railStations: railStations
         }
    },
    components: {
      LinkList
    },
  }
</script>