<template>
  <section class="contact">
		<div class="container">
			<h2 class="title"> Contact me !</h2>

			<Message  v-if="message" :message="message" />
			<form class="contact-form" @submit.prevent="onSubmit">
				<AppInput v-model="user.name"> Name: </AppInput>
				<AppInput v-model="user.email" type="email"> Email: </AppInput>
				<AppTextArea v-model="user.text"> Text: </AppTextArea>

				<div class="controls">
					<AppButton>Submit !</AppButton>
				</div>
			</form>
		</div>
  </section>
</template>

<script>


export default {
	data () {
		return {
		message: null,
	  	user: {
			name:'',
			email:'',
			text:''
			}
		}
	},
	methods: {
		onSubmit () {
			this.message = 'Submited'
			console.log(this.user);
		}
	}
}
</script>

<style lang="scss">
.contact {
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