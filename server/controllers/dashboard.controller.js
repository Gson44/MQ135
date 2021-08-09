const { Dashboard } = require('../models/dashboard.model')

module.exports.index = (request,response) => {
    response.json({
        message: request.body
    })
}

module.exports.createUser = (request, response) => {
    const {userName, password} = request.body;
    console.log(request.body)
    Dashboard.create({
        userName,
        password
    })
    .then(dashboard => response.json({data: dashboard}))
    .catch(err => response.json(err))
}

module.exports.findUser = (request, response) => {
    Dashboard.findOne({_id:request.params.userName})
    .then(dashboard => response.json(dashboard))
    .catch(err => response.json(err))
}

module.exports.getAllPeople = (request, response) => {
    Dashboard.find({})
        .then(dashboard => response.json(dashboard))
        .catch(err => response.json(err))
}