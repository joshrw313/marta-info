<template>
  <div>
		<h1>GMap</h1>
    <div id="map">

		</div>
  </div>
</template>

<script>
import loadMap from '../googleMap.js';


  export default {
    name: 'GMap',

		props: {
			positions: Array,	
		},

		mounted() { 
			this.$nextTick(function() {
					const center = "{lat: 0, lng: 0}";
					loadMap(center,"8");
			})
		}
  }

</script>

<style>
	.map {
		height: 400px;
	}
</style>