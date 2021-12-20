<template>
  <h1 v-if="!status" >...loading</h1>
  <div v-else>
    <h1>{{this.railStations[this.$route.params.station].name}}</h1>
    <div v-for="train in thisStationTrains" :key="train">
        <div>
          <h3><span>{{railData[train].DIRECTION}}</span> {{railData[train].DESTINATION}} {{railData[train].WAITING_TIME}}</h3>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  const railStations = require('../railStations')

  export default {
    name: 'RailStation',

    data() {
      return {
        status: null,
        interval: null,
        railData: [],
        thisStationTrains: [],
        railStations,
      }
    },

    methods: {
      findThisStationsTrains: function(data) {
        const station = this.railStations[this.$route.params.station];
        console.log(station.name);
        const allTrains = Object.keys(data);
        console.log(allTrains);
        const thisStationTrains =  allTrains.filter(train => data[train].STATION === `${station.name} STATION`);
        return thisStationTrains;
      },
      fetchData: async function() {
        const response = await axios.get(`/api/train/all`)
        console.log(response.data);
        this.thisStationTrains = this.findThisStationsTrains(response.data)
        console.log(this.thisStationTrains);
        this.railData = response.data;
        this.status = response.status;
      }
    },

    mounted: function () {
      this.fetchData();
      this.interval = setInterval(this.fetchData, 60000);
    },

    destroyed: function () {
      clearInterval(this.interval);
      this.interval = null;
    },

    components: {
    },
  }
</script>