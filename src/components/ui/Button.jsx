
function Button({ children }) {
  return (
    <button className="w-full rounded-md bg-slate-700 text-white p-2 transition-all hover:bg-slate-600">
      {children}
    </button>
  );
}

export default Button;
