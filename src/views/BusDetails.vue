<template>
  <h1 v-if="!status" >...loading</h1>
  <div v-else>
    <h1>BusDetails</h1>
    <GMap></GMap>
  </div>
</template>

<script>
  import axios from 'axios';
  import GMap from '../components/GMap.vue'

  export default {
    name: 'BusDetails',

    data() {
      return {
        status: null,
        interval: null,
        busData: [],
      }
    },

    methods: {
      fetchData: async function () {
        const response = await axios.get(`/api/bus/all/${this.$route.params.vehicle}`);
        console.log(response.data);
        this.busData = response.data;
        this.status = response.status;
      },
    },

    mounted: function () {
      this.fetchData();
      this.interval = setInterval(this.fetchData, 10000);
    },

    destroyed: function () {
      clearInterval(this.interval);
      this.interval = null;
    },

    components: {
      GMap,
    },
  }
</script>