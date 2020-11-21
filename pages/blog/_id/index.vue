<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post"/>
		<comments :comments="comments" />
		<newComment :postId="$route.params.id"/>
  </div>
</template>

<script>
import axios from 'axios'
import post from '@/components/Blog/Post.vue'
import newComment from '@/components/Comments/NewComment.vue'
import comments from '@/components/Comments/Comments.vue'


export default { 
  components: {
    post, newComment, comments
	},
	transition: {
      name: 'slide-fade'
    },
	//SEO
	head () {
		let title = this.post.title,
			descr = this.post.description,
			img = `mathbook.com/${this.post.img}`,
			type = 'article'
	return {
		title: title,
		meta: [
			{ hid: 'og:title', name: 'og:title', content: title},
			{ hid: 'description', name: 'decription', content: descr},
			{ hid: 'og:decription', name: 'og:decription', content: descr},
			{ hid: 'og:type', name: 'og:type', content: type},
			{ hid: 'og:img', name: 'og:img', content: type}
		]
	}
  },
	async asyncData (context) {
		let [post, comments] = await Promise.all([
			axios.get(`https://blog-app-b278b.firebaseio.com/posts/${context.params.id.slice(1)}.json`),
			axios.get(`https://blog-app-b278b.firebaseio.com/comments.json`)
		])

		let commentsArrayRes = Object.values(comments.data).filter(comment =>
		(comment.postId === context.params.id) && comment.publish)
		return {
			post: post.data,
			comments: commentsArrayRes
		}
	}
}
</script>

<style lang="scss">
.post {
	min-width: 900px;
	margin: 0 auto;
}
.post-header {
	text-align: center;
	margin-bottom: 30px;
	img {
		max-width: 400px;
	}
	p {
		color: #999;
	}
	.description {
		opacity: 0;
		animation: fadeinmove .5s ease;
		animation-delay: .5s;
		animation-fill-mode: forwards;
		}
}
.post-body {
	text-align: left;
}
</style>
