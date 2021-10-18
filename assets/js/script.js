// const apiKey = `https://api.coingecko.com/api/v3/coins/bitcoin`

//parameters 
// [{
// "id": "bitcoin"
// "symbol": "btc",
// "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
// "current_price": 77977,
// "price_change_24h": 2886.48,
// "ath": 84381,
// "market_cap_rank": 1,
// }
// ]



function searchCoin(coinID) {
    let requestUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&ids=${coinID}`

    $.ajax({
        url: requestUrl,
        method: 'GET',
    }).then(function(response) {
        // console.log('Ajax Reponse \n-------------');
        // console.log(response);

        $("#coin-heading").text(response[0].name);
        $("#coin-price").text(`$ ${response[0].current_price}`);
        $("#coin-price").text(`$ ${response[0].price_change_percentage_24h}`);
        $("#coin-price").text(`$ ${response[0].ath}`);
        $("#coin-price").text(`$ ${response[0].high_24h}`);
        $("#coin-price").text(`$ ${response[0].low_24h}`);

        console.log(response)
    })
}

$(document).ready(function() {

    $("#searchbtn").on("click", function(event) {
        event.preventDefault();

        let query = $("#searchquery").val();

        searchCoin(query)
    })
})

//test..