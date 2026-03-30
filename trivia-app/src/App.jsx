
import './App.css'
import Question from './components/Question'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([[]]);
  
  useEffect(() => {
    const fetchTrivia = async() => {
      try {
        // request a json of trivia questions from the API
        const question = await fetch("https://the-trivia-api.com/v2/questions?limit=2")
        // const question = await fetch("https://opentdb.com/api.php?amount=1")
        const vals = await question.json();

        // set data as the entire json object
        setData(vals);

        // separate out answer options and shuffle them
        const allAnswers = [];
        vals.map((set) => {
          allAnswers.push([set.correctAnswer, ...set.incorrectAnswers]);
        })
        allAnswers.forEach((set) => set.sort(() => Math.random() - 0.5)); // not the best shuffle, but appropriate for this limited usage
        setAnswers(allAnswers);

      } catch (error) {
        console.log(error);
      }
    }
    fetchTrivia();
  }, [])

  return (
    <>
     <h1>Trivia Game</h1>
      {data[0] && answers[0] ? <Question question={data[0].question.text} correct={data[0].correctAnswer} allAnswers={answers[0]} /> : ""}
      {data[1] && answers[1] ? <Question question={data[1].question.text} correct={data[1].correctAnswer} allAnswers={answers[1]} /> : ""}
    </>
  )
}

export default App
