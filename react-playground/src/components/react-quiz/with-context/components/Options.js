import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const [questions, index, dispatch, answer] = useQuiz();
  const hasAnswered = answer !== null;
  console.log(questions[index]);

  return (
    <div>abc</div>
    // <div className="options">
    //   {questions[index]?.options.map((option, index) => (
    //     <button
    //       className={`btn btn-option ${index === answer ? "answer" : ""} ${
    //         hasAnswered
    //           ? index === questions[index]?.correctOption
    //             ? "correct"
    //             : "wrong"
    //           : ""
    //       }`}
    //       key={option}
    //       disabled={hasAnswered}
    //       onClick={() => dispatch({ type: "newAnswer", payload: index })}
    //     >
    //       {option}
    //     </button>
    //   ))}
    // </div>
  );
}

export default Options;
