const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const note_routes = require('./app/routes/note_routes')
const db = require('./config/db')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended : true}))




MongoClient.connect(db.url, (err, client) =>{
    if(err)
    {
        return console.log(err)
    }
    let database = client.db('ChelseaDB');

    require('./app/routes')(app, database)
    
    app.listen(port, ()=>{
        console.log(`we are live at localhost:${port}`)
    })
})