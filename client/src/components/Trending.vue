<template>
  <div>
   
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
