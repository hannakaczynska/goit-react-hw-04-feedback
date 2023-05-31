import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const colors = {
  good: css.buttonGood,
  neutral: css.buttonNeutral,
  bad: css.buttonBad,
};

const FeedbackOptions = ({ stateValues, onClick }) => {
  return (
    <>
      <h3 className={css.feedbackTitle}>Please leave feedback</h3>
      <div className={css.buttonList}>
        {Object.entries(stateValues).map(([stateKey, stateValue]) => {
          return (
            <button
              className={colors[stateKey]}
              key={stateKey}
              name={stateKey}
              type="button"
              value={stateValue}
              onClick={() => onClick(stateKey)}
            >
              {stateKey}
            </button>
          );
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  stateValues: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
