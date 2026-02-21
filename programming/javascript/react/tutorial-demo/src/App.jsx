import { useState } from 'react'

function ChatInput({chatMessages, setChatMessages}) {
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
    <>
      <input 
        placeholder="write message here to send to chatbox" 
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button onClick={sendMessage}>Click to send</button>
    </>
  );
}
//PascalCase = each word starts with a capital letter
//Video Tutorial Reference: https://www.youtube.com/watch?v=TtPXvEcE11E&t=3574s
//Props - argument of the function
//&& is Guard Operator in js 
//Video Tutorial reference: https://www.youtube.com/watch?v=TtPXvEcE11E&t=5075s
function ChatMessage({ message, sender }) {
  //const { message, sender } = props; // Destructuring shortcut
  return (
    <div>
      {sender === 'robot' && (
        <img src="robot.png" width="40" height="40" style={{ verticalAlign: 'bottom' }} />
      )}
      {message}
      {sender === 'user' && (
        <img src="user.png" width="40" height="40" style={{ verticalAlign: 'bottom' }} />
      )}
    </div>
  );
}


function ChatMessages({chatMessages}) {
  //Array destructuring, where order matters

  return (
    <>
      {chatMessages.map((chatMessage) =>
        <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id} />
      )}
    </>
  );
}
function App() {
  const [chatMessages, setChatMessages] = useState([
    {message: "hello chatbot", sender: "user", id: "id1"},
    {message: "hello! How can i help you :)", sender: "robot", id: "id2"}
  ]);
  return (
    <div>
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
      <ChatMessages chatMessages={chatMessages}/>
    </div>
  );
}

export default App
