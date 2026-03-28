import Button from '@mui/material/Button';

const Question = ({question, correct, wrong}) => {
  return (
    <> 
      <h2>{question}</h2>
      <Button variant="outlined">
        {correct}
      </Button>

      {wrong.map(( answer, index ) => {
        return <Button key={index} variant="outlined">{answer}</Button>
      })}
    </>
  );
}
export default Question;