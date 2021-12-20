<template>
  <v-container fill-height fluid>
  <v-row align="center" justify="center">
    <v-col>
    <v-btn to="/stations"><h3>Real Time Rail Information</h3></v-btn>
    </v-col>
  </v-row>
  <v-row align="center" justify="center">
    <v-col align-self="center">
    <v-btn to="/routes"><h3>Real Time Bus Information</h3></v-btn>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    components: {
    },
  }
</script>
