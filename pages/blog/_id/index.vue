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
	async asyncData (context) {
		let [post, comments] = await Promise.all([
			axios.get(`https://blog-app-b278b.firebaseio.com/posts/${context.params.id.slice(1)}.json`),
			axios.get(`https://blog-app-b278b.firebaseio.com/comments.json`)
		])

		/* let commentsArray = [],
			commentsArrayRes = []
		Object.keys(comments.data).forEach(key => {
			commentsArray.push(comments.data[key])
		})

		for (let i=0; i < commentsArray.length; i++) {
			if (commentsArray[i].postId === context.params.id && commentsArray[i].publish) {
				commentsArrayRes.push(commentsArray[i])
			}
		} */
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
}
.post-body {
	text-align: left;
}
</style>
