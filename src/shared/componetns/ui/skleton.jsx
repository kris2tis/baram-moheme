export default function Skleton({ children, className = "" }) {
  return (
    <div className={`${className} bg-secondary-300 animate-pulse`}>
      {children}
    </div>
  );
}
