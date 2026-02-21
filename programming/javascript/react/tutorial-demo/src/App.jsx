function ChatInput() {
  return (
    <>
      <input 
        placeholder="write message here to send to chatbox" 
        size="30" 
      />
      <button>Click to send</button>
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

function App() {
  return (
    <div>
      <ChatInput />
      <ChatMessage 
        message="hello chatbot" 
        sender="user" 
      />
      <ChatMessage 
        message="hello! How can I help you :)" 
        sender="chatbot" 
      />
    </div>
  );
}

export default App
