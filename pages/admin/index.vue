<template>
    <PostsList :admin=true :posts="postsLoaded" /> 
</template>

<script>
export default {
  layout: 'admin',
  //thats for wotking localStorage in generate mod 
  mounted () {
	  this.$store.dispatch('nuxtServerInit')
  },
  computed: {
		postsLoaded () {
			 return this.$store.getters.getPostLoaded
		}
	}
}
</script>