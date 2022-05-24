const express = require('express')
const app = express()
const {myRoutes} = require('./routes/index')
require('dotenv').config();
const port = process.env.PORT

app.use(express.json())

myRoutes(app)

app.listen(port, () => console.log(`Application listening on port ${port}!`))