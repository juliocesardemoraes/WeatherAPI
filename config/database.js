require('dotenv').config()
const Client = require('pg').Client

//process.env.API_TOKEN

const cliente = new Client({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOSTHTTP,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})


exports.client = cliente