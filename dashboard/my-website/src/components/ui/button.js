export function Button({ children, onClick, className = "" }) {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
