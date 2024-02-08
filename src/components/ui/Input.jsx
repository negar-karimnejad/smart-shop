function Input({ className, type, name, placeholder, disabled }) {
  return (
    <input
      className={`p-3 outline-none rounded-lg bg-transparent border-2 border-slate-400 ${
        className ? className : ""
      }`}
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default Input;
