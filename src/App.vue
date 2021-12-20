<template>
  <v-app>
    <Nav />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: 'App',

  components: {
    Nav
    }
};

</script>
