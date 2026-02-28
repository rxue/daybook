import { useState, useEffect, useRef } from 'react'
//Default export
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import './App.css'
import { ChatInput } from '../components/ChatInput'
//PascalCase = each word starts with a capital letter
//Video Tutorial Reference: https://www.youtube.com/watch?v=TtPXvEcE11E&t=3574s
//Props - argument of the function
//&& is Guard Operator in js 
//Video Tutorial reference: https://www.youtube.com/watch?v=TtPXvEcE11E&t=5075s
function ChatMessage({ message, sender }) {
  //const { message, sender } = props; // Destructuring shortcut
  return (
    <div className={sender === 'user' ? "chat-message-user" : "chat-message-robot"}>
      {sender === 'robot' && (
        <img src={RobotProfileImage} width="40" height="40" style={{ verticalAlign: 'bottom' }} />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} width="40" height="40" style={{ verticalAlign: 'bottom' }} />
      )}
    </div>
  );
}


function ChatMessages({chatMessages}) {
  //Array destructuring, where order matters
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElement = chatMessagesRef.current;
    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight;
    }
  }, [chatMessages]);//Dependency array
  return (
    <div className="chat-messages-container"
      ref={chatMessagesRef}  
    >
      {chatMessages.map(chatMessage =>
        <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id} />
      )}
    </div>
  );
}
function App() {
  const [chatMessages, setChatMessages] = useState([
    {message: "hello chatbot", sender: "user", id: "id1"},
    {message: "hello! How can i help you :)", sender: "robot", id: "id2"}
  ]);
  return (
    <>
      <ChatMessages chatMessages={chatMessages}/>
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
    </>
  );
}

export default App
