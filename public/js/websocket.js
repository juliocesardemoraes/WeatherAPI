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
let listaDinamica = document.getElementById('dinamicList');
let button = document.getElementById('searchButton');

//Calling Sockets When Searching for city
button.addEventListener('click',function(){
    if (!cidade.value) {
        //console.log("Not Working")
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
    let noResponse=true;
    for(x in data){
        if(data[x]==""){
            noResponse=true;
        }else{
            noResponse=false;
        }
    }
    if(noResponse===true){
        //Treatment when api doesn't return properly
        console.log("Aqui")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Digite um nome de uma cidade Válida'
          })
    }
    if(noResponse===false){
        temperaturaValor.innerHTML = data.temperatura + " 🌡️";
        umidadeValor.innerHTML = data.umidade + " 🌧️";
        climaValor.innerHTML = data.clima + " ⛅";
        cidadeValor.innerHTML = data.cidade + " 🏙️";
        paisValor.innerHTML = data.pais +  " 🏴󠁧󠁢󠁳󠁣󠁴" ;
    }
   
})

//Receiving Database Data Regarding the TOP FIVE cities most searched and updating html
socket.on('topFive', function(data){
    if(document.getElementsByClassName("h3city")[0]!=null){
        document.getElementById("dinamicList2").remove();
        let element = document.createElement('div')
        element.setAttribute("id", "dinamicList2");
        document.getElementById("containerList2").appendChild(element);
    }
    for (let i = 0; i < data.length; i++) {
        let cityContainer  = document.createElement("div");
        cityContainer.classList.add('cityContainer');

        let cityName = document.createElement("h2");
        cityName.innerHTML = data[i].nome;
        cityName.classList.add("cityNameContainer");

        let cityTemp = document.createElement("h2");
        cityTemp.innerHTML = data[i].temperatura +" Cº";
        cityTemp.classList.add("tempTopContainer");
        

        let cityCountry = document.createElement("h2");
        cityCountry.innerHTML = data[i].pais;

        
        //Inserting into DOM
        document.getElementById("dinamicList2").appendChild(cityContainer);
        document.getElementsByClassName('cityContainer')[i].appendChild(cityTemp);
        document.getElementsByClassName('cityContainer')[i].appendChild(cityName);
        document.getElementsByClassName('cityContainer')[i].appendChild(cityCountry);
    }
})

//Receiving Database Data Regarding the last searched cities and updating html
socket.on('history', function(data){
    if(document.getElementsByClassName("h3city")[0]!=null){
        document.getElementById("dinamicList").remove();
        let element = document.createElement('div')
        element.setAttribute("id", "dinamicList");
        document.getElementById("containerList").appendChild(element);
    }
    for (let i = 0; i < data.length; i++) {
        let cidadeH1  = document.createElement("h3");
        cidadeH1.innerHTML = data[i].nome;
        cidadeH1.classList.add('h3city');
        document.getElementById("dinamicList").appendChild(cidadeH1);
    }
})