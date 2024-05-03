//console.log('Hola Mundo')
const http = require('http')

// req = Solicitud al WebServer.
// res = Lo que proporciona el WebServer. Es lo que responsde al Cliente.
// Crear el servidor.
http.createServer((req,res) =>{
	//console.log(req)

	/* Para enviar la respuesta de tipo JSon 
	res.writeHead(200,{'Content-Type':'application/json'})

	const Persona = {
		id:1,
		nombre:'Fernando'
	}


	res.write(JSON.stringify(Persona))
	res.end()
*/
	// Para enviarlo como archivo CSV.
	res.setHeader ('Content-Disposition','attachment; filename=lista.csv')
	res.writeHead(200,{'Content-Type':'application/csv'})
	res.write ('id, nombre\n')
	res.write ('1, Juan Perez 1\n')
	res.write ('2, Juan Perez 2\n')
	res.write ('3, Juan Perez 3\n')
	res.write ('4, Juan Perez 4\n')
	res.write ('5, Juan Perez 5\n')

})
.listen(3033)

console.log('Escuchando en el puerto 3033')
