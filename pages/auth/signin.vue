<template>
  <section class="container">
    <div>
      <nuxt-link to="/auth/signup">Not a user? Sign-up</nuxt-link>
    </div>
    <div>
      <form @submit.prevent="submit">
        <label for="usernameTxt">Username:</label>
        <input id="usernameTxt" type="email" v-model="email">
        <label for="passwordTxt">Password:</label>
        <input id="passwordTxt" type="password" v-model="password">
        <button type="submit">Sign In</button>
      </form>
      <button class="button" @click.prevent="fbGoogleLogin">Google Login</button>
      <button class="button" @click.prevent="fbGoogleLogout">Google Logout</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import firebaseApp, {googleProvider} from '~/firebase/app'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  middleware: ['handle-login-route'],
  transition: {
      name: 'slide-fade'
    },
  methods: {
    ...mapActions('modules/user', [ 'login' ]),
    submit () {
      
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password).then((firebaseUser) => {
        
        return this.login(firebaseUser.user.uid)
        
      }).then(() => {
        this.$router.push('/protected')
      }).catch((error) => {
        console.log(error.message)
      })
    },
    async fbGoogleLogin() {
      const { user } = await firebaseApp.auth().signInWithPopup(googleProvider)
      await this.login(user)
      this.$router.push('/protected')
    },
    async fbGoogleLogout() {
      await this.logout()
      this.$router.push('/')
    }
  }
}
</script>


<style scoped>
  form {
    padding: 16px;
  }

  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  /* button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  } */

  button:hover {
    opacity: 0.8;
  }

  .container {
    padding: 16px;
    max-width: 400px;
  }

</style>
