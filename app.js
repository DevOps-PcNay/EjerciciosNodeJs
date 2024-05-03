require ('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

// Cuando se utilizan Middleware 
// Serviendo contenido estatico
// Se utilizan Middleware
app.use(express.static('Public/templated-roadtrip'))

// Mostrando la seccion "elements"
app.get('/elements',(req,res) => {
	res.sendFile(__dirname+'/Public/templated-roadtrip/elements.html')
})

// Mostrando la seccion "generic"
app.get('/generic',(req,res) => {
	res.sendFile(__dirname+'/Public/templated-roadtrip/generic.html')
})


app.get('/', function (req, res) {
  res.send('Home Page')
})


app.get('/hola-mundo',(req,res) => {
	res.send('Respuesta desde su ruta respectiva')
})



app.get('*',(req,res) => {
	res.sendFile(__dirname+'/Public/404.html')
})

app.listen(port)