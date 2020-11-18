<template>
    <newPostForm
    :postEdit="post"
    @submit="onSubmit" />
</template>

<script>
import axios from 'axios'
import newPostForm from '@/components/Admin/NewPostForm.vue'
export default {
    components: { newPostForm },
    layout: 'admin',
    asyncData (contex) {
        console.log(contex);
     return axios.get(`https://blog-app-b278b.firebaseio.com/posts/${contex.params.postid}.json`)
      .then(res => {
          console.log(res)
        return {
            
          post: { ...res.data, id: contex.params.postId }
        }
      })
      .catch(e => {
          console.log('errors');
          console.log(e);
          contex.error(e)})
  },
    methods: {
        onSubmit (post) {
            console.log('Post Editing')
            this.$store.dispatch('editPost', post)
                .then(() => {
                    this.router.push('/admin')
                })
        }
    }
}
</script>