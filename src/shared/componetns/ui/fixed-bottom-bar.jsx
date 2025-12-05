export default function FixedBottomBar({ children, className = "" }) {
  return (
    <div
      className={`${className} fixed bottom-5 left-1/2 w-screen -translate-x-1/2  z-3 px-2.5  max-w-2xl`}
    >
      {children}
    </div>
  );
}
