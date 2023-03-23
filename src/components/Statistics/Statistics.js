import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ feedbackList, feedbacks, total, positivePercentage }) => (
  <ul className={css.statisticsList}>
    {feedbackList.map(({ id, title }) => (
      <li key={id}>
        {title}: {feedbacks[id]}
      </li>
    ))}
    <li>Total: {total}</li>
    <li>Positive Feedback: {positivePercentage}%</li>
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  feedbackList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
