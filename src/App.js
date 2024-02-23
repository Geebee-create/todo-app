import { useState } from 'react'
import Form from './Form.js';
import Date from './Date.js';
import getRandomQuote from './quote.js';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  setDates([...Date, { day: parseInt(dayInput), month: parseInt(monthInput), year: parseInt(yearInput) }])
 const [activityInput, setActivityInput] = useState("")

 const handleGenerateQuote = () => {
  const randomQuote = getRandomQuote();
  setQuote(randomQuote);

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setActivityInput("")
    
  }
}

  return (
    <div>
      <h1>To Do App</h1>
      <button onClick={handleGenerateQuote}>Generate Positive Quote</button>
      {quote && <p>{quote}</p>}
      <Form 
        activityInput={activityInput} 
        setActivityInput={setActivityInput}
        handleSubmit={handleSubmit}
      />
       {Date.map((Date) => {
        return <Date day={Date.day} month={Date.month} year={Date.year} activityInput={Date.activityInput}/>
      })}
    </div>
  )
}

export default App;
