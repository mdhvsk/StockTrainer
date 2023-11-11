const express = require('express')
const app = express()

const cors = require('cors')
const port = 8000

require('./config/mongoose.config')

app.get('/', (request, response) => {
    response.send('<h1>Phonebook</h1>')
})

app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Listening on port: ${port}`));