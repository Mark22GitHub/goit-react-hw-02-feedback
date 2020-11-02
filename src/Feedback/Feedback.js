import React from 'react';

const Feedback = ({ good, neutral, bad , getQuantityFeedback, countTotalFeedback , countPositiveFeedbackPercentage}) => {
  // const { good, neutral, bad , getQuantityFeedback} = props
  
    return (
        <div className='container'>
        <h1>Please leave feedback</h1>
        <div>
          <button name="good" onClick={getQuantityFeedback} >good</button>
          <button name="neutral" onClick={getQuantityFeedback} >neutral</button>
          <button name="bad" onClick={getQuantityFeedback} >bad</button>
            </div>
            
            <h2>Statistics</h2>
            <ul>
          <li className="item">Good: {good}</li>
                <li className="item">Neutral: {neutral}</li>
                <li className="item">Bad: {bad}</li>
                <li className="item">Total: {countTotalFeedback()}</li>
          <li className="item">Positive Feedback: {countTotalFeedback() ? countPositiveFeedbackPercentage().toFixed(0) : 0}%</li>
            </ul>

      </div>
    );
};

export default Feedback;