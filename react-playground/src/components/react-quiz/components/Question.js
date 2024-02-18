import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <p>{question.question}</p>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
