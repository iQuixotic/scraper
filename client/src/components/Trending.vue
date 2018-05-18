<template>
  <div>
    <h1>Trending</h1>
  <input id="yes"
  type="email"
  name="email"

  placeholder="email">
  <br>
  <input 
  type="password"
  name="password"
  v-modal="password"
  placeholder="password">
  <br>
  <button @click="register" >Register</button>
  <div>
<input v-model="yes">
  </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  name: 'Trending',
  data () {
    return {
      email: '',
      password: ''  
    }
  }, 
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
}


</script>


<style scoped>

</style>
