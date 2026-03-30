import Button from '@mui/material/Button';
import './../App.css'

const Question = ({question, correct, allAnswers}) => {
  function correctAnswer() {
    console.log("yes!");
  }
  function incorrectAnswer() {
    console.log("nope!");
  }

  return (
    <> 
      <h2>{question}</h2>
      {/* <Button variant="outlined">
        {correct}
      </Button> */}

      {allAnswers.map(( answer, index ) => {
        if (answer == correct) {
          return <Button key={index} variant="outlined" onClick={correctAnswer}>{answer}</Button>
        } else {
          return <Button key={index} variant="outlined" onClick={incorrectAnswer}>{answer}</Button>
        }
      })}
    </>
  );
}
export default Question;