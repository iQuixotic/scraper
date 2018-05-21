<template>

<div class="jumbotron ">
  <div class="container ">
    <h1 id="fav-header" class="display-4 justify-content-center off-cent">Favourites</h1>
    <p class="lead"></p>
  </div>
</div>

</template>

<script>
export default {
  name: 'Favourites',
  data () {
    return {
     
    }
  }, 
  methods: {

  //   getIt: function () {
  //           jQuery.ajax({
  //               type: 'GET',
  //               url: 'http://localhost:8082/show/json-of-scraped',
  //               dataType: 'json',
  //               success: function (data) {
  //                   console.log('I did it !!!')
  //                   for(var i=0;i<data.length;i++) {

  //                     // for each result, I will print out a styled card
  //                   $("#to-here").append("<div class='container'><div class='col-md-9'<div class='card'><div class='card-body'>" +
  //                   "<h3 class='card-title'>"+ data[i].title + "</h3><p class='card-text'>" +
  //                   data[i].summary + "</p></div></div>   <input id='comment-bar"+data[i]._id+"' class=' form-control mr-sm-2' type='search' placeholder='Comment' aria-label='Comment'>" + 
  //                   "<button id='"+data[i]._id+"' class='padding submit-comment' type='submit'>Comment</button>"+
  //                   "<button id='fav"+data[i]._id+"' class='padding save' type='submit'>Save</button></div></div>") 
    
  //                }
  //           }
  //       });
  //     }
    }
  }
  
</script>


<style scoped>
.cent {
  text-align: center;
}
.off-cent {
  text-align: center;
  padding-right: 400px;
}
#fav-header {
  font-size: 5.0em;
  font-weight: bold;
}
</style>
