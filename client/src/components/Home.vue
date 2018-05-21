<template>

<div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Home</h1>
      <p class="lead"></p>
    </div>
  </div>

    <div class='d-flex justify-content-center'>
      <button @click="getIt()" type="button" class="the-things btn btn-danger">ALL THE THINGS PLEASE</button>

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
            
            // something to hold data object
            const sasquatch = {
              Comment: comment,
              ArticleID: id
            }           

          
           ajaxPost(sasquatch);

         

            function ajaxPost(sasquatch) {
            $.ajax({
                type: 'POST',
                data: sasquatch,
                url: 'http://localhost:8082/show/json-update',
           
                success: function (sasquatch) {
                  console.log(sasquatch)
                    console.log('I did it !!!')                                                           
                }
            });   
        
          };

});
        // $(document).on("keyup", ".submit-comment", function (){
        //   if(comment == headline)
        //     console.log(id)
        // });

  },
  data: {
      //  id: '',
      //  comment: '',
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

                      // for each result, I will print out a styled card
                    $("#to-here").append("<div class='container'><div class='col-md-9'<div class='card'><div class='card-body'>" +
                    "<h3 class='card-title'>"+ data[i].title + "</h3><p class='card-text'>" +
                    data[i].summary + "</p></div></div>   <input id='comment-bar"+data[i]._id+"' class=' form-control mr-sm-2' type='search' placeholder='Comment' aria-label='Comment'>" + 
                    "<button id='"+data[i]._id+"' class='padding submit-comment' type='submit'>Comment</button>"+
                    "<button id='fav"+data[i]._id+"' class='padding save' type='submit'>Save</button></div></div>") 
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
