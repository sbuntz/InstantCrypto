


    
    $("#searchbtn").on("click",function(event){
        event.preventDefault();
      
      let query = $("#searchquery").val();
      let requestUrl = " https://newsapi.org/v2/top-headlines?q="+query+"&category=business&apiKey=822c6daf68da47f2aa999e05473aa7bb";
      
      $.ajax({
        url: requestUrl,
        method: 'GET',

        error: function(response) {
          console.log('Ajax Reponse \n-------------');
        console.log(response);
        },
        success: function(data) {
          processData(data);
        }
      })
    });


      function processData(data) {
        var articleItems = [];
      
        for (var i = 0; i < 5; i++) {
          var author = data.articles[i].author;
          var title = data.articles[i].title;
          var description = data.articles[i].description;
          var artUrl = data.articles[i].url;
      
;

        }
      }
      