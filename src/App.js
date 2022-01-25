import {useState} from 'react'
import MessageList from './components/MessageList';
import NewMessageForm from "./components/NewMessageForm";


const App = () => {
  const [messages, setMessages] = useState([])
  const handleSend = newMessage => {
    // Store the message and the message children.
    setMessages([newMessage, ...messages]);
  };

  console.log(typeof handleSend);
  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
};

export default App;
