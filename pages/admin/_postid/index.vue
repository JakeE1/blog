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
        // slice because contex.params.id add + in begin of url
     return axios.get(`https://blog-app-b278b.firebaseio.com/posts/${contex.params.postid.slice(1)}.json`)
      .then(res => {
        return {
          post: { ...res.data, id: contex.params.postid }
        }
      })
      .catch(e => contex.error(e))
  },
    methods: {
        onSubmit (post) {
            console.log('Post Editing')
            this.$store.dispatch('editPost', post)
                .then(() => {
                    this.$router.push('/admin')
                })
        }
    }
}
</script>