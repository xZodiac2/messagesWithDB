const messagesContainer = document.querySelector('.messages-container')
const submitButton = document.querySelector('.submit')
const getMessagesURL = '/www/getMessages.php'
let messages = []


function fillMessagesContainer() {
    messagesContainer.innerHTML = ''

    messages.forEach(messageData => {
        const message = document.createElement('div')
        message.classList.add('message')

        const messageUserName = document.createElement('h2')
        const messageBody = document.createElement('p')

        const messageUserNameText = document.createTextNode(messageData.userName)
        const messageBodyText = document.createTextNode(messageData.message)

        messageUserName.appendChild(messageUserNameText)
        messageBody.appendChild(messageBodyText)

        message.appendChild(messageUserName)
        message.appendChild(messageBody)

        messagesContainer.appendChild(message)
    })
}

function checkResponse(response) {
    if (messages !== response) {
        messages = response
        fillMessagesContainer()
    }
}

function sendRequest() {
    fetch(getMessagesURL)
        .then(resp => resp.json())
        .then(resp => checkResponse(resp))
        .catch(err => console.log(err))
}
sendRequest()

submitButton.addEventListener('click', sendRequest)
