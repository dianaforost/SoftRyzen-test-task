export default function CrossIcon({ className, width, height }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m.375.375 9.25 9.25m0-9.25-9.25 9.25"
        stroke="#FF5757"
        strokeWidth=".5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
