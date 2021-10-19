// element variables
const newContainerEL = $('#news-container')

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
            $("#coin-heading").text(data[0].name);
            $("#coin-price").text(`$ ${data[0].current_price}`);
            $("#coin-price").text(`$ ${data[0].price_change_percentage_24h}`);
            $("#coin-price").text(`$ ${data[0].ath}`);
            $("#coin-price").text(`$ ${data[0].high_24h}`);
            $("#coin-price").text(`$ ${data[0].low_24h}`);
        })
};


function newsCall(coinID) {

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

    for (var i = 0; i < 4; i++) {
        // var author = data.articles[i].author;
        var author = data.articles[i].source.name;
  
        var title = data.articles[i].title;
        var articleUrl = data.articles[i].url;
        var imgUrl = data.articles[i].urlToImage;

        // append goes here
        const tileEL = $('<div class="tile is-parent">');
        const articleEL = $('<article class="tile is-child box">');
        const titleEl = $('<h2 class="subtitle">');
        const authorEl = $('<p class="subtitle">');
        const linkEl = $('<a>');
        const imageEl = $('<img src="" alt="">');


        // display date, description, and icon
        titleEl.text(title)
        authorEl.text(author);
        imageEl.attr('src', imgUrl)
        linkEl.attr('href', articleUrl)
        
        // set link to open in new tab
        linkEl.attr('target', '_blank')

        // put image inside link
        linkEl.append(imageEl)

        // add elements to the page
        articleEL.append(titleEl, authorEl, linkEl);
        tileEL.append(articleEL);
        newContainerEL.append(tileEL);

    };
}
