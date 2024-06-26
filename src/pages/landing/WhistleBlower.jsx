import { FaAsterisk } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";

function WhistleBlower() {
  const { theme } = useTheme();

  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout"}`}>
      <form className="padding !pt-40" onSubmit={handleSubmit}>
      <div className="border-b border-grey-800 pb-2">
          <h2 className="h2">Submit a tip</h2>
        </div>
        <div className=" flex md:flex-row flex-col items-center gap-10 mt-16">
          <div className="md:w-[33%] w-full">
            <label className="para">Full Name</label>
            <input
            placeholder="Your Name"
              type="text"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
            />
          </div>
          <div className="md:w-[33%] w-full">
            <label className="para">Email Address</label>
            <input
            placeholder="Email Address"
              type="email"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
            />
          </div>
          <div className="md:w-[33%] w-full">
            <label className="para">Phone Number</label>
            <input
            placeholder="Phone Number"
              type="tel"
              className="w-full h-12 outline-none border rounded-md p-2 border-grey-300 mt-5"
            />
          </div>
         
        </div>
        <div className="mt-10">
        <label className="para flex items-center gap-1">
            Description of tip <span className=" text-[#DD0A35]"><FaAsterisk size={10}  /></span>
          </label>
          <textarea required={true} className="h-40 p-4 w-full border rounded-md bg-white border-grey-300 mt-5"></textarea>
        </div>
        <div className="flex flex-col mt-20">
          <label className="para">Supporting Document</label>
          <input type="file" name="" id="" className="mt-5"  style={{}}/>
        </div>

        <div className="mt-20 flex justify-start ">
            <button type="submit" className="bg-[#DD0A35] px-10 py-3 para rounded-[5rem] text-white  ">
                submit
            </button>
        </div>
      </form>
    </div>
  );
}

export default WhistleBlower;
