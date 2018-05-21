<template>

  <div id="app">
  
     

<nav class="navbar navbar-expand-lg navbar-light nav-top">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
         <router-link class = 'navlink' v-bind:to="'/'"> Home </router-link>
      </li>
      <li class="nav-item">
       <router-link class='navlink' v-bind:to="'/trending'"> Trending </router-link>
      </li>
      <li class="nav-item">
         <router-link class='navlink' v-bind:to="'/favourites'"> Favourite Articles </router-link>
      </li>
    </ul>
   <router-link class='navlink' v-bind:to="'/login'"> Login  </router-link>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    
    
     <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
   


</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.navlink {
  color: white;
  font-size: 120%;
  padding: 0 14px 0 14px;
}
.nav-top {
  background-color: #222233;
}
</style>
