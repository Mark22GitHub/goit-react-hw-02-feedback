import React from 'react';
import styles from './Statistics.module.css'
import PropTypes from 'prop-types'

const Statistics = ({ good, neutral, bad , countTotalFeedback , countPositiveFeedbackPercentage}) => {
    return (
        <ul className={styles.list}>
                <li className="item">Good: {good}</li>
                <li className="item">Neutral: {neutral}</li>
                <li className="item">Bad: {bad}</li>
                <li className="item">Total: {countTotalFeedback()}</li>
                <li className="item">Positive Feedback: {countTotalFeedback() ? countPositiveFeedbackPercentage().toFixed(0) : 0}%</li>
            </ul>
    );
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    countTotalFeedback: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func

}