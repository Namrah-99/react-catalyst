import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  console.log(questions[index]);
  console.log(questions[index].question);
  console.log(questions[index].options);
  return (
    <div>
      <p>{questions[index].question}</p>
      <Options />
    </div>
  );
}

export default Question;
