
import { useState } from "react";
import "./App.css";

import questions from "./constant/question.json";
import Question from "./components/question";
import Result from "./components/result";


function App() {
 
  const [currentQuestion, setCurrentQuestion] = useState(0); // It helps to render first question always
  const [userAnswers, setUserAnswers] = useState([]) // It stores the user answer


  // Keep all the logic in App.jsx

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect])
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  }

  return (
    <div className="App">
      <h2>Quiz App</h2>

      {/*  question component*/}

      { currentQuestion < questions.length &&
        <Question
        question={questions[currentQuestion]}
        onAnswerClick={handleNextQuestion}
      />}

      {/* result component */}

      { currentQuestion === questions.length &&
        <Result userAnswers={userAnswers} questions={questions} resetQuiz={resetQuiz} />}

    </div>
  );
}

export default App
