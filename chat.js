const API_URL = 'https://n8n-tutorial-7tma.onrender.com/webhook/4a70aa85-f5e6-4858-acf7-c62db86c6b7e/chat';

function addMessage(message, sender = 'user') {
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.className = `message ${sender}`;
  messageElement.innerHTML = message.replace(/\n/g, '<br>'); // Formatea saltos de línea
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar al último mensaje
}

async function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const userMessage = messageInput.value;
  if (!userMessage) return;

  addMessage(userMessage, 'user');
  messageInput.value = '';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    const botResponse = data.response.text; // Extrae el texto relevante
    addMessage(botResponse, 'bot');
  } catch (error) {
    addMessage('Error al conectar con el servidor.', 'bot');
  }
}
