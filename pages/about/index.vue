<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">{{ $t('aboutTitle')}}</h1>
        <p>{{ $t('mainDescr.descr')}}</p>
        <Intro :title="$t('aboutPostTitle')"/>
        <div class="page">
        {{ $t(`mainDescr.aboutDescr`) }}
        </div>
      </div>
      <img class="backgraund" src="@/assets/img/about.png" alt="tree">
    </section>
    
  </div>
</template>

<script>
export default {
  transition: {
      name: 'slide-fade'
    },
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
            opacity: 0;
            animation: fadein .5s ease;
            animation-delay: .5s;
            animation-fill-mode: forwards;
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
