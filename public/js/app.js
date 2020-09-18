
const form = document.querySelector('form')
const search = document.querySelector('input')
const place = document.querySelector('#place')
const weather = document.querySelector('#weather')
console.log(form)

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    place.textContent = 'Loading...'
    weather.textContent = ''
const address = search.value
console.log(address)

    fetch(`/endpoint?address=${address}`).then(res=> res.json().then(data=> {
        if(data.error){
            place.textContent = data.error
        } else{
            place.textContent =   `Here is the weather at ${data.forecast.location}:`
            weather.textContent = `  The temperature is ${data.forecast.temperature} degrees and a look up the sky will show ${data.forecast.weather}`
        }
    }

      ))
})
