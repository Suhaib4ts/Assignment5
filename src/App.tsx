import React from 'react';
import './App.css';
import { quizData } from "./quizData";
import { Question } from "./quizData"
import { useState } from "react";



function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const onClick = (selectedAnswer: string) => {
    const currentQuestion: Question = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };


  return (
    <div className="App">
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {quizData.length}
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestionIndex + 1}/{quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestionIndex].question}
            </div>
            <div className="answer-options">
              {quizData[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
