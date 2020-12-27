import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'
/*import classes from './Quiz.css';
className={classes.Quiz}*/

export default class Quize extends Component {
  state = {
    quiz: [],
  }

  render(){
    return(
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Quiz</h1>
          <ActiveQuiz />
        </div>
      </div>
    )
  }
}
