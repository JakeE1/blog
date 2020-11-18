<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <Intro title="My lasts post: " /> 
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
  
  computed: {
		postsLoaded () {
			 return this.$store.getters.getPostLoaded
		}
	}
}
</script>

<style>
</style>
