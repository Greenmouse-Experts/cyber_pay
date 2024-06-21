import Select from "react-select";
import { useState } from "react";
import { careerJobs, jobDivision } from "../assets/data/jobs";
import InputText from "./InputText";
import SelectInput from "./SelectInput";
import NaijaStates from "naija-state-local-government";

// JSON data formatted for react-select

export default function CareerForm() {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "2px solid black", // Style the border to be black
    }),
  };

  return (
    <div className="lg:w-[45%] w-full flex flex-col gap-3">
      <InputText label="Name" placeholder="Enter your name" />
      <div className="font-monstrat flex flex-col gap-2 w-full ">
        <label className="text-lg font-montserrat font-semibold">Gender</label>
        <select
          className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] dark:text-black h-[50px] pl-5 w-full border border-black"
          required
        >
          <option value="">Select Gender</option>
          <option value="">Male</option>
          <option value="">Female</option>
        </select>
      </div>
      <InputText label="Date of Birth" type="date" placeholder="Enter your name" />
      <SelectInput
        id="state"
        items={NaijaStates.states()}
        label="State of residence"
        //   handleChange={(e) => setValue("state", e.target.value)}
        //   value={watchState}
        //   error={errors.state?.message}
        //   {...register("state", { required: "State is required" })}
      />
      <InputText
        label="Location you're applying to"
        placeholder="Location you're applying to"
      />
      <SelectInput
        id="experience"
        items={[
          "1 year",
          "2 years",
          "3 years",
          "4 years",
          "5 years",
          "6 years",
          "7 years",
          "8 years",
          "9 years",
        ]}
        label=" Years of experience"
      />
      <SelectInput
        id="experience"
        items={["Entry", "Intermediate", "Senior"]}
        label=" Level of experience (entry, intermediate, senior)"
      />
      <InputText
        label="Role you are applying for"
        placeholder="Role you are applying for"
      />
      <InputText
        label="Course of study"
        placeholder="Course of study"
      />
       <SelectInput
        id="experience"
        items={["First class", "Second Class", "Third class", "Distinction", "Upper credit", "Lower credit",]}
        label="Graduating grade (first class, second class etc.)"
      />
      <InputText label="Year of graduation" type="date" placeholder="Year of graduation" />
      <div className="mt-8 flex justify-start ">
            <button type="submit" className="bg-[#DD0A35] px-10 py-3 para rounded-[5rem] text-white  ">
                submit
            </button>
        </div>
      {/* <Select
        defaultValue={selectedOptions}
        onChange={setSelectedOptions}
        options={careerJobs}
        isMulti
        styles={customStyles} 
      />
       <Select
        defaultValue={selectedOptions}
        onChange={setSelectedOptions}
        options={jobDivision}
        isMulti
        styles={customStyles} 
      /> */}
    </div>
  );
}
