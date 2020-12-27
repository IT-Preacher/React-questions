import React from 'react';
import './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList.js'

const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>1.</strong>&nbsp;
          How's the going?
        </span>

        <small>1 at 15</small>
      </p>
      <AnswersList
        answer={props.answers}
      />
    </div>
  )
}

export default ActiveQuiz;
