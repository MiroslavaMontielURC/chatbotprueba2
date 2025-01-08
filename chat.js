import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

window.onload = () => {
    createChat({
        webhookUrl: 'https://n8n-tutorial-7tma.onrender.com/webhook/4a70aa85-f5e6-4858-acf7-c62db86c6b7e/chat',
    });
};

