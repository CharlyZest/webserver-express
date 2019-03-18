const http = require('http')

http.createServer( (req, res) => {

    res.writeHead(200,  { 'Content-Type': 'application/json' })

    let salida = {
        nombre: 'Carlos', 
        edad: 20, 
        url: req.url
    }

    res.write( JSON.stringify( salida ) )

    // res.write('Hola mundo')
    res.end()

} )
.listen(80)

console.log('Escuchando en el puerto 80')