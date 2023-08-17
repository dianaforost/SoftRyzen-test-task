export default function TopLeftBorder({ className }) {
  console.log(className);
  return (
    <svg
      className={className}
      width="42"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#fff" d="M0 11h.955V0H0z" />
      <path fill="#fff" d="M0 11h42v-1H0z" />
    </svg>
  );
}
