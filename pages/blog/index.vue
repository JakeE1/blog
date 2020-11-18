<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My post: " /> 
    <PostsList :posts="postsLoaded" /> 
  </div>
</template>

<script>

export default { 
   computed: {
		postsLoaded () {
			 return this.$store.getters.getPostLoaded
		}
	}
}
</script>

<style>
</style>
