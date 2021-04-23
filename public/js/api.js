
//Declarando variáveis do DOM
let umidade= document.getElementsByClassName("umidade")[0];
let clima  = document.getElementsByClassName("clima")[0];
let temperatura  = document.getElementsByClassName("temperatura")[0];
let pais = document.getElementsByClassName("pais")[0];
let cidade = document.getElementsByClassName("cidade")[0];

//Puxando o DOM do botão e adicionando onclick event nele
const button = document.getElementById('buttonSearch');

button.addEventListener("click", search)

function search(){

  const api = document.getElementById('api').value;

  let inputName = document.getElementById('inputName').value;
  
  axios.get("http://api.openweathermap.org/data/2.5/weather?q="+inputName+"&units=metric&appid=" + api + "&lang=pt")
  .then(response => { console.log(response)
    
    umidade.innerText =response.data.main.humidity + " % 🌧️";
    
    clima.innerText=response.data.weather[0].description + " ⛅" 
    
    temperatura.innerText=response.data['main']['temp'] + " 🌡️"
    
    pais.innerText=response.data['sys']['country'] + " 🏴󠁧󠁢󠁳󠁣󠁴" 
    
    cidade.innerText=response.data['name'] + " 🏙️"
  
  }).catch(err=>{
    console.log(err);
  });
}



/*
axios.get(
fetch("http://api.openweathermap.org/data/2.5/weather?q="+nameInput.value+"&units=metric&appid=" + api)
.then(response => response.json()
)
.then(data=> {console.log(data)
  console.log(data['name'])

})
.catch(err=>{
  console.log(err);
});
*/