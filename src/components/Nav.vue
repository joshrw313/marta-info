<template>
    <v-toolbar app max-height="72" min-height="72" outlined="true" flat="true" >
      <v-toolbar-title>
        <router-link to="/"><h1>MartaInfo</h1></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-on:click="link('/stations')"><h3>Rail</h3></v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-on:click="link('/routes')"><h3>Bus</h3></v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
  export default {
    name: 'Nav',

    methods: {
      link: function (path) {
        this.$router.push(path)
        }
      },

    components: {
    },
  }
</script>