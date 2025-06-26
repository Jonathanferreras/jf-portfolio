type MailWithStreaksIconProps = {
  size?: number;
  className?: string;
  color?: string;
};

export default function MailWithStreaksIcon({
  size = 24,
  className = "",
  color = "currentColor",
}: MailWithStreaksIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`stroke-current ${className}`}
    >
      {/* Streak lines on the left */}
      <path d="M2 12h6" />
      <path d="M2 16h4" />
      <path d="M2 20h6" />

      {/* Envelope */}
      <rect x="10" y="10" width="20" height="12" rx="2" />
      <path d="M10 10l10 8l10-8" />
    </svg>
  );
}
