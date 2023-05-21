import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackBtn';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import React from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  function handleButtonClick(e) {
    switch (e) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleButtonClick} />

      <Section title="Statistics" />

      {total !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};