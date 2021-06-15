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
        seaSingleSquare.onclick = () => this.click()
        this.element = seaSingleSquare
        document.getElementById('seaContainer').appendChild(seaSingleSquare)
    }

    click() {
        this.boat = !this.boat
        if (this.boat)
            this.element.style.background = 'blue'
        else
            this.element.style.background = 'none'
    }
}