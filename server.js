const express = require('express')
const cors = require('cors');
const { Dashboard } = require('./server/models/dashboard.model');
const app = express()
require('./server/config/mongoose.config')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./server/routes/dashboard.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})