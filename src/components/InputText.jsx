

const InputText = ({ placeholder, type, label,name, value, onChange}) => {
    return (
        <div className="font-monstrat flex flex-col gap-2 w-full ">
          <label className="text-lg font-montserrat font-semibold">{label}</label>
          <input
          name={name}
          value={value}
            type={type ? type : "text"}
            placeholder={placeholder}
            onChange={onChange}
            className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pt-2 pl-5 w-full border border-black"
            required
          />
        </div>
      );
}

export default InputText