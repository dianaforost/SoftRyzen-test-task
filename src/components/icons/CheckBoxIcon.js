import PropTypes from "prop-types";

export default function CheckBoxIcon({ className, width, height }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="#fff" d="M.5.5h23v23H.5z" />
    </svg>
  );
}

CheckBoxIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
