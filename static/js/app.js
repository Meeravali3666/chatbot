document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    if (!userInput.trim()) return;

    appendMessage('You', userInput);
    document.getElementById('user-input').value = '';

    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.response) {
            appendMessage('Bot', data.response);
        } else if (data.error) {
            appendMessage('Error', 'There was an issue processing your message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        appendMessage('Error', 'Failed to reach the server.');
    });
});

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElem = document.createElement('div');
    messageElem.classList.add('message');
    messageElem.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElem);
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll
}
