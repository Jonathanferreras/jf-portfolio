export default function ArrowUpRightIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-current ${className}`}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M7 7h10v10"
      />
    </svg>
  );
}
