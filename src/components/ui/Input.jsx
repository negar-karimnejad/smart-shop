
function Input({ className, type, name, placeholder, disabled }) {
  return (
    <input
      className={`p-3 rounded-lg bg-transparent border ${
        className ? className : ""
      }`}
      type={type}
      name={name}
      placeholder={placeholder}
      disabled
    />
  );
}

export default Input;
