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
        .then(function (data) {

            // make sure there is data from the API
            if (!data[0]) {
                // if there was no data returned from the API call
                // search coin.js for coin with name == 'coinID'
                coins.map(function (coin) {
                    // if there is a coin with that name
                    if (coin.name.toLowerCase() == coinID.toLowerCase()) {
                        // call the API function again, this time with the ID
                        return searchCoin(coin.id)
                    };
                });
            } else {
                // append data to the page
                $("#coin-heading").text(data[0].name);
                $("#coin-price").text(data[0].current_price);
                $("#coin-percent-24h").text(data[0].price_change_percentage_24h);
                $("#coin-all-time-high").text(data[0].ath);
                $("#coin-high-24h").text(data[0].high_24h);
                $("#coin-low-24h").text(data[0].low_24h);
            };
        });
};


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

function newsCall(coinID) {
    const queryURL = `https://newsapi.org/v2/top-headlines?q=${coinID}&language=en&category=business&apiKey=822c6daf68da47f2aa999e05473aa7bb`;

    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            // log the total number of search results
            console.log(data.totalResults)

            // if there are no news articles, 
            if (data.articles.length === 0) {
                // exit with console.log
                return console.log("no news")
            } else {
                // process the data for appending
                processData(data);
            };
        })
};

function processData(data) {

    // clear previous news articles
    $('#news-container').empty()

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

// $("#coin-name").autocomplete({
//     source: coins.map(function(coin) {
//         return { label: `${coin.name} (${coin.symbol})`, value: coin.id }
//     })
// });

// $("#coin-name").autocomplete({
//     source: coins.map(function(coin) {
//         return { label: `${coin.name}`, value: coin.id }
//     })
// });


//hard code autocomplete//
$("#coin-name").autocomplete({
    source: topCoins
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
    });

});
