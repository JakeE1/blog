<template>
	<NuxtLink :to="getLink" class="post-preview">
		<img :src="post.img" :alt="post.title">
		<div class="post-content">
			<h3 class="title">{{ post.title }}</h3>
			<p>{{ post.description }}</p>
		</div>
	</NuxtLink>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true
		},
		admin: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		getLink () {
			return this.admin ?  `/admin/+${this.post.id}` : `/blog/+${this.post.id}`
		}
	}
}
</script>

<style lang="scss">
.post-preview {
	width: 33%;
	padding: 16px;
	margin-bottom: 20px;
	text-align: center;
	img {
		max-height: 488px;
		margin-bottom: 16px;
	}
	p {
		color: #999;
	}
}
</style>
	
