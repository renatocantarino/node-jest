const express = require('express')
const bodyParser = require('body-parser');

const server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (request, response) => {
    response.send({ msg: 'ola' })
})

server.post('/login', (request, response) => {
   
    
    const { usr, pass } = request.body  
    response.send({ msg: request.body })
})


module.exports = server