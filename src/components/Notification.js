import PropTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
