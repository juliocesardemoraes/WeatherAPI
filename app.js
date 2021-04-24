//Calling Requires for node
const express = require('express');
const exphbs  = require('express-handlebars');
const axios = require('axios').default;
const app = express();
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


//WebSocket
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});



io.on('connection',function(socket){
  console.log('Entered socket', socket.id);
  
  
  
  socket.on('weather',function(data){
    //console.log(data);
    let dataCol = {
      temperatura : "",
      umidade : "",
      clima : "",
      cidade : "",
      pais : ""
    };
    

    axios.get("http://api.openweathermap.org/data/2.5/weather?q="+data.cidade+
    "&units=metric&appid=" + process.env.API
    + "&lang=pt").then(response => { 
      
      dataCol.temperatura=response.data.main.temp;

      dataCol.umidade=response.data.main.humidity; 
          
      dataCol.clima=response.data.weather[0].description;

      dataCol.cidade=response.data.name;

      dataCol.pais=response.data.sys.country; 
      /*objectResponse.humidity =  response.data.main.humidity;
      req.session.key = response.data.main.humidity;
      console.log(req.session.key);
      */



      }).catch(err=>{
        console.log(err);
      }).finally(response=>{
        console.log(dataCol);
        io.to(socket.id).emit('weather', dataCol)
    });
  });
});





/*
//Post Route with API
axios.get("http://api.openweathermap.org/data/2.5/weather?q="+req.body.cidade+
    "&units=metric&appid=" + process.env.API
    + "&lang=pt").then(response => { 
      objectResponse.humidity =  response.data.main.humidity;
      req.session.key = response.data.main.humidity;
      console.log(req.session.key);
      }).catch(err=>{
        console.log(err);
      }).finally(response=>{
        console.log('finally')
        res.redirect('/')
      });
});
*/
//WebSocket