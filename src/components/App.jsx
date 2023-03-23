import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const feedbackList = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = feedback => {
    setFeedbacks(prevState => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce((prevValue, number) => {
      return prevValue + number;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedbacks.good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        paddingLeft: '40px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackList}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            feedbackList={feedbackList}
            feedbacks={feedbacks}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
