import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import Start from "./Start.jsx";
import Question from "./Question.jsx";

const Main = ({ status, numQuestions, dispatch }) => {
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <Start numQuestions={numQuestions} dispatch={dispatch} />
      )}
      {status === "active" && <Question />}
    </main>
  );
};

export default Main;
