var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Entry = require('./api/models/calendarModel'),
  bodyParser = require('body-parser')

// mongoose instance connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/MERNCalendardb')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
var routes = require('./api/routes/calendarRoutes') // import routes
routes(app) //register routes
  
app.listen(port)

console.log('calendar RESTful API server started on ' + port)
