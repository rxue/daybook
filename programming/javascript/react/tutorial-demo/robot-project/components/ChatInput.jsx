import { useState } from 'react'
import { Chatbot } from 'supersimpledev'

export function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID()
      }
    ];

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
      }
    ]);
    setInputText('');//Controlled input
  }
  return (
    // 1. step to make Flexbox: create a container
    <div className="chat-input-container">
      <input
        placeholder="write message here to send to chatbox"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Click to send</button>
    </div>
  );
}