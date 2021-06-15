class Square {
    constructor(x, y, clickable) {
        this.element = null
        this.x = x
        this.y = y
        this.boat = false
        this.clickable = clickable
        this.append()
    }

    append() {
        let seaSingleSquare = document.createElement('div')
        seaSingleSquare.classList.add('seasquare')
        seaSingleSquare.onclick = () => this.clickAndSetUpWarship()
        this.element = seaSingleSquare
        document.getElementById('seaContainer').appendChild(seaSingleSquare)
    }

    clickAndSetUpWarship() {
        if (this.clickable && (game.warshipsLocations.length < 20 || (this.boat && game.warshipsLocations.length == 20))) {
            this.boat = !this.boat
            if (this.boat) {
                this.element.style.background = '#0d6efd'
                game.warshipsLocations.push({ 'x': this.x, 'y': this.y })
            }
            else {
                this.element.style.background = 'none'
                for (let i in game.warshipsLocations) {
                    if (game.warshipsLocations[i].x == this.x && game.warshipsLocations[i].y == this.y) {
                        game.warshipsLocations.splice(i, 1)
                    }
                }
            }
            ui.updateProgressBar()
        }
    }
}