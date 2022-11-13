interface ButtonProps {
  title: string;
  onClick?: () => void;
}

function Button({
  title,
  onClick,
  ...rest
}: React.ButtonHTMLAttributes<ButtonProps>) {
  return (
    <button
      {...rest}
      className="btn btn--secondary btn--block btn--contact"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
