const variants = {
  primary: "bg-primary-900",
  secondary: "bg-secondary-200 border border-secondary-100 text-black",
};
export default function Button({
  variant = "secondary",
  className = "",
  children,
  ...rest
}) {
  const style = variants[variant];
  return (
    <button
      className={`h-12 flex items-center justify-center ${style} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
