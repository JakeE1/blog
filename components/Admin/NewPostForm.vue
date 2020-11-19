<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title"> Title: </AppInput>
        <AppInput v-model="post.description"> Descr: </AppInput>
        <AppInput v-model="post.img"> Img Link: </AppInput>
        <AppTextArea v-model="post.content"> Content: </AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <div class="btn Danger" @click="cancel"> Cancel </div>
          <AppButton> Save </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      requreid: false
    }
  },
  data () {
    return {
      post: this.postEdit ? {...this.postEdit} : {
        title: '',
        description: '',
        img: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.post)
    },
    cancel () {
	console.log('asdas');
      this.$router.push('/admin/')
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
	text-align: center;
	margin: 20px 0;
	button {
		margin: 0 15px;
	}
}
</style>