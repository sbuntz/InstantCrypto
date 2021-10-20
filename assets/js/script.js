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
    }

});



function searchCoin(coinID) {
    const queryURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&ids=${coinID}`;

    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
                // append data to the page
            $("#coin-heading").text(data[0].name);
            $("#coin-price").text(data[0].current_price);
            $("#coin-percent-24h").text(data[0].price_change_percentage_24h);
            $("#coin-all-time-high").text(data[0].ath);
            $("#coin-high-24h").text(data[0].high_24h);
            $("#coin-low-24h").text(data[0].low_24h);
        })
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
        .then(function(data) {
            // process the data before appending
            processData(data);

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
}

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

//hard code autocomplete//
$("#coin-name").autocomplete({
    source: ["Bitcoin", "bitcoin", "BTC", "Ethereum", "ethereum ", "ETH", "Binance Coin", "binancecoin ", "BNB", "Tether", "tether", "USDT", "Cardano", "cardano", "ADA", "XRP", "ripple", "XRP", "Solana", "solana", "SOL", "Polkadot", "polkadot", "DOT", "Dogecoin", "dogecoin", "DOGE", "USD Coin", "usd-coin", "USDC",
        "Terra", "terra-luna", "LUNA", "Wrapped Bitcoin", "wrapped-bitcoin", "WBTC", "Shiba Inu", "shiba-inu", "SHIB", "Uniswap", "uniswap", "UNI", "Binance USD", "binance-usd", "BUSD", "Litcoin", "litecoin", "LTC", "Avalanche", "avalanche-2", "AVAX", "Chainlink", "chainlink", "LINK", "Bitcoin Cash", "bitcoin-cash", "BCH", "Algorand", "algorand", "ALGO",
        "Polygon", "matic-network", "MATIC", "Cosmos", "cosmos", "ATOM", "Stellar", "stellar", "XLM", "VeChain", "vechain", "VET", "Internet Computer", "internet-computer", "ICP", "Axie Infinity", "axie-infinity", "AXS", "Filecoin", "filecoin", "FIL", "Tron", "tron", "TRX", "Dai", "dai", "DAI", "Ethereum Classic", "ethereum-classic", "ETC",
        "FTX Token", "ftx-token", "FTT", "cETH", "compound-ether", "CETH", "Fantom", "fantom", "FTM", "Theta Network", "theta-token", "THETA", "Tezos", "tezos", "XTZ", "Headra", "headra-hashgraph", "HBAR", "Lido Staked Ether", "staked-ether", "STETH", "OKB", "okb", "OKB", "Crypto.com Coin", "crypto-com-chain", "CRO", "PancakeSwap", "pancakeswap-token", "CAKE",
        "Monero", "monero", "XMR", "Elrond", "elron-erd-2", "EGLD", "EOS", "eos", "EOS", "Near", "near", "NEAR", "Flow", "flow", "FLOW", "Klaytn", "klay-token", "KLAY", "cDAI", "cdai", "CDAI", "Aave", "aave", "AAVE", "The Graph", "the-graph", "GRT", "Quant", "quant-network", "QNT",
        "cUSDC", "compund-usd-coin", "CUSDC", "eCash", "ecash", "XEC", "IOTA", "iota", "MIOTA", "Kusama", "kusama", "KSM", "Bitcoin SV", "bitcoin-cash-sv", "BSV", "Bitcoin Cash ABC", "bitcoin-cash-abc-2", "BCHA", "NEO", "neo", "NEO", "Waves", "waves", "WAVES", "Leo Token", "leo-token", "LEO", "Arweave", "arweave", "AR",
        "TerraUSD", "terrausd", "UST", "Huobi BTC", "huobi-btc", "HBTC", "Olympus", "olymous", "OHM", "Harmony", "harmony", "ONE", "Stacks", "blockstack", "STX", "BitTorrent", "bittorrent-2", "BTT", "Amp", "amp-token", "AMP", "Maker", "maker", "MKR", "Celsius Network", "celsius-degree-token", "CEL", "Helium", "helium", "HNT",
        "Sushi", "sushi", "SUSHI", "Dash", "dash", "DASH", "Celo", "celo", "CELO", "OMG Network", "omisego", "OMG", "THORChain", "thorchain", "RUNE", "Compund", "compound-governance-token", "COMP", "Magic Internet Money", "magic-internet-money", "MIM", "Chiliz", "chiliz", "CHZ", "Zcash", "zcash", "ZEC", "Decred", "decred", "DCR",
        "Synthetix Network Token", "havven", "SNX", "Holo", "holotoken", "HOT", "Theta Fuel", "theta-fuel", "TFUEL", "NEM", "nem", "XEM", "ECOMI", "ecomi", "OMI", "Enjin Coin", "enjincoin", "ENJ", "ICON", "icon", "ICX", "XDC Network", "xdce-crowd-sale", "XDC", "TrueUSD", "true-usd", "TUSD", "Qtum", "qtum", "QTUM",
        "Huobi Token", "huobi-token", "HT", "yearn.finance", "yearn-finance", "YFI", "Bitcoin Gold", "bitcoin-gold", "BTG", "Zilliqa", "zilliqa", "ZIL", "IOST", "iostoken", "IOST", "SafeMoon", "safemoon", "SAFEMOON", "Curve DAO Token", "curve-dao-token", "CRV", "Spell Token", "spell-token", "SPELL", "KuCoin Token", "kucoin-shares", "KCS", "Telcoin", "telcoin", "TEL"
    ]
});


$(document).ready(function() {
    init();

    // event listener for search button click
    $("#search-button").on("click", function(event) {
        // stop the form submitting
        event.preventDefault();

        const coinID = $("#coin-name").val();

        saveLastSearch(coinID)
        newsCall(coinID)
        searchCoin(coinID)
    });
})