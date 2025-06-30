type LoadingIconProps = {
  size?: number;
  color?: string;
  classname?: string;
};

export default function LoadingIcon({
  size = 24,
  color = "white",
  classname = "",
}: LoadingIconProps) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    borderColor: color,
    borderTopColor: "transparent",
  };

  return (
    <div
      className={`border-2 rounded-full animate-spin ${classname}`}
      style={style}
    />
  );
}
