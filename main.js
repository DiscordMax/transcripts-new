import { createMessage } from 'discord-components-core';

const app = document.getElementById('app');

// Extract the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const transcriptUrl = urlParams.get('url');

if (transcriptUrl) {
    fetch(transcriptUrl)
        .then(response => response.text())
        .then(data => {
            // Assuming the data is in HTML format, you need to parse it accordingly
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            
            // Assuming messages are structured in a specific format in the HTML
            const messages = Array.from(doc.querySelectorAll('.message')); 
            messages.forEach(messageElement => {
                const message = {
                    author: {
                        username: messageElement.querySelector('.username').textContent,
                        avatar: messageElement.querySelector('.avatar').src,
                    },
                    content: messageElement.querySelector('.content').innerHTML,
                    attachments: Array.from(messageElement.querySelectorAll('.attachment')).map(attachment => ({
                        url: attachment.href,
                        type: attachment.dataset.type,
                        name: attachment.textContent
                    }))
                };
                const messageElement = createMessage(message);
                app.appendChild(messageElement);
            });
        })
        .catch(error => {
            console.error('Error fetching the transcript:', error);
            app.innerHTML = '<p>Failed to load transcript.</p>';
        });
} else {
    app.innerHTML = '<p>No transcript URL provided.</p>';
}

