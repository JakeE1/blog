<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post"/>
		<comments :comments="comments" />
		<newComment />
  </div>
</template>

<script>
import post from '@/components/Blog/Post.vue'
import newComment from '@/components/Comments/NewComment.vue'
import comments from '@/components/Comments/Comments.vue'


export default { 
  components: {
    post, newComment, comments
  },
  data () {
    return { 
      post: {
				id: 1,
				title: 'First post',
				description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.',
				img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_baXcxAQ6wyvwsmWjCC5vzSVckHgSBI3MrMQ71V4u6i8RHYOS',  
				content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'	
			},
			comments: [
				{
					name: 'Alex',
					text: 'Wery interesting'
				},
				{
					name: 'Vlad',
					text: 'Best Math book ever !'
				}
			]
  	}
	},
	
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
