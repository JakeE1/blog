<template>
	
  <header>
		<div class="navbar">
			<div class="container">
				<div class="navbar-content">
					<div><NuxtLink class="logo" to="/">Blog Home</NuxtLink></div> 
						<ul class="navbar-list">
							<li class="navbar-item" v-for="link in links" :key="link.title" >
							<NuxtLink  class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</NuxtLink>
							</li>
							<li class="navbar-item"  >
							<NuxtLink  class="navbar-link" v-if="uid" to="/auth/signin" @click="signout">Logout</NuxtLink>
							<NuxtLink  class="navbar-link" v-else to="/auth/signin">Sign In</NuxtLink>
							</li>
							<li>
								<!-- <LangSwitcher /> -->
							</li>
						</ul>
				</div>
			</div>
		</div> 
  </header>

</template>

<script>
/* import LangSwitcher from '../UI/LangSwitcher.vue' */
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
	/* components : { LangSwitcher }, */
  data () {
	return {
	  links: [
		{ title: 'What\'s ON', url: '/blog'},
		{ title: 'About', url: '/about'},
		{ title: 'Tickets', url: '/protected'},
	  ]
	}
  },
  computed: {
      ...mapGetters('modules/user', [
        'uid'
      ])
	},
	methods: {
      ...mapActions('modules/user', [ 'logout' ]),
      async signout () {
        await this.logout()
        this.$router.push('/')

        // this.logout().then(() => {
        //   this.$router.push('/')
        // }).catch((error) => {
        //   console.log(error.message)
        // })
      }
    }
}
</script>

<style lang="scss" scoped>
.navbar-link {
	&.nuxt-link-exact-active {
		color: #00374a;
	}
}
.logo {
	color: #f4c7c4;
	&.nuxt-link-exact-active {
		color: #00374a;
	}
}	
</style>