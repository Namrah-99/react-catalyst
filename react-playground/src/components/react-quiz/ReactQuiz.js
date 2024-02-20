import { useEffect, useReducer } from "react";
import Header from "./with-context/components/Header";
import MainQuizSection from "./with-context/components/MainQuizSection";
import "./ReactQuiz.css";
import Loader from "./with-context/components/Loader";
import Error from "./with-context/components/Error";
import StartScreen from "./with-context/components/StartScreen";
import Question from "./with-context/components/Question";
import NextButton from "./with-context/components/NextButton";
import Progress from "./with-context/components/Progress";
import FinishScreen from "./with-context/components/FinishScreen";
import Footer from "./with-context/components/Footer";
import Timer from "./with-context/components/Timer";
import { useQuiz } from "./with-context/contexts/QuizContext";

export default function ReactQuiz() {
  const { status } = useQuiz();

  return (
    <div className="react-quiz-main-container">
      <div className="react-quiz-app">
        <Header />
        <MainQuizSection>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen />}
          {status === "active" && (
            <>
              <Progress />
              <Question />
              <Footer>
                <Timer />
                <NextButton />
              </Footer>
            </>
          )}
          {status === "finished" && <FinishScreen />}
        </MainQuizSection>
      </div>
    </div>
  );
}
