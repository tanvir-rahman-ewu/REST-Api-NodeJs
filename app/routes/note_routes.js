var ObjectID = require('mongodb').ObjectID

module.exports = (app, db) => {

    //get method in an url endpoint to get a object by it's id//
    app.get('/notes/:id', (req, res) =>{

        const id = req.params.id
        const details = {'_id': new ObjectID(id) }

        db.collection('notes').findOne(details, (err, item) =>{
            if(err){
                res.send({'error':  'An error has occures'})

            }else {
                res.send(item)
            }
        })
    })

    // delete a object by it's id
    app.delete('/notes/:id', (req, res) =>{

        const id = req.params.id
        const details = {'_id': new ObjectID(id) }

        db.collection('notes').remove(details, (err, item) =>{
            if(err){
                res.send({'error':  'An error has occures'})

            }else {
                res.send(`note ${id} deleted`)
            }
        })
    })



    // post end point //
    app.post('/notes', (req, res) =>{

        const note = {text : req.body.body, title : req.body.title}

        db.collection('notes').insert(note, (err, result) =>{
            if(err){
                res.send({'error':  'An error has occures'})

            }else {
                res.send(result.ops[0])
            }
        })
    })

    //put operation to update a object //
    app.put('/notes/:id', (req, res) =>{

        const id = req.params.id
        const details = {'_id': new ObjectID(id) }
        const note = {text : req.body.body, title : req.body.title}

        db.collection('notes').update(details, note, (err, item) =>{
            if(err){
                res.send({'error':  'An error has occures'})

            }else {
                res.send(item)
            }
        })
    })
}