import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.js'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz.js'
/*import classes from './Quiz.css';
className={classes.Quiz}*/

class Quiz extends Component {
  /**
  * Object - state
  * @param {number} activeQuestion - displaying the number of questions
  * @param {obj: { id: 'success' or 'err'}} answerState - true or false answer
  * @param {array} quiz.[{
      @param {string} question - text of question
      @param {number} rightAnswerId - id of the correct answer
      @param {number} id
      @param {array} answers.[{
        @param {string} text - text of response
        @param {number} id - id of response
      }] - array with response
    }] - array with questions and their parameters
  */
  state = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'What is JavaScript?',
        rightAnswerId: 1,
        id: 1,
        answers:[
          {text: 'Programming language', id: 1},
          {text: 'The Sumerian language', id:2},
          {text: 'Nickname of Churchill in Tinder', id:3},
          {text: 'Lots of beeches, hard to understand', id: 4}
        ],
      },
      {
        question: 'What is C++',
        rightAnswerId: 1,
        id: 2,
        answers:[
          {text: 'Programming language', id: 1},
          {text: 'The Sumerian language', id:2},
          {text: 'Nickname of Churchill in Tinder', id:3},
          {text: 'Lots of beeches, hard to understand', id: 4}
        ],
      }
    ],
  }

  /**
  * @param  {number} answerId, geting id of question
  * @return {numder} activeQuestion + 1
  *
  *
  */
  onAnswerClickHandler = (answerId) => {
    if(this.state.answerState){

      const key = Object.keys(this.state.answerState)[0];

      if(this.state.answerState[key] === 'success'){
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];

    if(question.rightAnswerId === answerId){

      this.setState({
        answerState: {[answerId]: 'success'}
      });

      const timeout = window.setTimeout( () => {

        if(this.isQuizFinished()){
          this.setState({
            isFinished: true
          })
        }else{

          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        window.clearTimeout(timeout);
      }, 1000);

    }else{

      this.setState({
        answerState: {[answerId]: 'err'}
      });
      console.log(this.state.answerState);
    }
  };

  /**
  * function - question counter
  * @param {number} activeQuestion - get old number of active question number from object state
  * @return {number} updated number of active question
  */
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render(){
    return(
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Quiz</h1>
          {
            this.state.isFinished
            ? <FinishedQuiz />
            :<ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}

export default Quiz;
