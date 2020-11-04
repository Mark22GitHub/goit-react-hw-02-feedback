import React from 'react';
import styles from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'

const FeedbackOptions = ({getQuantityFeedback}) => {
    return (
        <div>
          <button className={styles.button_g} name="good" onClick={getQuantityFeedback} >Good</button>
          <button className={styles.button_n} name="neutral" onClick={getQuantityFeedback} >Neutral</button>
          <button className={styles.button_b} name="bad" onClick={getQuantityFeedback} >Bad</button>
        </div>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    getQuantityFeedback: PropTypes.func
}