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

//without having the search button, you need to attempt this in the inspect / console. 
//you need to type in searchCoin('bitcoin')         or any other coin you want to look at 
//but when its in the search bar it should work 

function searchCoin(coinName) {
    let requestUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&ids=${coinName}`

    $.ajax({
        url: requestUrl,
        method: 'GET',
    }).then(function(response) {
        console.log('Ajax Reponse \n-------------');
        console.log(response);

        const coinName = $("<h3>");
        const coinPrice = $("<p>");

        coinName.text(response.name);
        coinPrice.text(response.current_price);

        //need to appened here



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