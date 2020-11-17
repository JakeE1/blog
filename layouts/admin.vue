<template>
  <div class="wrapper">
    <Header />
    <!-- content -->
    <div class="wrapper-content wrapper-content--fixed">
    <Intro title="Admin Page">
        <NuxtLink to="/admin" class="link linkWhite"> Admin </NuxtLink>
        <NuxtLink to="/admin/new-post" class="link linkWhite"> New Post </NuxtLink>
        <NuxtLink to="/admin/comments" class="link linkWhite"> Comments </NuxtLink>
    </Intro>
    <Nuxt />
  </div>
  </div>
</template>

<script>
import Header from '~/components/system/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
