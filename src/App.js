import './App.css';
import Questions from './questions.json';
import React, { useState } from 'react';

function App() {
  const [counter, setCount] = useState(0);
  const options = [];
  options.push(Questions[counter].correct_answer);
  for (let i = 0; i < Questions[counter].incorrect_answers.length; i++) {
    options.push(Questions[counter].incorrect_answers[i]);
  }
  const [correctAnswer, setCorrect] = useState(0);
  const [incorrectAnswer, setIncorrect] = useState(0);
  return (
    <div className='questionBodyContainer'>
      <div className="questionBody">
          <div className="progressBarTop">
          </div>
          <div className="questionInfo">
            <div className='category'>
              <div class="text-muted">
                { Questions[counter].category }
              </div>
            </div>
            <div className="questionNumberAndTime">
              <div className='questionCount'>
                <h1 class="display-6">Question {counter + 1} of {Questions.length}</h1>
              </div>
              <div className="timer">
                timer
              </div>
            </div>
            <div className="rating">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
      
          </div>
          <div className="question">
            <h3>{ Questions[counter].question }</h3>
          </div>
          <div className='optionsDiv'>
            <div className="options">
                <button onClick={() => setCorrect(!correctAnswer)} type="button" class="btn btn-outline-secondary">
                  { options[0] }
                </button>
                <button onClick={() => setIncorrect(!incorrectAnswer)} type="button" class="btn btn-outline-secondary">
                  { options[1] }
                </button>
                </div>
            <div className="options">
                <button onClick={() => setIncorrect(!incorrectAnswer)} type="button" class="btn btn-outline-secondary">
                  { options[2] }
                </button>
                <button onClick={() => setIncorrect(!incorrectAnswer)} type="button" class="btn btn-outline-secondary">
                  { options[3] }
                </button>
            </div>
          </div>
          <div className="result">
            {
            correctAnswer ? 'Correct' : ''
            }
            {
              incorrectAnswer ? 'Incorrect' : ''
            }
          </div>
          <div className="nextQuestion">
            <button onClick={() => setCount(counter + 1)} type="button" class="btn btn-dark">
              Next Question
            </button>
          </div>
          <div className="progressBarBottom"></div>
      </div>
    </div>
  );
}

export default App;
