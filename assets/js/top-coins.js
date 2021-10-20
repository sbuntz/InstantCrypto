const topCoins = [
    {
        "id": "bitcoin",
        "symbol": "BTC",
        "name": "Bitcoin"
    },
    {
        "id": "ethereum",
        "symbol": "ETH",
        "name": "Ethereum"
    },
    {
        "id": "binancecoin",
        "symbol": "BNB",
        "name": "Binance Coin"
    },
    {
        "id": "tether",
        "symbol": "USDT",
        "name": "Tether"
    },
    {
        "id": "cardano",
        "symbol": "ADA",
        "name": "Cardano"
    },
    {
        "id": "ripple",
        "symbol": "XRP",
        "name": "XRP"
    },
    {
        "id": "solana",
        "symbol": "SOL",
        "name": "Solana"
    },
    {
        "id": "polkadot",
        "symbol": "DOT",
        "name": "Polkadot"
    },
    {
        "id": "dogecoin",
        "symbol": "DOGE",
        "name": "Dogecoin"
    },
    {
        "id": "usd-coin",
        "symbol": "USDC",
        "name": "USD Coin"
    },
    {
        "id": "terra-luna",
        "symbol": "LUNA",
        "name": "Terra"
    },
    {
        "id": "wrapped-bitcoin",
        "symbol": "WBTC",
        "name": "Wrapped Bitcoin"
    },
    {
        "id": "shiba-inu",
        "symbol": "SHIB",
        "name": "Shiba Inu"
    },
    {
        "id": "uniswap",
        "symbol": "UNI",
        "name": "Uniswap"
    },
    {
        "id": "binance-usd",
        "symbol": "BUSD",
        "name": "Binance USD"
    },
    {
        "id": "litecoin",
        "symbol": "LTC",
        "name": "Litcoin"
    },
    {
        "id": "avalanche-2",
        "symbol": "AVAX",
        "name": "Avalanche"
    },
    {
        "id": "chainlink",
        "symbol": "LINK",
        "name": "Chainlink"
    },
    {
        "id": "bitcoin-cash",
        "symbol": "BCH",
        "name": "Bitcoin Cash"
    },
    {
        "id": "algorand",
        "symbol": "ALGO",
        "name": "Algorand"
    },
    {
        "id": "matic-network",
        "symbol": "MATIC",
        "name": "Polygon"
    },
    {
        "id": "cosmos",
        "symbol": "ATOM",
        "name": "Cosmos"
    },
    {
        "id": "stellar",
        "symbol": "XLM",
        "name": "Stellar "
    },
    {
        "id": "vechain",
        "symbol": "VET",
        "name": "VeChain"
    },
    {
        "id": "internet-computer",
        "symbol": "ICP",
        "name": "Internet Computer"
    },
    {
        "id": "axie-infinity",
        "symbol": "AXS",
        "name": "Axie Infinity"
    },
    {
        "id": "filecoin",
        "symbol": "FIL",
        "name": "Filecoin"
    },
    {
        "id": "tron",
        "symbol": "TRX",
        "name": "Tron"
    },
    {
        "id": "dai",
        "symbol": "DAI",
        "name": "Dai"
    },
    {
        "id": "ethereum-classic",
        "symbol": "ETC",
        "name": "Ethereum Classic "
    },
    {
        "id": "ftx-token",
        "symbol": "FTT",
        "name": "FTX Token"
    },
    {
        "id": "compound-ether",
        "symbol": "CETH",
        "name": "cETH"
    },
    {
        "id": "fantom",
        "symbol": "FTM",
        "name": "Fantom"
    },
    {
        "id": "theta-token",
        "symbol": "THETA",
        "name": "Theta Network"
    },
    {
        "id": "tezos",
        "symbol": "XTZ",
        "name": "Tezos"
    },
    {
        "id": "headra-hashgraph",
        "symbol": "HBAR",
        "name": "Headra"
    },
    {
        "id": "staked-ether",
        "symbol": "STETH",
        "name": "Lido Staked Ether"
    },
    {
        "id": "okb",
        "symbol": "OKB",
        "name": "OKB"
    },
    {
        "id": "crypto-com-chain",
        "symbol": "CRO",
        "name": "Crypto.com Coin"
    },
    {
        "id": "pancakeswap-token",
        "symbol": "CAKE",
        "name": "PancakeSwap "
    },
    {
        "id": "monero",
        "symbol": "XMR",
        "name": "Monero"
    },
    {
        "id": "elron-erd-2",
        "symbol": "EGLD",
        "name": "Elrond"
    },
    {
        "id": "eos",
        "symbol": "EOS",
        "name": "EOS "
    },
    {
        "id": "near",
        "symbol": "NEAR",
        "name": "Near"
    },
    {
        "id": "flow",
        "symbol": "FLOW",
        "name": "Flow"
    },
    {
        "id": "klay-token",
        "symbol": "KLAY",
        "name": "Klaytn"
    },
    {
        "id": "cdai",
        "symbol": "CDAI",
        "name": "cDAI"
    },
    {
        "id": "aave",
        "symbol": "AAVE",
        "name": "Aave"
    },
    {
        "id": "the-graph",
        "symbol": "GRT",
        "name": "The Graph"
    },
    {
        "id": "quant-network",
        "symbol": "QNT",
        "name": " Quant"
    },
    {
        "id": "compund-usd-coin",
        "symbol": "CUSDC",
        "name": "cUSDC"
    },
    {
        "id": "ecash",
        "symbol": "XEC",
        "name": "eCash"
    },
    {
        "id": "iota",
        "symbol": "MIOTA",
        "name": "IOTA "
    },
    {
        "id": "kusama",
        "symbol": "KSM",
        "name": "Kusama"
    },
    {
        "id": "bitcoin-cash-sv",
        "symbol": "BSV",
        "name": "Bitcoin SV"
    },
    {
        "id": "bitcoin-cash-abc-2",
        "symbol": "BCHA",
        "name": "Bitcoin Cash ABC"
    },
    {
        "id": "neo",
        "symbol": "NEO",
        "name": "NEO"
    },
    {
        "id": "waves",
        "symbol": "WAVES",
        "name": "Waves"
    },
    {
        "id": "leo-token",
        "symbol": "LEO",
        "name": "Leo Token"
    },
    {
        "id": "arweave",
        "symbol": "AR",
        "name": "Arweave "
    },
    {
        "id": "terrausd",
        "symbol": "UST",
        "name": "TerraUSD"
    },
    {
        "id": "huobi-btc",
        "symbol": "HBTC",
        "name": "Huobi BTC"
    },
    {
        "id": "olymous",
        "symbol": "OHM",
        "name": "Olympus "
    },
    {
        "id": "harmony",
        "symbol": "ONE",
        "name": "Harmony"
    },
    {
        "id": "blockstack",
        "symbol": "STX",
        "name": "Stacks"
    },
    {
        "id": "bittorrent-2",
        "symbol": "BTT",
        "name": "BitTorrent"
    },
    {
        "id": "",
        "symbol": "",
        "name": ""
    },
    {
        "id": "amp-token",
        "symbol": "AMP",
        "name": "Amp"
    },
    {
        "id": "maker",
        "symbol": "MKR",
        "name": "Maker"
    },
    {
        "id": "celsius-degree-token",
        "symbol": "CEL",
        "name": "Celsius Network "
    },
    {
        "id": "helium",
        "symbol": "HNT",
        "name": "Helium"
    },
    {
        "id": "sushi",
        "symbol": "SUSHI",
        "name": "Sushi"
    },
    {
        "id": "dash",
        "symbol": "DASH",
        "name": "Dash "
    },
    {
        "id": "celo",
        "symbol": "CELO",
        "name": "Celo"
    },
    {
        "id": "omisego",
        "symbol": "OMG",
        "name": "OMG Network"
    },
    {
        "id": "thorchain",
        "symbol": "RUNE",
        "name": "THORChain"
    },
    {
        "id": "compound-governance-token",
        "symbol": "COMP",
        "name": "Compund"
    },
    {
        "id": "magic-internet-money",
        "symbol": "MIM",
        "name": "Magic Internet Money"
    },
    {
        "id": "chiliz",
        "symbol": "CHZ",
        "name": "Chiliz"
    },
    {
        "id": "zcash",
        "symbol": "ZEC",
        "name": "Zcash "
    },
    {
        "id": "decred",
        "symbol": "DCR",
        "name": "Decred"
    },
    {
        "id": "havven",
        "symbol": "SNX",
        "name": "Synthetix Network Token"
    },
    {
        "id": "holotoken",
        "symbol": "HOT",
        "name": "Holo "
    },
    {
        "id": "theta-fuel",
        "symbol": "TFUEL",
        "name": "Theta Fuel"
    },
    {
        "id": "nem",
        "symbol": "XEM",
        "name": "NEM"
    },
    {
        "id": "ecomi",
        "symbol": "OMI",
        "name": "ECOMI"
    },
    {
        "id": "enjincoin",
        "symbol": "ENJ",
        "name": "Enjin Coin"
    },
    {
        "id": "icon",
        "symbol": "ICX",
        "name": "ICON"
    },
    {
        "id": "xdce-crowd-sale",
        "symbol": "XDC",
        "name": "XDC Network"
    },
    {
        "id": "true-usd",
        "symbol": "TUSD",
        "name": " TrueUSD"
    },
    {
        "id": "qtum",
        "symbol": "QTUM",
        "name": "Qtum"
    },
    {
        "id": "huobi-token",
        "symbol": "HT",
        "name": "Huobi Token"
    },
    {
        "id": "yearn-finance",
        "symbol": "YFI",
        "name": "yearn.finance"
    },
    {
        "id": "bitcoin-gold",
        "symbol": "BTG",
        "name": "Bitcoin Gold"
    },
    {
        "id": "zilliqa",
        "symbol": "ZIL",
        "name": "Zilliqa"
    },
    {
        "id": "iostoken",
        "symbol": "IOST",
        "name": "IOST"
    },
    {
        "id": "safemoon",
        "symbol": "SAFEMOON",
        "name": "SafeMoon"
    },
    {
        "id": "curve-dao-token",
        "symbol": "CRV",
        "name": "Curve DAO Token"
    },
    {
        "id": "spell-token",
        "symbol": "SPELL",
        "name": "Spell Token"
    },
    {
        "id": "kucoin-shares",
        "symbol": "KCS",
        "name": "KuCoin Token "
    },
    {
        "id": "telcoin",
        "symbol": "TEL",
        "name": "Telcoin"
    },
]