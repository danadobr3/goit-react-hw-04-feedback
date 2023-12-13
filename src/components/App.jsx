import { useState } from 'react';

import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";


function App () {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  const handleLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [option]: prevFeedback[option] + 1 }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round((feedback.good / total) * 100) || 0;


  return (
      <>
        <Section title='Please leave a feedback'>
          <FeedbackOptions
          options={feedback}
            onLeaveFeedback={handleLeaveFeedback} 
          />
          { total === 0 ? (
              <Notification message="There is no feedback"></Notification>) : (
              <Statistics
                good={feedback.good}
                neutral={feedback.neutral}
                bad={feedback.bad}
                total={total}
                positivePercentage={positiveFeedbackPercentage}
            />)}
        </Section>
      </>
    );
}

export default App;