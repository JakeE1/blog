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
					</ul>
				</div>
			</div>
		</div> 
  </header>

</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Blog', url: '/blog'},
        { title: 'About', url: '/about'},
      ]
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