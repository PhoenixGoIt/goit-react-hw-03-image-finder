import propTypes from 'prop-types';

export function FeedbackOptions ({ options, onLeaveFeedback }) {
  return (
  <div className='btn'>
  {options.map((option, index) => (
    <button
      key={index}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ))}
</div>)
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};