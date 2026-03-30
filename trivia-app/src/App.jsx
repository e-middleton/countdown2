
import './App.css'
import Question from './components/Question'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  useEffect(() => {
    const fetchTrivia = async() => {
      console.log("running")
      try {
        const question = await fetch("https://the-trivia-api.com/v2/questions?limit=1")
        // const question = await fetch("https://opentdb.com/api.php?amount=1")
        const vals = await question.json();
        // console.log(vals[0]);
        setData(vals);
        const allAnswers = [vals[0].correctAnswer, ...vals[0].incorrectAnswers];
        console.log(allAnswers);
        allAnswers.sort(() => Math.random() - 0.5); // not the best shuffle, but appropriate for this limited usage
        setAnswers(allAnswers);

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
      {data[0] && answers[0] ? <Question question={data[0].question.text} correct={data[0].correctAnswer} allAnswers={answers} /> : ""}
    </>
  )
}

export default App
