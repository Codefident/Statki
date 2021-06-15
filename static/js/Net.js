class Net {
    constructor() {
        this.socket = null
        this.connection()
        this.getOponentNickname()
        this.startGame()
    }

    connection() {
        this.socket = io('http://localhost:3000/')
        this.socket.on('connection')
    }

    login(nickname) {
        this.socket.emit('login', nickname)
        this.socket.on('login', res => {
            if (res.dodano) {
                game.id = res.id
                ui.loggedIn()
            }
            else
                ui.notLoggedIn()
        })
    }

    logout() {
        this.socket.emit('logout', game.id)
    }

    getOponentNickname() {
        this.socket.on('oponent', res => ui.displayOponentNickname(res))
    }

    ready() {
        this.socket.emit('ready', { 'id': game.id, 'warships': game.warshipsLocations })
    }

    startGame() {
        this.socket.on('start', () => game.start())
    }
}