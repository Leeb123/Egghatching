const socket = new WebSocket('ws://echo.websocket.org');

const chatContainer = document.getElementById('chat-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        const messageData = {
            sender: 'You',
            text: message,
        };
        socket.send(JSON.stringify(messageData));
        appendMessage('You', message);
        messageInput.value = '';
    }
}

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatContainer.appendChild(messageDiv);
}

socket.addEventListener('message', (event) => {
    const messageData = JSON.parse(event.data);
    appendMessage(messageData.sender, messageData.text);
});

