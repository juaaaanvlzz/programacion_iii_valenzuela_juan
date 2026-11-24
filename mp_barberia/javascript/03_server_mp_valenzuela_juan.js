import { createServer } from 'node:http'

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.end('Bienvenido a Barbería Vlzz\n')
    }
    else if (req.url === '/servicios') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Servicios</h1><ul><li>Corte Fade - $10</li><li>Afeitado Clásico - $8</li><li>Perfilado de Barba - $6</li></ul>')
    }
    else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Contacto</h1><p>Reserva tu cita en citas@barberiavlzz.com</p>')
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>404 - Página no encontrada</h1>')
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Barbería Vlzz escuchando en 127.0.0.1:3000')
})
