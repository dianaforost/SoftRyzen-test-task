import PropTypes from "prop-types";

export default function TopRightBorder({ className }) {
  return (
    <svg
      className={className}
      width="42"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M42 0h-.955v11H42z" />
      <path fill="#fff" d="M42 0H0v1h42z" />
    </svg>
  );
}

TopRightBorder.propTypes = {
  className: PropTypes.string,
};
