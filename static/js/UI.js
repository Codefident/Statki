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
            game.nickname = document.getElementById('name_input').value
            console.log(game.nickname)
        }

        container.append(label, input, submit)
    }
}