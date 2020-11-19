<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my tech blog:</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <Intro title="Lorem ipsum dolor sit amet"/>
        <div class="page">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
      </div>
      <img class="backgraund" src="@/assets/img/about.png" alt="tree">
    </section>
    
  </div>
</template>

<script>
export default {
   //SEO
  head () {
    let title = 'About My SSR Blog',
        descr = 'About My SSR Blog! With Nuxt.js',
        type = 'site'
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title},
        { hid: 'description', name: 'decription', content: descr},
        { hid: 'og:decription', name: 'og:decription', content: descr},
        { hid: 'og:type', name: 'og:type', content: type},
      ]
    }
  },
}
</script>

<style lang="scss">
.about {
    text-align: center;
    p {
        margin-bottom: 10px;
    }
    .container {
        z-index: 1;
        h1 {
            color: #fff;
        }
        >p:nth-child(2) {
            color: #fff;
        }
        .page{
            background: #ea9598;
        }
    }
}
.backgraund {
    width: 100%;
    position: absolute;
    top: -20px;
    left: 0;
    z-index: -1;
}
/* firefox */
</style>
