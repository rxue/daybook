import { useState } from 'react'

function ChatInput() {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function sendMessage() {
    console.log(inputText);
  }
  return (
    <>
      <input 
        placeholder="write message here to send to chatbox" 
        size="30"
        onChange={saveInputText} 
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
      {sender === 'chatbot' && (
        <img src="robot.png" width="40" height="40" style={{ verticalAlign: 'bottom' }} />
      )}
      {message}
      {sender === 'user' && (
        <img src="user.png" width="40" height="40" style={{ verticalAlign: 'bottom' }} />
      )}
    </div>
  );
}


function ChatMessages() {
  //Array destructuring, where order matters
  const [chatMessages, setChatMessages] = useState([
    {message: "hello chatbot", sender: "user", id: "id1"},
    {message: "hello! How can i help you :)", sender: "chatbot", id: "id2"}
  ]);
  function sendMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message:"new message",
        sender: "user",
        id: crypto.randomUUID()
      }
    ]);
    console.log(chatMessages);
  }
  return (
    <>
      <button onClick={sendMessage}>Send message</button>
      {chatMessages.map((chatMessage) =>
        <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id} />
      )}
    </>
  );
}
function App() {

  return (
    <div>
      <ChatInput />
      <ChatMessages />
    </div>
  );
}

export default App
