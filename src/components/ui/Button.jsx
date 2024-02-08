function Button({ children, onClick, disabled, type, className }) {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick ? onClick : null}
      disabled={disabled}
      className={`w-full rounded-md opacity-100 font-semibold cursor-pointer bg-slate-700 text-white px-2 py-3 transition-all hover:bg-slate-600 ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
