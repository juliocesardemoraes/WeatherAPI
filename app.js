const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();


require('dotenv').config()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Setting Up Css JS
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('home',{api: process.env.API});
    console.log('home');
});





app.listen(3000);





/*
//Connecting to postgres
client = connection.client;


client.connect();

const text = 'SELECT conteudo FROM msg.messages'


client.query(text, (err, res) => {
  console.log(err ? err.stack : res.rows) // Hello World!
  client.end()
})





*/

