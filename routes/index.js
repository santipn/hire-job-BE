const express = require("express");
const app = express()
const authRoute = require('./authRoute')
const usersRoute = require('./usersRoute')
const { isPekerja, isPerekru, isLogin } = require('../helpers/auth')
const { isPekerja, isPerekrut, isLogin } = require('../helpers/auth')
const portfolioRoute = require('./portfolioRoute')
const experienceRoute = require('./experienceRoute')
const skillRoute = require ('./skillRoute')

app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/auth', authRoute)
app.use('/portfolio', portfolioRoute)
app.use('/experiences',isLogin, experienceRoute)
app.use('/skills',isLogin,skillRoute )




module.exports = app
