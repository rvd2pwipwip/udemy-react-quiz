import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  const question = state.questions[state.index];

  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    default:
      throw new Error("Action unknown");
  }
};

function App() {
  const [{ questions, status, index, answer }, dispatch] = React.useReducer(
    reducer,
    initialState,
  );

  const numQuestions = questions.length;

  React.useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return dispatch({ type: "dataReceived", payload: data });
      })
      .catch(() => {
        return dispatch({ type: "dataFailed" });
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Main
        status={status}
        numQuestions={numQuestions}
        dispatch={dispatch}
        questions={questions}
        index={index}
        answer={answer}
      />
    </div>
  );
}

export default App;
