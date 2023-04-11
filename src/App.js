import React, {useState} from "react";
import './App.css';


function App() {
  const [message, setMessage] = useState('');
  const [messageValidity, setMessageValidity] = useState('Invalid');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setMessage(value);
    if (value.trim().length < 4) {
      setMessageValidity("Invalid");
    } else {
      setMessageValidity("Valid");
    }
  }

  return (
    <form>
      <label>Your Message</label>
      <input type="text" value={message} onChange={handleInputChange}></input>
      <p>{messageValidity} Message</p>
    </form>
  );
}

export default App;
