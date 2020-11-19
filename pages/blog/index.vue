<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My post: " /> 
    <PostsList :posts="postsLoaded" /> 
  </div>
</template>

<script>

export default { 
  //SEO
  head () {
    let title = 'Blog Page',
        descr = 'My SSR Blog! With Nuxt.js',
        type = 'site'
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title},
        { hid: 'description', name: 'decription', content: descr},
        { hid: 'og:decription', name: 'og:decription', content: descr},
        { hid: 'og:type', name: 'og:type', content: type},
      ]
    }
  },
  computed: {
		postsLoaded () {
			 return this.$store.getters.getPostLoaded
		}
	}
}
</script>

<style>
</style>
