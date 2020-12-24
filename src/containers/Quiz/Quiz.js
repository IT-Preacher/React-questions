import React, {Component} from 'react';
import './Quiz.css';
/*import classes from './Quiz.css';
className={classes.Quiz}*/

export default class Quize extends Component {
  state = {
    quiz: [],
  }
  
  render(){
    return(
      <div className="Quiz">
        <h1>Quiz</h1>
      </div>
    )
  }
}
