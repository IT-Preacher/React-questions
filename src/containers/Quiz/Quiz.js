import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'
/*import classes from './Quiz.css';
className={classes.Quiz}*/

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers:[
          {text: 'How old are You?'},
          {text: 'How old are You?'},
          {text: 'How old are You?'},
          {text: 'How old are You?'}
        ],
      }
    ],
  }

  render(){
    return(
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;
