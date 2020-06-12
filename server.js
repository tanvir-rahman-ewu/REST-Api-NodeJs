const express = require('express')
const mongoClient = require('mongodb').mongoClient
const bodyParser = require('body-parser')
const note_routes = require('./app/routes/note_routes')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended : true}))

const index = require('./app/routes/index')
index(app, {})


app.listen(port, ()=>{
    console.log(`we are live at localhost:${port}`)
})