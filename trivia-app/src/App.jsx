
import './App.css'
import Question from './components/Question'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchTrivia = async() => {
      console.log("running")
      try {
        const question = await fetch("https://the-trivia-api.com/v2/questions?limit=1")
        // const question = await fetch("https://opentdb.com/api.php?amount=1")
        const vals = await question.json();
        console.log(vals[0]);
        setData(vals);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrivia();
    console.log("done running!")
  }, [])

  return (
    <>
     <h1>Trivia Game</h1>
      {data[0] ? <Question question={data[0].question.text} correct={data[0].correctAnswer} wrong={data[0].incorrectAnswers} /> : ""}
    </>
  )
}

export default App
