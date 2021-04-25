//Connecting and Emitting Sockets
let socket = io.connect('http://localhost:3000/')
socket.emit('history');
socket.emit('topFive');

//DOM Queries
let cidade = document.getElementById('cidade');
let temperaturaValor = document.getElementsByClassName('temperatura')[0];
let umidadeValor = document.getElementsByClassName('umidade')[0];
let climaValor = document.getElementsByClassName('clima')[0];
let cidadeValor = document.getElementsByClassName('cidade')[0];
let paisValor = document.getElementsByClassName('pais')[0];


//DOM Cities Last Searched
let listaDinamica = document.getElementById('dinamicaLista');
let button = document.getElementById('searchButton');

//Calling Sockets When Searching for city
button.addEventListener('click',function(){
    if (!cidade.value) {
        console.log("Not Working")
        return;
    }
    socket.emit('topFive')
    socket.emit('history');
    
    socket.emit('weather',{
        cidade: cidade.value
    })
    
})

//Receiving api's data
socket.on('weather', function(data){
    let noResponse=false;
    for(x in data){
        if(data[x]=="")
        noResponse=true;
    }
    if(noResponse===false){
        temperaturaValor.innerHTML = data.temperatura + " 🌡️";
        umidadeValor.innerHTML = data.umidade + " 🌧️";
        climaValor.innerHTML = data.clima + " ⛅";
        cidadeValor.innerHTML = data.cidade + " 🏙️";
        paisValor.innerHTML = data.pais +  " 🏴󠁧󠁢󠁳󠁣󠁴" ;
    }else{
        //Treatment when api doesn't return properly
    }
})

//Receiving Database Data Regarding the TOP FIVE cities most searched and updating html
socket.on('topFive', function(data){
    if(document.getElementsByClassName("h1cidade")[0]!=null){
        document.getElementById("dinamicaLista2").remove();
        let element = document.createElement('div')
        element.setAttribute("id", "dinamicaLista2");
        document.getElementById("containerLista2").appendChild(element);
    }
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let cidadeH1  = document.createElement("h3");
        cidadeH1.innerHTML = data[i].nome;
        cidadeH1.classList.add('h1cidade');
        document.getElementById("dinamicaLista2").appendChild(cidadeH1);
    }
})

//Receiving Database Data Regarding the last searched cities and updating html
socket.on('history', function(data){
    if(document.getElementsByClassName("h1cidade")[0]!=null){
        document.getElementById("dinamicaLista").remove();
        let element = document.createElement('div')
        element.setAttribute("id", "dinamicaLista");
        document.getElementById("containerLista").appendChild(element);
    }
    for (let i = 0; i < data.length; i++) {
        //console.log(data[i]);
        let cidadeH1  = document.createElement("h3");
        cidadeH1.innerHTML = data[i].nome;
        cidadeH1.classList.add('h1cidade');
        document.getElementById("dinamicaLista").appendChild(cidadeH1);
    }
})