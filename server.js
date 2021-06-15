const express = require('express')
const app = express()
const server = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(server, { cors: { origin: '*' } })
const port = 3000

let players = []

app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

server.listen(port, () => console.log('Server running at :' + port))

io.on('connection', socket => {

    socket.on('login', nickname => {
        if (players.length < 2) {
            if (players.length == 1) {
                players.push({ nickname: nickname, id: socket.id })
                socket.emit('login', { dodano: true, id: socket.id })
                socket.emit('oponent', players[0].nickname)
                socket.broadcast.emit('oponent', nickname)
            }
            else {
                players.push({ nickname: nickname, id: socket.id })
                socket.emit('login', { dodano: true, id: socket.id })
            }
        }
        else {
            socket.emit('login', { dodano: false })
        }
        console.log(players)
    })

    socket.on('logout', id => {
        console.log('logout')
        console.log(id)
        for (i in players) {
            if (players[i].id == id) {
                players.splice(i, 1)
            }
        }
        console.log(players)
    })

})