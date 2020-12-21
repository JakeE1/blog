<template>
  <div class="container">
     <Header />
    
    <div>
      <nuxt/>
    </div>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
      <a href='#' @click="signout">Logout</a>
      <button @click="byTicket">BUY</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Header from '~/components/system/Header.vue'
import Button from '~/components/UI/Controls/Button.vue'

  export default {
    components: {
    Header
  },
   
   middleware: 'authenticated',
    methods: {
      ...mapActions('modules/user', [ 'logout' ]),
      async signout () {
        await this.logout()
        this.$router.push('/')

        // this.logout().then(() => {
        //   this.$router.push('/')
        // }).catch((error) => {
        //   console.log(error.message)
        // })
      },
      byTicket () {
        alert('Билеты заказаны');
      }
    }
  }
</script>

<style scoped>
p {
  cursor: pointer;
}
 
  a {
    padding: 5px;
  }
</style>
