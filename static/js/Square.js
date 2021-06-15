class Square {
    constructor(x, y) {
        this.element = null
        this.x = x
        this.y = y
        this.boat = false
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
        this.boat = !this.boat
        if (this.boat) {
            this.element.style.background = 'blue'
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
        console.log(game.warshipsLocations)
    }
}