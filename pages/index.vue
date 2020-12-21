<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo :cardsLoad="cardsLoad" />
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
  data () {
    return {
      cardsLoad : 0
    }
  },
  methods: {
    startLoad () {
      console.log("hi");
    }
  },
  transition: {
      name: 'slide-fade'
    },
    
  beforeRouteEnter(to, from, next) {
    /* console.log(this.data()); */
    next();
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
    },
    cardsLoaded () {
			 return this.$store.getters.getCardsLoaded
		}
	}
}
</script>

<style>
</style>
