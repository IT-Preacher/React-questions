import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'
/*import classes from './Quiz.css';
className={classes.Quiz}*/

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'What is JavaScript?',
        rightAnswerId: 1,
        answers:[
          {text: 'Programming language', id: 1},
          {text: 'The Sumerian language', id:2},
          {text: 'Nickname of Churchill in Tinder', id:3},
          {text: 'Lots of beeches, hard to understand', id: 4}
        ],
      }
    ],
  }

  onAnswerClickHandler = (answerId) => {
    console.log('Answer Id: ', answerId);
  }

  render(){
    return(
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;
