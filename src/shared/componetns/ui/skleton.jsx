export default function Skleton({ children, className = "" }) {
  return (
    <div className={`${className} bg-secondary-400 animate-pulse`}>
      {children}
    </div>
  );
}
