import React, { Component } from 'react';
import Feedback from './Feedback/Feedback'

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  getQuantityFeedback = (e) => {
    const getName = e.target.name
    this.setState(prevState => ({
      [getName]: prevState[getName]+1
    }))
}

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return this.state.good / this.countTotalFeedback() * 100
  }
  
  render() {
    const {good, neutral, bad } = this.state
    return (
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        getQuantityFeedback={this.getQuantityFeedback}
        countTotalFeedback={this.countTotalFeedback}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
      />
    );
  }
}

export default App;
