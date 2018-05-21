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
  <div id="to-here"></div>
</div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {

        $(document).on("click", ".submit-comment", function (){
            console.log('ho ho ho, bitch !!')
            let id = $(this).attr('id')
            console.log(id)
        });


  },
  data: {
       id: ''
  },

  methods: {

     getIt: function () {
            jQuery.ajax({
                type: 'GET',
                url: 'http://localhost:8082/scraper',
                dataType: 'json',
                success: function (data) {
                    console.log('I did it !!!')
                    for(var i=0;i<data.length;i++) {
                    console.log(data[i]._id)
                    console.log(data[i].title)
                    console.log(data[i].summary)

                    $("#to-here").append("<div class='card'><div class='card-body'>" +
                    "<h3 class='card-title'>"+ data[i].title + "</h3><p class='card-text'>" +
                    data[i].summary + "</p></div></div>   <input class='form-control mr-sm-2' type='search' placeholder='Comment' aria-label='Comment'>" + 
                    "<button id='"+data[i]._id+"' class='submit-comment btn btn-outline-success my-2 my-sm-0' type='submit'>Comment</button>") 
                   
                    }
                   
                }
            });
        },
        

    

    //  getIt: function () {
    //         jQuery.ajax({
    //             type: 'GET',
    //             url: 'http://localhost:8082/scraper',
    //             dataType: 'json',
    //             success: function (data) {
    //                 console.log('I did it !!!')
    //                 for(var i=0;i<data.length;i++) {
    //                 console.log(data[i]._id)
    //                 console.log(data[i].title)
    //                 console.log(data[i].summary)

    //                 $("#to-here").append("<div class='card'><div class='card-body'>" +
    //                 "<h3 class='card-title'>"+ data[i].title + "</h3><p class='card-text'>" +
    //                 data[i].summary + "</p></div></div>   <input class='form-control mr-sm-2' type='search' placeholder='Comment' aria-label='Comment'>" + 
    //                 "<button class='submit-comment btn btn-outline-success my-2 my-sm-0' type='submit'>Comment</button>") 
                   
    //                 }
                   
    //             }
    //         });
    //     },

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
