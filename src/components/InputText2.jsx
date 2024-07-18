import React from "react";



const InputText2 = (({
  textLabel,
  error,
  value,
  type,
  setValue,
  placeholder,
  id,
  ...rest
}, ref) => {
  return (
    <div className="w-[100%] sm:w-[100%] relative flex items-start flex-col">
      <label htmlFor={id} className="text-[14px] font-medium text-black">{textLabel}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
       
        ref={ref}
        id={id}
        placeholder={placeholder}
        className="w-full py-3 px-4 2xl:h-[60px] outline-none border border-gray-500 rounded-lg text-sm"
        {...rest}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
});

InputText2.displayName = "InputText2";
export default InputText2;
