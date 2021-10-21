// element variables
const newContainerEL = $('#news-container')

document.addEventListener('DOMContentLoaded', function() {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any nav burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener('click', function() {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    };
});


function searchCoin(coinID) {
    const queryURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&ids=${coinID}`;

    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            // make sure there is data from the API
            if (!data[0]) {
                // if there was no data returned from the API call
                // search coin.js for coin with name == 'coinID'
                coins.map(function(coin) {
                    // if there is a coin with that name
                    if (coin.name.toLowerCase() == coinID.toLowerCase()) {
                        // call the API function again, this time with the ID
                        return searchCoin(coin.id)
                    };
                });
            } else {
                // append data to the page
                $("#coin-heading").text(data[0].name);
                $("#coin-price").text("$"+data[0].current_price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#coin-price_2").text("AUD"+data[0].current_price.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1'));
                $("#coin-percent-24h").text(data[0].price_change_percentage_24h.toFixed(2)+"%");
                $("#coin-all-time-high").text("$"+data[0].ath.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#coin-high-24h").text("$"+data[0].high_24h.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#coin-low-24h").text("$"+data[0].low_24h.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
                $("#coin-image").attr('src', data[0].image); 
                    
                percentChange(data[0].price_change_percentage_24h);
            };
        });
};


//create function to change 24 hour tile color
function percentChange(priceChange) {

    $('#percent-color').removeClass('increase');
    $('#percent-color').removeClass('decrease');

    if (priceChange > 0) {
        $('#percent-color').addClass('increase');
    }

    if (priceChange < 0) {
        $('#percent-color').addClass('decrease');
    }


}

percentChange();

//create function for autocomplete:

function cryptoName(coinID) {
    let findName = crypto.find((currencyName) => {
        if (currencyName.id === coinID || currencyName.name === coinID) {
            return true
        }
        return false
    })
    console.log()
    return findName;
}

//http://api.mediastack.com/v1/news?access_key=a626b109f9191a2796d483deac47f740&categories=business&countries=au,us
function newsCall(coinID) {
    const queryURL = `http://api.mediastack.com/v1/news?access_key=77120c571d11ab921b880ec13a9fc2c6&keywords=${coinID}&categories=business&countries=au,us`;

    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // log the total number of search results
            //console.log(data)

            // if there are no news articles, 
            if (!data.data[0]) {
                // exit with console.log
                return console.log("no news")
            } else {
                // process the data for appending
                for (var i = 0; i < 6; i++) {
                    $("#news-title_" + i).text(data.data[i].title);
                    $("#news-author_" + i).text(data.data[i].author);
                    $("#news-url_" + i).attr('href', data.data[i].url);
                    $("#news-image_" + i).attr('src', data.data[i].image);
                    $("#news-country_" + i).text(data.data[i].country);
                    $("#news-description_" + i).text(data.data[i].description);

                }
            };

        });
};


function saveLastSearch(searchHistory) {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
};


// initialise function
function init() {
    // set a default coin on page load
    let defaultCoin = "bitcoin";

    // get any stored scores
    const storedSearchHistory = JSON.parse(localStorage.getItem("searchHistory"));

    // if there are stored values, save them to the variable
    if (storedSearchHistory !== null) {
        defaultCoin = storedSearchHistory
    };

    // make the API calls
    newsCall(defaultCoin);
    searchCoin(defaultCoin);
};

// search bar autocomplete function
$("#coin-name").autocomplete({
    source: topCoins.map(function(coin) {
        // display the coin name and symbol, but return the coin ID
        return { label: `${coin.name} (${coin.symbol})`, value: coin.id }
    })
});



$(document).ready(function() {
    init();

    // event listener for search button click
    $("#search-button").on("click", function(event) {
        // stop the form submitting
        event.preventDefault();

        const coinID = $("#coin-name").val().toLowerCase();

        saveLastSearch(coinID)
        newsCall(coinID)
        searchCoin(coinID)

        // clear input field
        $("#coin-name").val("")
    });

});