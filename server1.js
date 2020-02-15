const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello!')
})

app.get('/abc', (request, response) => {
    response.sendfile('views/shop.html', {root: __dirname })
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

