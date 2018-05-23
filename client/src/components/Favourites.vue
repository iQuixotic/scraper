<template>
<div>

<div class="jumbotron ">
  <div class="container ">
    <h1 id="fav-header" class="display-4 justify-content-center off-cent">Favourites</h1>
    <p class="lead"></p>
  </div>
</div>
<button type="button" id="mybutton" class="the-things btn btn-danger">ALL THE FAVORITES</button>

<div id="favs"></div>

</div>
</template>

<script>
export default {
  name: 'Favourites',
  mounted () {

       let favDATA = []

        $(document).ready(function (){

         

          $.ajax({
                type: 'GET',
                url: 'http://localhost:8082/show/comments',
           
                success: function (commentsData) {
                  favDATA.push(commentsData)
                  console.log(commentsData)
                       console.log('I have the commetns righcere !!!')
                }
          });

            
            $.ajax({
                type: 'GET',
                url: 'http://localhost:8082/show/my-favs',
           
                success: function (artData) {
                  favDATA.push(artData);
                  console.log(favDATA)
                    
                    }                                                        
                })
          
          $('#mybutton').click(function() {
             console.log('yay')
             keepOn(i);
          })
             
                  console.log(favDATA)
                  let arr = [0]
                  let i=0;
                  let j=0;
                  

                  function keepOn(){
            
                    // favDATA[1] is Articles  where favoritedd    favDATA[2] is Comments
                  if(arr[0]<favDATA[1].length) {
                  console.log(arr)

                      // for each result, I will print out a styled card
                    $("#favs").append(`<div class='container'><div class='col-md-9'><div class='card'><div class='card-body'>
                    <h3 class='card-title'>${favDATA[1][i].title}</h3><p class='card-text'>
                    ${favDATA[1][i].summary}</p></div></div>   <div id='comments-here${favDATA[1][i]._id}'></div>`)
                    i++;
                    arr.push(i);
                    ifBlock();
                  }  

                  function ifBlock(){
                  if(arr[i]<favDATA[1].length){
                     keepOn();  
                     } else{
                        i=0;
                        j=0;
                       checkAgainBatman();  
                       return console.log("I've done all i could")
                     }                   
                  }  

                  // the most beautiful function in the world 
                      function checkAgainBatman() {

                        //compares the id's at current index of each
                       if(Object.is(favDATA[0][j].ArticleID, favDATA[1][i]._id)){
                           console.log("i'm doing it !!");
                           console.log('j'+j);
                           console.log('i:'+i);
                           $(`#comments-here${favDATA[1][i]._id}`).append(`<div><h3>${favDATA[0][j].Comment}</h3></div> `);
                           j++;
                           console.log(favDATA[0][j].ArticleID !== favDATA[1][i]._id)
                           console.log(i < favDATA[1].length)
                           checkAgainBatman();                           
                      }

                      // if favoriteList array isn't at the end of its index, go to
                      // the next index and compare the comment id's there
                      else if(favDATA[0][j].ArticleID !== favDATA[1][i]._id && i < favDATA[1].length){
                        console.log('nothing yet...')
                        console.log('j'+j);
                        console.log('i:'+i);
                        i++;
                        checkAgainBatman();

                       // once all of favoriteList's array has been compared, increment
                       // the comments array by 1 and loop back 
                      } else if (favDATA[0][j].ArticleID !== favDATA[1][i]._id && favDATA[1][i]._id >= favDATA[1].length){
                        console.log('j'+j);
                        console.log('i:'+i);
                        j++;
                        checkAgainBatman();

                        // when nothing is left to be compared, return 0
                      } else{ console.log('weeeelllllll......'); return 0;}
                  }


          }
                   
     })
          
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
