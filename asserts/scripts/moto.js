const host = 'http://localhost:3003/api/v1'
const prefix = '#input'

function queryElement(selector) {
    const element = document.querySelector(selector)

    return { selector, element }
}

async function registerMoto() {
    const modelo = queryElement('#inputModel').element.value.toString()
    const qtdPassageiros = queryElement('#inputQtdPassengers').element.value.toString()

    const data = {
        "atributes": {
            "model": modelo,
            "passengers": qtdPassageiros,
        }
    }

    const asyncRegisterMoto = () => {
        try {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${host}/moto`,
                    type: 'post',
                    dataType: 'json',
                    contentType: "application/json",
                    data: JSON.stringify(data),
                })
                    .done(data => {
                        resolve(data)
                    })
                    .fail(err => {
                        console.log(err.responseJSON)
                        reject(err.responseJSON)
                    })
            })
        } 
        catch(error) { 
            return error
        } 
    }
    const message = await asyncRegisterMoto()
    console.log(message)

    return message
}

async function getAllMotos() {
    const asyncGetMotos = () => {
        try {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${host}/moto`,
                    type: 'get',
                    dataType: 'json',
                    contentType: "application/json",
                })
                    .done(data => {
                        resolve(data)
                    })
                    .fail(err => {
                        console.log(err.responseJSON)
                        reject(err.responseJSON)
                    })
            })
        } 
        catch(error) { 
            return error
        } 
    }
    const motos = await asyncGetMotos()
    console.log(motos)

    return motos
}

function createCards(motos) {
    const cards = []
    motos.forEach(item => {
        cards.push(`
        <div class="col-md-4 col-sm-12">
                <div class="card-header titulo-principal">
                    ${item.model.toUpperCase()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item titulo-principal">Quantidade de passageiros: ${item.passengers}</li>
                    <li class="list-group-item titulo-principal">Quantidade de rodas: ${item.wheelnumber}</li>
                </ul>
        </div>
        `)
    })

    return cards
}

function showMotoCards(cards) {
    const viewContainer = queryElement('#view-section').element
    viewContainer.innerHTML = cards.join('\n')
}

function showEmptyMessage() {
    queryElement('#empty-message').element.hidden = false
}

async function showMotos() {
    (async () => {
        try {
            const motos = await getAllMotos()
            if (motos.data.length == 0)
                showEmptyMessage()
            else {
                const cards = createCards(motos.data)
                showMotoCards(cards)
            }
            console.log(JSON.stringify(motos))
        } 
        catch(error) {
            console.error(error)
        }
    })()
}

async function showSuccessMessage() {
    try {
        const message = await registerMoto()
        const success = !message.error ? 'Moto cadastrada!' : false
        
        queryElement('.message > span').element.innerHTML = success
        queryElement('.message > span').element.style.color = 'green'
        setTimeout(() => {
            queryElement('.message > span').element.innerHTML = ''
        }, 3000)
    }
    catch (error) {
        queryElement('.message > span').element.innerHTML = 'Falha no cadastro!'
        queryElement('.message > span').element.style.color = 'red'
        setTimeout(() => {
            queryElement('.message > span').element.innerHTML = ''
        }, 3000)
    }
}

queryElement('#form-motos').element.addEventListener('submit', event => {
    event.preventDefault()
    event.stopPropagation()
    showSuccessMessage()
})
queryElement('#show-register-page').element.addEventListener('click', event => {
    queryElement('#register-section').element.hidden = false
    queryElement('#view-section').element.hidden = true
})
queryElement('#show-registered-motos').element.addEventListener('click', event => {
    queryElement('#register-section').element.hidden = true
    queryElement('#view-section').element.hidden = false
    showMotos()
})