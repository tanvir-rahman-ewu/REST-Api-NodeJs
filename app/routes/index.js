// It's the master route file//

const noteRoutes = require('./note_routes')

module.exports = (app, db) => {
    noteRoutes(app, db)
}