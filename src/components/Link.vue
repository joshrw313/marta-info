<template>
<v-container>
    <v-btn v-on:click="link">{{item.text}}</v-btn>
</v-container>
</template>

<script>
  export default {
    name: 'Link',

    props: {
      item: Array,
      root: String
      },

		methods: {
			link: function () {
				this.$router.push(`/${this.root}/${this.item.route}`)
				}
			},
  }
</script>