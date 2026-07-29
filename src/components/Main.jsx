import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import Start from "./Start.jsx";
import Question from "./Question.jsx";
import NextButton from "./NextButton";
import Progress from "./Progress.jsx";

const Main = ({
  status,
  numQuestions,
  dispatch,
  questions,
  index,
  answer,
  points,
  maxPossiblePoints,
}) => {
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <Start numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <>
          <Progress
            index={index}
            numQuestions={numQuestions}
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            answer={answer}
          />
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <NextButton dispatch={dispatch} answer={answer} />
        </>
      )}
    </main>
  );
};

export default Main;
