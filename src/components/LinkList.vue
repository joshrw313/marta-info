<template>
<v-container>
  <div v-for="item in list" :key="item.id">
    <Link :item="item" :root="root" />
  </div>
</v-container>
</template>

<script>
  import Link from "./Link.vue"
  export default {
    name: 'LinkList',

    props: {
      list: Array,
      root: String
      },

    components: {
      Link
    },
  }
</script>