console.log("Web")

let socket = io.connect('http://localhost:3000/')

//DOM Queries
let cidade = document.getElementById('cidade');
let temperaturaValor = document.getElementsByClassName('temperatura')[0];
let umidadeValor = document.getElementsByClassName('umidade')[0];
let climaValor = document.getElementsByClassName('clima')[0];
let cidadeValor = document.getElementsByClassName('cidade')[0];
let paisValor = document.getElementsByClassName('pais')[0];


let button = document.getElementById('searchButton');

console.log(cidade.value);

button.addEventListener('click',function(){
    if (!cidade.value) {
        console.log("Fu")
        return;
    }
    
    console.log("Passou")
    socket.emit('weather',{
        cidade: cidade.value
    })
    
})

socket.on('weather', function(data){
    console.log(data);
    //cidadeValor.innerHTML = data.cidade;
    temperaturaValor.innerHTML = data.temperatura + " 🌡️";
    umidadeValor.innerHTML = data.umidade + " 🌧️";
    climaValor.innerHTML = data.clima + " ⛅";
    cidadeValor.innerHTML = data.cidade + " 🏙️";
    paisValor.innerHTML = data.pais +  " 🏴󠁧󠁢󠁳󠁣󠁴" ;


})


/*
 " 🌡️"
" % 🌧️";
 " ⛅" 
 + " 🏙️"
 */