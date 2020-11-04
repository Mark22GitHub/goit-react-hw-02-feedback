import React, { Component } from 'react';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';
import Section from './Components/Section/Section'
import Notification from './Components/Notification/Notification'

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
      <>
        <Section title={'Please leave your feedback'}>
          <FeedbackOptions getQuantityFeedback={this.getQuantityFeedback} />
        </Section>

        <Section title={'Statistics:'}>
          {this.countTotalFeedback() > 0 ? 
          <Statistics good={good}
            neutral={neutral}
            bad={bad}
            getQuantityFeedback={this.getQuantityFeedback}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} /> :
          
          <Notification message={'No feedback given'} />}
        </Section>
  
      </>
      
    );
  }
}

export default App;
