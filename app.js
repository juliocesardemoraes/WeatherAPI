//Calling Requires for node
const express = require('express');
const exphbs  = require('express-handlebars');
const axios = require('axios').default;
const app = express();
const database = require('./config/database')
require('dotenv').config()

//Setting up app 
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//View Engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Setting Up Css JS and Images
app.use(express.static(__dirname + '/public'));

//Rendering Home Route
app.get('/', function (req, res) {
    res.render('home',{});
    console.log('home');
});

//Listening to server on port 3000
let server = app.listen(3000, function(){
  console.log("Rodando server na porta 3000");
});


//Connecting to database Postgres
client = database.client;
client.connect();




//WebSocket Socket.io 
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection',function(socket){
  let requestSuccessful = false;
  const text = 'SELECT * FROM cidades.cidades ORDER BY updated_at DESC limit 10;'

  //Weather websocket
  socket.on('weather',function(data){
    
    //Setting Data Object Structure to receive Response from Axios
    let dataCol = {
      temperatura : "",
      umidade : "",
      clima : "",
      cidade : "",
      pais : ""
    };
    
    //Get Api Response Using Axios
    axios.get("http://api.openweathermap.org/data/2.5/weather?q="+data.cidade+
    "&units=metric&appid=" + process.env.API
    + "&lang=pt").then(response => { 
      
      dataCol.temperatura=response.data.main.temp;

      dataCol.umidade=response.data.main.humidity; 
          
      dataCol.clima=response.data.weather[0].description;

      dataCol.cidade=response.data.name.toLowerCase();

      dataCol.pais=response.data.sys.country; 

      requestSuccessful=true;
      
      }).catch(err=>{
        console.log("Request Error",err);
      }).finally(response=>{
        if(requestSuccessful){
          
          client.query(`INSERT INTO cidades.cidades (nome,pais,temperatura, contador,updated_at) 
          VALUES ('${dataCol.cidade}','${dataCol.pais}','${dataCol.temperatura}',1,current_timestamp) 
          ON CONFLICT (nome) DO UPDATE SET contador = cidades.contador + 1, updated_at = current_timestamp, temperatura = ${dataCol.temperatura};`)
          .then(res => console.log("responseFromDB",res.rows))
          .catch(e => console.error(e.stack))
          
          io.to(socket.id).emit('weather', dataCol)

          client.query(text)
          .then(res => io.sockets.emit('history',res.rows))
          .catch(e => console.error(e.stack))
          
        }  
    });
  });
  //Call History From DB
  socket.on('history',function(data){
    client.query(text)
    .then(res => io.sockets.emit('history',res.rows))
    .catch(e => console.error(e.stack))
  })

  //Select Five most searched cities from db
  socket.on('topFive',function(data){
    client.query(`select * from cidades.cidades ORDER BY contador desc limit 5;`)
    .then(res => io.sockets.emit('topFive',res.rows))
    .catch(e => console.error(e.stack))
  })
});
