import PropTypes from 'prop-types';
import { ButtonBox } from './FeedBeckOptions.Styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedBeckTypes = Object.keys(options);
  return (
    <ButtonBox>
      {feedBeckTypes.map((feedBeckType, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(feedBeckType)}
          >
            {feedBeckType}
          </button>
        );
      })}
    </ButtonBox>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.shape(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
