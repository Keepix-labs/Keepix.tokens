# Keepix.tokens

Upload yours token, coin to get displayed in the Keepix Wallet

## Add a Coin

1. fork the project.
2. add your coin on the coins.json file. (Take example on the others coins already in)
3. add your icon 64x64 png in the ./icons directory.

## Add a Token

1. fork the project.
2. add your token on the tokens.json file. (Take example on the others tokens already in)
3. add your token icon 64x64 png in the ./icons directory.

## Rpcs
Rpcs is the list of public rpc for evm blockchain and tezos.  

## Functions

getPriceByPoolBalance function used for compare the balance of one address in TokenA with TokenB and return the value of one tokenA in TokenB  
Can be mult by an target currency like if tokenB is WETH you can multiply by ETH for having the price of tokenA in USD.  
```js
"getPriceByPoolBalance" {
  "tokenA": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", // Address of the token you want price
  "tokenB": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH token address
  "tokenADecimals": 8, // number of decimals of the tokenA in his smart contract
  "tokenBDecimals": 18, // number of decimals of the tokenB in his smart contract
  "poolAddress": "0xceff51756c56ceffca006cd410b03ffc46dd3a58", // Pool or smart contract addres where we will compare the balances
  "blockchain": "ethereum", // target blockchain (ethereum, bsc, avalanche, ...) (WARNING: Only EVM blockchain)
  "mulBy": "ETH" // [Optionnal] this will multiply the result by the provided SYMBOL 
}
```

getPriceByPoolUniswapV3 function used for compare the balance of one Uniswapv3 pool address in TokenA with TokenB (tick price) and return the value of one tokenA in TokenB  
Can be mult by an target currency like if tokenB is WETH you can multiply by ETH for having the price of tokenA in USD.  
Works on Pancakeswapv3 and Uniswapv3 (on bsc and ethereum)  
```js
"getPriceByPoolBalance" {
  "tokenA": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", // Address of the token you want price
  "tokenB": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH token address
  "tokenADecimals": 8, // number of decimals of the tokenA in his smart contract
  "tokenBDecimals": 18, // number of decimals of the tokenB in his smart contract
  "poolAddress": "0xceff51756c56ceffca006cd410b03ffc46dd3a58", // Uniswapv3 Pool addres where we will compare the balances
  "blockchain": "ethereum", // target blockchain (ethereum, bsc, avalanche, ...) (WARNING: Only EVM blockchain)
  "mulBy": "ETH" // [Optionnal] this will multiply the result by the provided SYMBOL 
}
```

getBalanceByQuery function  
For non evm blockchain or not supported by the keepix natively you can use getBalanceByQuery function for adding one method for getting the balance of the wallet.  
```js
"getBalanceByQuery": {
      "url": "https://blockchain.info/balance?active=$address", // url of the query (Only JSON returned body is supported) $address is replaced by the wallet address
      "method": "GET", // methods GET or POST
      "body": { // body is JSON.stringify and $address is replaced by the wallet address before posting.
          "example": "of body for POST cases $address"
      },
      "resultEval": "result['$address'].final_balance" // eval executed with the variable result (result of the query JSON) for find the variable of the balance correctly also you can parse the value for returning the correct decimals.
}
```

