window.addEventListener('load', ()=> {

  let temperaturaValor = document.getElementById('temperatura-valor')  
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')    
  let icono = document.getElementById('icono') 

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
           
           const url = `https://api.openweathermap.org/data/2.5/weather?lat=-41.00010647279825&lon=-71.50005100328978&units=metric&lang=es&appid=78eae6178c78c4fdfc2244b689c78cd9`

           fetch(url)
            .then( response => { return response.json()})
            .then( data => {

                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp}° C`

                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                
                let iconCode = data.weather[0].icon
                const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                icono.src = urlIcon
                console.log(data.weather[0].icon)
              
                console.log(urlIcon)
            })
            .catch( error => {
                console.log(error)
            })
       })
          
    }
})