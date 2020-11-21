<template>
    <section class="post">
			<div class="container">

			<!-- header -->
			<div class="post-header">
				<img :src="post.img" :alt="post.title">
				<h1 class="title description"> {{ post.title }}</h1>
				<p class="description"> {{ post.description }}</p>
			</div>

			<!-- body -->
			<div class="post-body">
				{{ post.content }}
			</div>

			</div>
    </section>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>