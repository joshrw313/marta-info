<template>
<div>
<h1>Routes</h1>
<LinkList :list="busRoutes" root='routes' />
</div>
</template>

<script>
  import LinkList from "../components/LinkList.vue";
  import busRoutes from "../busRoutes.js";
  export default {
    name: 'Routes',
    data() {
      return {
         busRoutes: busRoutes
         }
    },
    components: {
      LinkList
    },
  }
</script>