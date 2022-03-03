
const express = require('express')
// const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
// const users = require('./db/user.json')

const app = express()

app.use(cors())
app.use(bodyParser.json())


/*
app.get('/', verifyToken, (req, res) => { //verifyToken is middleware
    jwt.verify(req.token, 'the_secret_key', err => { // verifies token
        if (err) { // if error, respond with 401 code
            res.sendStatus(401)
        } else { // otherwise, respond with private data
            res.json({
                users: user
            })
        }
    })
})
*/
