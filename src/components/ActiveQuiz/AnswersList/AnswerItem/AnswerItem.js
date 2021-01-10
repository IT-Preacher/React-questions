import React from 'react';
import './AnswerItem.css';

const AnswerItem = props => {
  console.log(props.answer.text);
  return(
    <li className="AnswerItem">
      {props.answer.text}
    </li>
  )
}

export default AnswerItem
