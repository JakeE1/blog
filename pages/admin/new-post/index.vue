<template>
    <NewPostForm @submit="onSubmit" />
</template>

<script>
import NewPostForm from '@/components/Admin/NewPostForm.vue'
export default {
    components: { NewPostForm },
    layout: 'admin',
    methods: {
        onSubmit (post) {
            console.log('admin added post')
            console.log(post)
        }
    }
}
</script>