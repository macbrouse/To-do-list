const express = require('express')
const srv = express();
const todoRoute = require('./routes/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.use('/', express.static(__dirname + "/public"))

srv.use('/todos', todoRoute)

srv.listen(4567);