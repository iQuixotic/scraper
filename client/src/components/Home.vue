<template>
<div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Home</h1>
      <p class="lead"></p>
    </div>
  </div>

    <div class='d-flex justify-content-center'>
      <button @click="getIt()" type="button" class="btn btn-danger">ALL THE THINGS PLEASE</button>

  </div>
  <div id="to-here"></div>
</div>
</template>


<script>
export default {
  name: 'Home',
  mounted () {

        $(document).on("click", ".submit-comment", function (){
            let id = $(this).attr('id')
            let comment = $('#comment-bar'+id).val();
            
      //  console.log('i am trying to work')
            
      //       console.log(id);
      //       console.log(comment);
            let data = {
              Comment: comment,
              ArticleID: id
            }
            console.log(data);

            $.ajax({
                type: 'POST',
                data: data,
                url: 'http://localhost:8082/show/json-update',
                dataType: 'json',
                success: function (data) {
                  console.log(data)
                    console.log('I did it !!!')
                                                           
                }
            });
        
          });


        // $(document).on("keyup", ".submit-comment", function (){
        //   if(comment == headline)
        //     console.log(id)
        // });


  },
  data: {
       id: '',
       comment: '',
      //  headline: ''
  },

  methods: {

     getIt: function () {
            jQuery.ajax({
                type: 'GET',
                url: 'http://localhost:8082/show/json-of-scraped',
                dataType: 'json',
                success: function (data) {
                    console.log('I did it !!!')
                    for(var i=0;i<data.length;i++) {

                    $("#to-here").append("<div class='card'><div class='card-body'>" +
                    "<h3 class='card-title'>"+ data[i].title + "</h3><p class='card-text'>" +
                    data[i].summary + "</p></div></div>   <input id='comment-bar"+data[i]._id+"' class=' form-control mr-sm-2' type='search' placeholder='Comment' aria-label='Comment'>" + 
                    "<button id='"+data[i]._id+"' class='submit-comment btn btn-outline-success my-2 my-sm-0' type='submit'>Comment</button>") 
                    }
                }
            });
        },
          
      // commentAdd: function (id) {
      //  console.log('i am trying to work')
            
      //       console.log(id);
      //       console.log($('#comment-bar'+id).val())

      //       jQuery.ajax({
      //           type: 'POST',
      //           data: $('#comment-bar'+id).val(),
      //           url: 'http://localhost:8082/show/json-update',
      //           dataType: 'json',
      //           success: function (data) {
      //               console.log('I did it !!!')
                                                           
      //           }
      //       });
      //   }
     






  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
