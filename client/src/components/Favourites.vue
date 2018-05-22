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
  mounted () {

        $(document).ready(function (){
            
            $.ajax({
                type: 'GET',
                data: data,
                url: 'http://localhost:8082/giveMeFavorites',
           
                success: function (data) {
                  console.log(data)
                    console.log('I did it oops again !!!')  
                       console.log('I did it !!!')
                    // for(var i=0;i<data.length;i++) {

                    //   // for each result, I will print out a styled card
                    // $("#to-here").append("<div class='container'><div class='col-md-9'<div class='card'><div class='card-body'>" +
                    // "<h3 class='card-title'>"+ data[i].title + "</h3><p class='card-text'>" +
                    // data[i].summary + "</p></div></div>   <input id='comment-bar"+data[i]._id+"' class=' form-control mr-sm-2' type='search' placeholder='Comment' aria-label='Comment'>" + 
                    // "<button id='"+data[i]._id+"' class='padding submit-comment' type='submit'>Comment</button>"+
                    // "<button id='"+data[i]._id+"' class='padding save save-fav' type='submit'>Save</button></div></div>") 
                    // }                                                        
                }
            });   
        
          }); 
  },
  data: {

  },

  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.padding {
  padding: 15px;
  margin: 15px;
}
.save, .submit-comment, .the-things {
  color: white;
  background-color:#222233; 
  font-size: 1.4em;
  border-radius: 12px;
}
.save {
    margin-left: 500px;
}
.submit-comment {
  margin-left: 200px;
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
