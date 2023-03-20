import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'Good':
        setGood(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'Neutral':
        setNeutral(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'Bad':
        setBad(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  }

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
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );

}

export default App;
