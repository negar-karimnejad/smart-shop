function Input({ className, type, id, name, label, disabled }) {
  return (
    <div className="w-full relative">
      <input
        className={`peer w-full p-3 pt-6 outline-none rounded-md font-light bg-transparent border-2 border-slate-400 transition ${
          className ? className : ""
        }`}
        type={type}
        name={name}
        placeholder=""
        disabled={disabled}
        id={id}
      />
      <label
        htmlFor={id}
        className="absolute cursor-text text-sm duration-150 transform top-1 left-4 z-10 origin-[0] peer-placeholder-shown:text-md peer-placeholder-shown:top-5 peer-placeholder-shown:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:top-1 peer-focus:text-slate-500 peer-focus:text-sm peer-focus:scale-75 peer-focus:translate-y-[-0.2rem]"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
