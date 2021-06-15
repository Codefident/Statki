const express = require('express')
const app = express()
const server = require('http').createServer(app)
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
                players.push({ nickname: nickname, id: socket.id, ready: false, warships: [], points: 0 })
                socket.emit('login', { dodano: true, id: socket.id })
                socket.emit('oponent', players[0].nickname)
                socket.broadcast.emit('oponent', nickname)
            }
            else {
                players.push({ nickname: nickname, id: socket.id, ready: false, warships: [], points: 0 })
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

    socket.on('ready', data => {
        for (i in players) {
            if (players[i].id == data.id) {
                players[i].ready = true
                players[i].warships = data.warships
                console.log('set up ' + players[i].nickname + ' status to ready')
            }
        }
        try {
            if (players[0].ready && players[1].ready) {
                io.emit('start')
            }
        }
        catch (err) { }
    })

    socket.on('disconnect', () => {
        for (i in players) {
            if (players[i].id == socket.id) {
                players.splice(i, 1)
            }
        }
    })

})