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

function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
  }
  


function searchCoin(coinID) {
    const queryURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&ids=${coinID}`;

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // append data to the page
            $("#coin-heading").text(data[0].name);
            $("#coin-price").text(data[0].current_price);
            $("#coin-percent-24h").text(data[0].price_change_percentage_24h);
            $("#coin-all-time-high").text(data[0].ath);
            $("#coin-high-24h").text(data[0].high_24h);
            $("#coin-low-24h").text(data[0].low_24h);
        })
};

//http://api.mediastack.com/v1/news?access_key=a626b109f9191a2796d483deac47f740&categories=business&countries=au,us
function newsCall(coinID) {

    const queryURL = `http://api.mediastack.com/v1/news?access_key=a626b109f9191a2796d483deac47f740&keywords=${coinID}&categories=business&countries=au,us`;

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
           //     console.log(data)
                for(var i = 0; i < 6; i++) {
                    $("#news-title_"+i).text(data.data[i].title);
                    $("#news-author_"+i).text(data.data[i].author);                  
                    $("#news-url_"+i).attr('href', data.data[i].url);
                    $("#news-image_"+i).attr('src', data.data[i].image); 
                    $("#news-country_"+i).text(data.data[i].country);
                    $("#news-description_"+i).text(data.data[i].description);     
                
                
                  }
        })
};



function saveLastSearch(searchHistory){
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
};


// call a default coin on page load
function init() {
    const defaultCoin = "bitcoin";
    newsCall(defaultCoin);
    searchCoin(defaultCoin);
};

$(document).ready(function () {
    init();

    // event listener for search button click
    $("#search-button").on("click", function (event) {
        // stop the form submitting
        event.preventDefault();

        const coinID = $("#coin-name").val();

        saveLastSearch(coinID)
        newsCall(coinID)
        searchCoin(coinID)
    });
})





