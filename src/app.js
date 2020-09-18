const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')

const app = express()


const files =path.join(__dirname, '../public')
const viewPath = path.join(__dirname, './template/views')
const partialPath = path.join(__dirname, './template/partials')


app.use(express.static(files))


app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)



app.get('', (req, res)=>{
    res.render('index', {
        title:'homepage'
    })
})


app.get('/about', (req, res)=>{
    res.render('about', {
        title:'about page'
    })
})
app.get('/help', (req, res)=>{
    res.render('help', {
        title:'help page'
    })
})


   app.get('/weather', (req, res)=>{
       if(!req.query.address){
        res.send({
            error:'please provide address'
           })
       }
        forecast(req.query.address, (error, data)=>{


            if (error){
                return console.log('Error', error)
            }

             return res.send({
                forecast:{
                    temperature: data.temperature,
                    clouds: data.clouds,
                    location: data.name,
                    weather:data.weather,
                }
            })
    
        
    })

      

       

       
    
   })

   app.get('/help/*',(req, res)=>{
    res.render('404', {
        message:'help article not found dear'
    })
       })

   app.get('*',(req, res)=>{
res.render('404', {
    message:' error page not found'
})
   })


app.listen(3001, ()=>{
    console.log('Server has started')
})