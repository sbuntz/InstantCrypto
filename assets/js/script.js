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


//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=aud    gives you the price of Bitcoin 
//not going to work yet as we dont have a search Button done 
// let crpyto = '';
// let searchButton = $('#searchButton');
// searchButton.on('click', function() {
//     crypto = $('#newCrypto').val().toLowerCase();
//     getData(crypto)
// })


// $(document).ready(function(){
//        $("#searchbtn").on("click",function(event){
//         event.preventDefault();
//         let query = $('#searchquery').val();
//         let requestUrl = `https://api.coingecko.com/api/v3/simple/price?ids="+quer"&vs_currencies=aud`

// })

//////////
$(document).ready(function() {

    $("#searchbtn").on("click", function(event) {
        event.preventDefault();

        let query = $("#searchquery").val();
        let requestUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${query}&vs_currencies=aud`

        $.ajax({
            url: requestUrl,
            method: 'GET',
        }).then(function(response) {
            console.log('Ajax Reponse \n-------------');
            console.log(response);
        })
    })
})