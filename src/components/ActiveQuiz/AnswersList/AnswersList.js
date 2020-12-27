import React from 'react';
import './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem.js';

const AnswersList = (props) => {
  return (
    <ul className="AnswersList">
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            answer={answer}
          />
        );
      })}
    </ul>
  )
}

export default AnswersList
