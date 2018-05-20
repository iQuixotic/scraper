<template>
<div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Home</h1>
      <p class="lead"></p>
    </div>
  </div>

    <div class='d-flex justify-content-center'>
      <button @click="getIt()" type="button" class="btn btn-danger">Danger</button>

  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data: {
   
  },
  methods: {

     getIt: function () {
          console.log('hello');
            jQuery.ajax({
              // console.log('fuuuuuck'),
                type: 'GET',
                url: 'http://localhost:8082/scraper',
                // data: data,
                dataType: 'json',
                success: function (data) {
                    console.log('I did it !!!')
                    console.log(data)
                }
            });
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sta {

}
h1, h2 {
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
