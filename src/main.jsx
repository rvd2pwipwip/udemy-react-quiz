import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import Start from "./Start.jsx";

const Main = ({ status, numQuestions }) => {
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <Start numQuestions={numQuestions} />}
    </main>
  );
};

export default Main;
