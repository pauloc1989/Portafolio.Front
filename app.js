const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const routes = require('./routes')

app.use(express.urlencoded())
app.use(express.json())
app.use('/', routes)

app.use(express.static(`${__dirname}/`))
app.use(express.static('img'))

app.use('/', (req, res) => res.sendFile(`${__dirname}/index.html`))

app.listen(port, () => console.log(`Server running on port ${port}`))