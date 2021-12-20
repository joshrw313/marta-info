<template>
  <h1 v-if="!status" >...loading</h1>
  <div v-else>
    <h1>BusRoute</h1>
      <div v-for="bus in busData" :key="bus.VEHICLE">
        <div>
          <div><h3>{{bus.VEHICLE}}</h3><h3>{{bus.DIRECTION}}</h3> <h3>{{bus.TIMEPOINT}}</h3> <h3>{{scheduleAdherence[busData.indexOf(bus)]}}</h3><h3><v-btn v-on:click="link(bus.VEHICLE)">Details</v-btn><div>
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios';
  const busRoutes = require('../busRoutes');

  export default {
    name: 'BusRoute',

    data() {
      return {
        status: null,
        interval: null,
        busData: [],
        busRoutes,
      }
    },

    methods: {
      fetchData: async function () {
        const response = await axios.get(`/api/bus/${this.$route.params.route}`);
        console.log(response.data);
        this.busData = response.data;
        this.status = response.status;
      },
			link: function (vehicle) {
				this.$router.push(`/vehicles/${vehicle}`)
				},
      findScheduleAdherence: function (adherence) {
        if (parseInt(adherence) === 0) {
          return "On Schedule";
        } else if (adherence > 0) {
          return `${adherence}min Ahead of Schedule`;
        } else {
          return `${0 - adherence}min Behind Schedule`;
        }
      }
    },

    computed: {
      scheduleAdherence: function () {
        const scheduleAdherence = this.busData.map(bus => this.findScheduleAdherence(bus.ADHERENCE));
        console.log(scheduleAdherence);
        return scheduleAdherence
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