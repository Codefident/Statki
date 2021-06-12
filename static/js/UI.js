class UI {
    constructor() {
        this.root = document.getElementById('root')
        this.loginPage()
    }

    loginPage() {
        let container = document.createElement('div')
        container.classList.add('center_child')
        container.id = 'login_container'
        this.root.appendChild(container)

        let label = document.createElement('label')
        label.setAttribute('for', 'name')
        label.id = 'name_label'
        label.innerHTML = "Nazwa gracza:"
        label.classList.add('floating')
        label.classList.add('newline')

        let input = document.createElement('input')
        input.type = 'text'
        input.id = 'name_input'
        input.classList.add('floating')
        input.classList.add('newline')

        let submit = document.createElement('button')
        submit.type = 'submit'
        submit.innerHTML = 'Zatwierdź'
        submit.classList.add('floating')
        submit.classList.add('newline')

        submit.onclick = () => {
            const nickname = document.getElementById('name_input').value
            game.nickname = nickname
            console.log(game.nickname)

            net.login(nickname)
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
        logoutButton.onclick = () => net.logout()
        menu.appendChild(logoutButton)

    }

    notLoggedIn() {

    }

}