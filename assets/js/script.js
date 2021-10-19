
document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any nav burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
  
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

$("#search-button").on("click", function (event) {
    // stop the form submitting
    event.preventDefault();

    const coinID = $("#coin-name").val();

    newsCall(coinID)
    searchCoin(coinID)
});

function searchCoin(coinID) {
    const queryURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&ids=${coinID}`;

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // append data to the page
            $("#coin-heading").text(data[0].name);
            $("#coin-price").text(`$ ${data[0].current_price}`);
        })
};


function newsCall(coinID) {
    console.log("newsCoin");
    const queryURL = `https://newsapi.org/v2/top-headlines?q=${coinID}&language=en&category=business&apiKey=822c6daf68da47f2aa999e05473aa7bb`;

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // process the data before appending
            processData(data);
        })
};

function processData(data) {

    for (var i = 0; i < 5; i++) {
        var author = data.articles[i].author;
        var title = data.articles[i].title;
        var artUrl = data.articles[i].url;
        // append goes here
    };
}
