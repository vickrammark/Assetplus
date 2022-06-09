const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// This is an example route which is been used in the frontend project for testing
app.get('/test', (req, res) => {
    res.json({
        name: "Rakesh",
        age: "34",
        email: "rakesh.k@assetplus.io"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})