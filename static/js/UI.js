class UI {
    constructor() {
        this.root = document.getElementById('root')
        this.loginPage()
    }

    loginPage() {

        this.root.classList.add('d-flex', 'flex-row', 'justify-content-center', 'align-items-center')
        this.root.innerHTML = ''

        let container = document.createElement('div')
        container.classList.add('d-flex')
        container.classList.add('flex-column')
        container.classList.add('justify-content-evenly')
        container.classList.add('w-25')
        container.classList.add('h-25')
        container.id = 'login_container'
        this.root.appendChild(container)

        let label = document.createElement('label')
        label.setAttribute('for', 'name')
        label.id = 'name_label'
        label.innerHTML = 'Wpisz swój nick:'

        let input = document.createElement('input')
        input.type = 'text'
        input.id = 'name_input'
        input.setAttribute('placeholder', 'Nickname')
        input.classList.add('p-2')

        let submit = document.createElement('button')
        submit.type = 'button'
        submit.innerHTML = 'Zatwierdź'
        submit.classList.add('p-2')
        submit.classList.add('btn-dark')

        submit.onclick = () => {
            const nickname = document.getElementById('name_input').value
            if (nickname != '') {
                game.nickname = nickname
                net.login(nickname)
            }
        }

        container.append(label, input, submit)
    }

    loggedIn() {
        //document.getElementById('login_container').remove()
        this.root.innerHTML = ''
        this.root.classList.remove('d-flex', 'flex-row', 'justify-content-center', 'align-items-center')
        this.displayNavbar()
    }

    notLoggedIn() {
        document.getElementById('login_container').innerHTML = '<h1>Za dużo graczy</h1>'
    }

    displayNavbar() {
        let menu = document.createElement('nav')
        menu.id = 'menu'
        menu.classList.add('navbar', 'navbar-expand-xl', 'navbar-dark', 'bg-dark')
        this.root.append(menu)

        let gameName = document.createElement('a')
        gameName.classList.add('navbar-brand', 'm-2')
        gameName.innerHTML = 'Statki'
        gameName.href = '#'
        menu.appendChild(gameName)

        let gameNickname = document.createElement('span')
        gameNickname.innerHTML = `Twój nick: <strong>${game.nickname}</strong>`
        gameNickname.classList.add('navbar-text', 'p-2')
        menu.appendChild(gameNickname)

        let gameOponentNickname = document.createElement('span')
        gameOponentNickname.id = 'spanOponentNickname'
        gameOponentNickname.innerHTML = `Twój przeciwnik: <strong>${game.oponent === null ? 'oczekiwanie na przeciwnika' : game.oponent}</strong>`
        gameOponentNickname.classList.add('navbar-text', 'p-2')
        menu.appendChild(gameOponentNickname)

        let logoutButton = document.createElement('button')
        logoutButton.id = 'logoutButton'
        logoutButton.innerHTML = 'Wyjdź'
        logoutButton.classList.add('btn', 'btn-outline-danger', 'm-2', 'p-2')
        logoutButton.onclick = () => {
            net.logout()
            document.getElementById('menu').remove()
            this.loginPage()
        }
        menu.appendChild(logoutButton)

        this.displaySea()
    }

    displayOponentNickname(nickname) {
        game.oponent = nickname
        document.getElementById('spanOponentNickname').innerHTML = `Twój przeciwnik: <strong>${game.oponent}</strong>`
    }

    displaySea() {
        let seaContainer = document.createElement('div')
        seaContainer.id = 'seaContainer'
        this.root.appendChild(seaContainer)

        for (let y = 0; y < 10; y++)
            for (let x = 0; x < 10; x++) {
                let seaSingleSquare = document.createElement('div')
                seaSingleSquare.classList.add('seasquare')
                document.getElementById('seaContainer').appendChild(seaSingleSquare)
            }
    }

}