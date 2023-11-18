const {
    getStock,
    getStockAlpha
} = require('../services/finnhub.service')

const handleGetStock = async (req, res) => {
    console.log("HandleGetStock")

    try {
        console.log(req.params.stockSymbol)
        const stockA = await getStockAlpha(req.params.stockSymbol)
        return res.json(stockA)
    }
    catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

module.exports = {
    handleGetStock
}