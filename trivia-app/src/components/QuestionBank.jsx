import Question from "./Question";
import './../App.css';

const QuestionBank = ({ data, answers }) => {

  return (
    <>
      <div className="questionBank">
        <h3>Available Questions</h3>
        {
          data.map((trivia, index) => {
            return <Question key={index} question={trivia.question.text} correct={trivia.correctAnswer} allAnswers={answers[index]}/>
          }) 
        }
      </div>
    </>
  );
}
export default QuestionBank;