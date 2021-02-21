import React from 'react';
import './FinishedQuiz.css';

const FinishedQuiz = props => {
  return (
    <div className="FinishedQuiz">
      <h1>Finished</h1>

      <div>

        <ul>
          <li>
            <strong>1. </strong>
            Question
            <i className="fa fa-times success" />
          </li>
        </ul>
        <ul>
          <li>
            <strong>1. </strong>
            Question
            <i className="fa fa-check err" />
          </li>
        </ul>

        <p>Answers 1 of 2</p>

        <div>
          <button>Reprat</button>
        </div>

      </div>

    </div>
  )
}

export default FinishedQuiz;
