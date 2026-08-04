import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import Start from "./Start.jsx";
import Question from "./Question.jsx";
import NextButton from "./NextButton";
import Progress from "./Progress.jsx";
import Finish from "./Finish.jsx";
import Timer from "./Timer.jsx";

const Main = ({
  status,
  numQuestions,
  dispatch,
  questions,
  index,
  answer,
  points,
  maxPossiblePoints,
  highscore,
  secondsRemaining,
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
          <footer>
            <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
            <NextButton
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
            />
          </footer>
        </>
      )}
      {status === "finished" && (
        <Finish
          points={points}
          maxPossiblePoints={maxPossiblePoints}
          numQuestions={numQuestions}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
    </main>
  );
};

export default Main;
