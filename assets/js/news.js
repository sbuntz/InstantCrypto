

$(document).ready(function(){
    
    $("#searchbtn").on("click",function(event){
        event.preventDefault();
      
      let query = $("#searchquery").val();
      let requestUrl = " https://newsapi.org/v2/top-headlines?q="+query+"&&category=business&apiKey=822c6daf68da47f2aa999e05473aa7bb";
      
      $.ajax({
        url: requestUrl,
        method: 'GET',
      }).then(function (response) {
        console.log('Ajax Reponse \n-------------');
        console.log(response);
      })})})
      
      
      
      

