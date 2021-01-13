import React from 'react';
import './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList.js'

const ActiveQuiz = (props) => {
  return(
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>1.</strong>&nbsp;
          {props.question}
        </span>

        <small>1 at 15</small>
      </p>
      <AnswersList
        answer={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
}

export default ActiveQuiz;
