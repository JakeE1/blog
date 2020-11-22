<template>
  <section class="contact">
		<div class="container">
			<h2 class="title">{{ $t('contactForm.title') }}</h2>

			<Message  v-if="message" :message="message" />
			<form class="contact-form" @submit.prevent="onSubmit">
				<AppInput v-model="user.name">{{ $t('contactForm.name') }}</AppInput>
				<AppInput v-model="user.email" type="email"> Email: </AppInput>
				<AppTextArea v-model="user.text">{{ $t('contactForm.text') }}</AppTextArea>

				<div class="controls">
					<AppButton>{{ $t('buttonForm') }}</AppButton>
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
			},
		card: {
			title: 'sfsdf',
			src: 'asad'
		}	
		}
	},
	methods: {
		onSubmit () {
			this.message = 'Submited'
			this.$store.dispatch('addCard', this.card)
			console.log(this.user)
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