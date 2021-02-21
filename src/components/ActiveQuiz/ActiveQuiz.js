import React from 'react';
import './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList.js'

const ActiveQuiz = (props) => {
  return(
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
          {props.question}
        </span>

        <small>{props.answerNumber} from {props.quizLength}</small>
      </p>
      <AnswersList
        state={props.state}
        answer={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
}

export default ActiveQuiz;
