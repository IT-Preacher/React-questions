import React from 'react';
import './AnswersList.css';
import AnswerItem from './AnswerItem/AnswerItem.js';

const AnswersList = (props) => {
  /*const answersList = props.answer.map((answer, index) => {
    <AnswerItem
      key={index}
      answer={answer}
    />
  });*/

  return(
    <ul className="AnswersList">
      { props.answer.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
          />
        )
      }) }
    </ul>
  )
}

export default AnswersList
