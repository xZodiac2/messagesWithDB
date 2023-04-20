const messagesContainer = document.querySelector('.messages-container')
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

// Every 3 seconds request sends on php file to get new messages. If not have new messages, after request nothing happens
setInterval(() => {
    fetch(getMessagesURL)
        .then(resp => resp.json())
        .then(resp => checkResponse(resp))
        .catch(err => console.log(err))
}, 3000)


// this code will perform once when page loads
fetch(getMessagesURL)
    .then(resp => resp.json())
    .then(resp => checkResponse(resp))
    .catch(err => console.log(err))
