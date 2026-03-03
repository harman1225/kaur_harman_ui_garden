import "./Button.css";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  rounded?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  shadow?: boolean;
  color?: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = "primary",
  rounded = false,
  disabled = false,
  fullWidth = false,
  shadow = false,
  color,
  onClick,
}: ButtonProps) => {
  // apply custom color only if provided
  const style = color ? { backgroundColor: color } : {};

  return (
    <button
      className={`btn ${variant}
        ${rounded ? "rounded" : ""}
        ${fullWidth ? "fullWidth" : ""}
        ${shadow ? "shadow" : ""}
      `}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};