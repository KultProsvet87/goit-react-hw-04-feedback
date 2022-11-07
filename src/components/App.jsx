import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification.Styled';
import { Section } from './Section/section';
import { Statistics } from './Statistics/Statistics';

const MainTitle = 'Pleas leave feedbeck';
const StatisticTitle = 'Statistic';
const NotificationMessage = 'There is no feedbacks';

export const App = () => {
  const [feedBacks, setFeedBacks] = useState({ Good: 0, Neutral: 0, Bad: 0 });

  const onLeaveFeedback = feedBackType => {
    setFeedBacks({ ...feedBacks, [feedBackType]: feedBacks[feedBackType] + 1 });
  };

  const totalFeedBeck = () => {
    const values = Object.values(feedBacks);
    return values.reduce((acc, value) => acc + value, 0);
  };

  const positivePercentage = () => {
    return Math.round((feedBacks.Good * 100) / totalFeedBeck());
  };

  return (
    <>
      <div>React homework template</div>
      <Section title={MainTitle}>
        <FeedbackOptions
          options={feedBacks}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {totalFeedBeck() ? (
        <Section title={StatisticTitle}>
          <Statistics
            feedBacks={feedBacks}
            total={totalFeedBeck()}
            positivePercentage={positivePercentage()}
          />
        </Section>
      ) : (
        <Notification children={NotificationMessage} />
      )}
    </>
  );
};
