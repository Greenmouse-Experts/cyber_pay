import React from "react";

const SelectInput = React.forwardRef(
  ({ id, items, label, value, error, onChange, ...rest }, ref) => {
    return (
      <div className="w-full">
        <label className="text-lg font-montserrat font-semibold">{label}</label>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)} // Ensure the onChange passes the selected value
          ref={ref}
          className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-grayPrimary2 h-[50px] pl-5 w-full border border-black"
          {...rest}
        >
          <option value="">Select {label}</option>
          {items?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    );
  }
);

SelectInput.displayName = "SelectInput";
export default SelectInput;
