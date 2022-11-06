import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification.Styled';
import { Section } from './Section/section';
import { Statistics } from './Statistics/Statistics';

const MainTitle = 'Pleas leave feedbeck';
const StatisticTitle = 'Statistic';
const NotificationMessage = 'There is no feedbacks';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedBackType => {
    this.setState(prev => {
      return {
        [feedBackType]: prev[feedBackType] + 1,
      };
    });
  };

  totalFeedBeck = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  positivePercentage = () => {
    return Math.round((this.state.good * 100) / this.totalFeedBeck());
  };

  render() {
    return (
      <>
        <div>React homework template</div>
        <Section title={MainTitle}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.totalFeedBeck() ? (
          <Section title={StatisticTitle}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedBeck()}
              positivePercentage={this.positivePercentage()}
            />
          </Section>
        ) : (
          <Notification children={NotificationMessage} />
        )}
      </>
    );
  }
}
// = () => {
//
// };
