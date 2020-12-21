<template>

  <div id="app">
    <theatre-app />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import firebaseApp from '~/firebase/app.js'
  import theatreApp from '@/components/booking/theatre-app.vue'

  export default {
    name: 'App',
  components: {
    theatreApp,
  },
    layout: 'protected',
    transition: {
      name: 'slide-fade'
    },
    data () {
      return {
        allusers: []
      }
    },
    computed: {
      ...mapGetters('modules/user', [
        'uid',
        'user'
      ])
    },
    
  }
</script>
