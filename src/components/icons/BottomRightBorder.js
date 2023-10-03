import PropTypes from "prop-types";

export default function BottomRightBorder({ className }) {
  return (
    <svg
      className={className}
      width="42"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M42 11h-.955V0H42z" />
      <path fill="#fff" d="M42 11H0v-1h42z" />
    </svg>
  );
}
BottomRightBorder.propTypes = {
  className: PropTypes.string,
};
