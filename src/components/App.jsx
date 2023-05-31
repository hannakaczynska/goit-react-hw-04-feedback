import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { useEffect, useState } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const step = 1;

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const stateValues = { good, neutral, bad };

  const onLeaveFeedback = name => {
    if (name === 'good') {
      setGood(good + step);
    }
    if (name === 'neutral') {
      setNeutral(neutral + step);
    }
    if (name === 'bad') {
      setBad(bad + step);
    }
  };

  useEffect(() => {
    const allVotes = good + neutral + bad;
    setTotal(allVotes);
  }, [good, neutral, bad]);

  useEffect(() => {
    const percentage = Math.round((good * 100) / total);
    setPositivePercentage(percentage);
  }, [good, neutral, bad, total]);

  return (
    <>
      <FeedbackOptions stateValues={stateValues} onClick={onLeaveFeedback} />
      <Section title="Statictics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};
