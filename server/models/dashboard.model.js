const mongoose = require('mongoose')
const DashboardSchema = new mongoose.Schema({
    userName: {type:String},
    password: {type: String}
})
module.exports.Dashboard = mongoose.model('Dashboard', DashboardSchema)
