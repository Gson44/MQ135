const DashboardController = require('../controllers/dashboard.controller')
module.exports = function(app){
    app.get('/', DashboardController.index)
    app.post('/api/signup', DashboardController.createUser)
    app.get('/api/user', DashboardController.getAllPeople)
    app.get('/api/user/:id', DashboardController.findUser)
}