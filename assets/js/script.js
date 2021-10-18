$("#search-button").on("click", function (event) {
    event.preventDefault();
    const coinID = $("#coin-name").val();
    newsCall(coinID)
    searchCoin(coinID)
});

function searchCoin(coinID) {
    console.log("searchCoin");
    const queryURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&ids=${coinID}`;

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
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
            // console.log(data);
            processData(data);
            console.log("test")
        })
};

function processData(data) {
    console.log("article information")

    for (var i = 0; i < 5; i++) {
        var author = data.articles[i].author;
        var title = data.articles[i].title;
        var artUrl = data.articles[i].url;

        console.log(author, title, artUrl)
    };
}

