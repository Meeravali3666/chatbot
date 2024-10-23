document.getElementById('send-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    if (!userInput.trim()) return;

    // Use textContent instead of innerHTML to escape user input (avoid HTML injection)
    appendMessage('You', userInput, 'user-message', 'https://cdn-icons-png.flaticon.com/512/2922/2922561.png', false);
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
            const markdownResponse = data.response;
            const htmlResponse = processMarkdown(markdownResponse);  // Process Markdown response
            appendMessage('Bot', htmlResponse, 'bot-message', 'https://cdn-icons-png.flaticon.com/512/4712/4712100.png', true);
        } else if (data.error) {
            appendMessage('Bot', 'Error occurred: ' + data.error, 'bot-message', 'https://cdn-icons-png.flaticon.com/512/4712/4712100.png');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        appendMessage('Bot', 'Failed to connect to the server.', 'bot-message', 'https://cdn-icons-png.flaticon.com/512/4712/4712100.png');
    });
});

// Function to append messages to chat, now with markdown support for bot and plain text for user
function appendMessage(sender, message, messageType, iconUrl, isHtml = false) {
    const chatBox = document.getElementById('chat-box');
    const messageElem = document.createElement('div');
    messageElem.classList.add('message', messageType);

    const imgElem = document.createElement('img');
    imgElem.src = iconUrl;
    messageElem.appendChild(imgElem);

    const textElem = document.createElement('div');  // Using div to support HTML or text
    if (isHtml) {
        textElem.innerHTML = `<strong>${sender}:</strong> ${message}`;  // Display bot response with HTML
    } else {
        textElem.textContent = `${sender}: ${message}`;  // Escape user input by using textContent
    }
    messageElem.appendChild(textElem);

    chatBox.appendChild(messageElem);
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll to the bottom
}

// Function to convert Markdown to HTML using Showdown
function processMarkdown(markdownText) {
    const converter = new showdown.Converter();
    return converter.makeHtml(markdownText);  // Convert Markdown to HTML
}
