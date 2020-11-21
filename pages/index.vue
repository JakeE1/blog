<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <Intro :title="$t('title')" /> 
    <PostsList :posts="postsLoaded" /> 
    <contacts/>
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'

export default { 
  components: {
    promo,
    contacts
  },
  transition: {
      name: 'slide-fade'
    },
  //SEO
  head () {
    let title = 'SSR Blog about Math Books',
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
