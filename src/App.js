import { useState } from 'react'
import Form from './Form.js';
import Date from './Date.js';
import getRandomQuote from './quote.js';
import './App.css';

const App = () => {
  const [activityInput, setActivityInput] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    
    setActivityInput("")
    
  }

  return (
    <div>
      <h1>To Do App</h1>
      <Form 
        activityInput={activityInput} 
        setActivityInput={setActivityInput}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App;
