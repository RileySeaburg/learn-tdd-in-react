import {useState} from 'react';

const NewMessageForm = ({ onSend }) => {
    // Set input state options
    const [inputText, setInputText] = useState('');
    // Respond to change in input.
    const handleTextChange = event => {
        setInputText(event.target.value);
    }

    // Clear the input on button click
    const handleSend = () => {
        console.log(typeof onSend);
        onSend(inputText)
        setInputText("");
    }
    return (
        <div>
            <input type="text" data-testid="messageText" value={inputText} onChange={handleTextChange} />
            <button data-testid="sendButton" onClick={handleSend} >Send</button>
        </div>
    )
};

export default NewMessageForm;
