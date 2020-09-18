const request = require('request')

const forecast = (city, callback)=>{
    if (city){
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce7697f9d631413567d5485d88f9e6bb&units=metric`
    request({url:url, json:true }, (error, response)=>{
       if (error){
           callback('check your internet', undefined)
       }else if(response.body.weather===undefined){
           callback('check your address', undefined)
       } else{
           callback(undefined, {
               weather:response.body.weather[0].description,
               temperature:response.body.main.temp,
               clouds:response.body.clouds,
               name:response.body.name,
               
    
           })
       }
    })

    } else {
        console.log('Please Provide a city in the command line')
    }
    
}


module.exports = forecast