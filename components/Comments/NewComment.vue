<template>
  <section class="new-comment">
		<div class="container">
            <h2 class="title">New Comment: </h2>
            <Message  v-if="message" :message="message" />
			<form class="contact-form" @submit.prevent="onSubmit">
				<AppInput v-model="comment.name"> Name: </AppInput>
				<AppTextArea v-model="comment.text"> Text: </AppTextArea>

				<div class="controls">
					<AppButton>comment</AppButton>
				</div>
			</form>
		</div>
  </section>
</template>

<script>

export default {
	props: {
		postId: {	
			type: String,
			required: true
		}
	},
     data () {
		return {
        message: null,    
	  	comment: {
				name:'',
				text:''
			}
		}
	},
	methods: {
		onSubmit () {
			this.$store.dispatch('addComment', {
				postId: this.postId,
				publish: true,
				...this.comment
			})
			.then(() => {
				this.message = "Submited!"
				//Reset
				this.comment.name = ""
				this.comment.text = ""
			})
			.catch(e => console.log(e))
		}
	}
}
</script>

<style lang="scss">
.new-comment {
	text-align: center;
	color: #999;
	.title {
        
		color: #fff;
	}
	.contact-form {
		max-width: 600px;
		margin: 30px auto;
	}
	.controls {
		margin: 30px 0;
	}
}

</style>