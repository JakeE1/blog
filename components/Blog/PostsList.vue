<template>
	<section class="post-list">
		<div class="container">
			<div class="posts__wrapper">
				<postsPrewie 
				v-for="post in posts" :key="post.id"
				:admin="admin"
				:post="post"/>
			</div>
		</div>
	</section>
</template>

<script>
import postsPrewie from '@/components/Blog/postsPrewie.vue'
//postsPrewie
export default {
	components: { postsPrewie },
	props: {
		posts: {
		posts: Array,
		required: true
	},
	admin: {
		type: Boolean,
		default: false
	}
	}
}
</script>

<style lang="scss">
.posts__wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
}
</style>