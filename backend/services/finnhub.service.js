var fetch = require('node-fetch')


const alpha_api_key = "VOPNVOSY9ZDLS88V"


const getStockAlpha = async (stockSymbol) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=VOPNVOSY9ZDLS88V`)
    const json = response.json()
    return json

}


module.exports = {
    getStockAlpha
}