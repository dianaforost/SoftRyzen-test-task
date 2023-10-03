import PropTypes from "prop-types";

export default function TopLeftBorder({ className }) {
  return (
    <svg
      className={className}
      width="42"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M0 0h.955v11H0z" />
      <path fill="#fff" d="M0 0h42v1H0z" />
    </svg>
  );
}

TopLeftBorder.propTypes = {
  className: PropTypes.string,
};
