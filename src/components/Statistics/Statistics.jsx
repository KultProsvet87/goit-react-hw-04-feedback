import PropTypes from 'prop-types';

export const Statistics = ({ feedBacks, total, positivePercentage }) => {
  const keys = Object.keys(feedBacks);
  return (
    <>
      {keys.map((key, index) => (
        <p key={index}>
          {key}: {feedBacks[key]}
        </p>
      ))}
      <p>Total: {total}</p>
      <p>Positive percentage: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  feedBacks: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
