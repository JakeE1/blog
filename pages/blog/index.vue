<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My post: " /> 
    <PostsList :posts="posts" /> 
  </div>
</template>

<script>

export default { 
  data () {
    return { 
      posts: [
        {
          id: 1,
          title: 'First post',
          description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.',
          img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_baXcxAQ6wyvwsmWjCC5vzSVckHgSBI3MrMQ71V4u6i8RHYOS'  
        },
        {
          id: 2,
          title: 'Second post',
          description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.',
          img: 'https://miro.medium.com/max/2218/1*sB6x_yg-aYlGUAHs5T14mg.jpeg'  
        },
        {
          id: 3,
          title: 'Third post',
          description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9isT-LivWoETsBQK1A2VkV9-HVzTi1LqO9RY-CYYAdUiRot74'  
        }
      ]
    }
  }
}
</script>

<style>
</style>
