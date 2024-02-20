import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, index, dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;
  const quest = questions[index];

  return (
    <div>
      <p>{questions[index].question}</p>
      <div className="options">
        {quest.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === quest.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
