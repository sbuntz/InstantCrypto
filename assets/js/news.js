

// // $("#search-button").on("click", function (event) {
// //   event.preventDefault();

// //   let query = $("#coin-name").val();
// //   let requestUrl = " https://newsapi.org/v2/top-headlines?q=" + query + "&category=business&apiKey=822c6daf68da47f2aa999e05473aa7bb";
// //   $.ajax({
// //     url: requestUrl,
// //     method: 'GET',
// //     dataType: "json",
// //   }).then(function (response) {
// //     console.log('Ajax Reponse \n-------------');
// //     console.log(response);
// //     processData(data);
// //     console.log("test")
// //   })
// // });

// $("#search-button").on("click", newsCall);

// function newsCall() {
//   const query = $("#coin-name").val();
//   const queryURL = `https://newsapi.org/v2/top-headlines?q=${query}&category=business&apiKey=822c6daf68da47f2aa999e05473aa7bb`;

//   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       processData(data);
//       console.log("test")
//     })
// };


// function processData(data) {
//   console.log("article information")

//   for (var i = 0; i < 5; i++) {
//     var author = data.articles[i].author;
//     var title = data.articles[i].title;
//     var artUrl = data.articles[i].url;

//     console.log(author, title, artUrl)
//   };
// }
