import Button from '@mui/material/Button';
import './../App.css'
import { useState } from 'react';

const Question = ({question, correct, allAnswers}) => {
  function correctAnswer(index) {
    console.log("yes!");
    if (index === 0) {
      setButton1(!button1);
    } else if (index === 1) {
      setButton2(!button2);
    } else if (index === 2) {
      setButton3(!button3);
    } else {
      setButton4(!button4);
    }
  }
  function incorrectAnswer(index) {
    console.log("nope!");
    if (index === 0) {
      setButton1(!button1);
    } else if (index === 1) {
      setButton2(!button2);
    } else if (index === 2) {
      setButton3(!button3);
    } else {
      setButton4(!button4);
    }
  }

  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);

  const buttons = [button1, button2, button3, button4];

  return (
    <> 
      <h2>{question}</h2>
      {/* <Button variant="outlined">
        {correct}
      </Button> */}

      {allAnswers.map(( answer, index ) => {
        if (answer == correct) {
          return (
            <Button key={index} variant="outlined" onClick={() => correctAnswer(index)} color={buttons[index] ? "success" : ""}>
              {answer}
            </Button>
          );
        } else {
          return (
            <Button key={index} variant="outlined" onClick={() => incorrectAnswer(index)} color={buttons[index] ? "error": ""}>
              {answer}
            </Button>
          )
        }
      })}
    </>
  );
}
export default Question;