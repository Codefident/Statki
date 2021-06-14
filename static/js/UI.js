class UI {
    constructor() {
        this.root = document.getElementById('root')
        this.loginPage()
    }

    loginPage() {

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
                console.log(game.nickname)
                net.login(nickname)
            }
        }

        container.append(label, input, submit)
    }

    loggedIn() {
        document.getElementById('login_container').remove()

        let menu = document.createElement('div')
        menu.id = 'menu'
        menu.innerHTML = game.nickname
        this.root.append(menu)

        let logoutButton = document.createElement('button')
        logoutButton.id = 'logoutButton'
        logoutButton.innerHTML = 'Wyjdź'
        logoutButton.classList.add('btn-danger')
        logoutButton.onclick = () => {
            net.logout()
            document.getElementById('menu').remove()
            this.loginPage()
        }
        menu.appendChild(logoutButton)
    }

    notLoggedIn() {
        document.getElementById('login_container').innerHTML = '<h1>Za dużo graczy</h1>'
    }

}