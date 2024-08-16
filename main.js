import { createMessage } from 'discord-components-core';

const app = document.getElementById('app');

const messages = [
    {
        author: {
            username: 'User1',
            avatar: 'https://example.com/avatar1.png',
        },
        content: 'Hello!',
        attachments: [
            {
                url: 'https://example.com/image.png',
                type: 'image'
            }
        ]
    },
    {
        author: {
            username: 'User2',
            avatar: 'https://example.com/avatar2.png',
        },
        content: 'Here is a file!',
        attachments: [
            {
                url: 'https://example.com/document.pdf',
                type: 'file',
                name: 'document.pdf'
            }
        ]
    }
];

messages.forEach(message => {
    const messageElement = createMessage(message);
    app.appendChild(messageElement);
});
