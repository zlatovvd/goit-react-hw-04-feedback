import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.feedbackOptionsList}>
    {options.map(({ id, title }) => (
      <li key={id}>
        <button onClick={() => onLeaveFeedback(id)}>{title}</button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
