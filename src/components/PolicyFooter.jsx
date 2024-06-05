import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { settings3 } from "../lib/utils/helpers";

function PolicyFooter() {
  return (
    <Slider {...settings3}>
      <NavLink
        to="/isms"
        className=" bg-[#DD0A35] w-full  rounded-2xl"
      >
       <div  className=" bg-[#DD0A35] w-full px-5 py-3 flex justify-between  items-center rounded-2xl">
       <div className="para text-white flex flex-col w-[70%]">
          <span>ISMS - ISO</span>
          <span> 27001 </span>
        </div>
        <div className="w-[40%] flex justify-end">
          <img src="/img/isms.png" alt="" className=" w-20 h-20 rounded-full" />
        </div>
       </div>
      </NavLink>
      <NavLink
        to="/bcms"
        className=" bg-bluePrimary w-full  rounded-2xl"
      >
          <div  className=" w-full px-5 py-3 flex justify-between  items-center ">
        <div className="para text-white flex flex-col  w-[70%]">
          <span>BCMS - ISO </span>
          <span> 22301 </span>
        </div>
        <div className="w-[40%] flex justify-end">
          <img
            src="/img/bcms.webp"
            alt=""
            className=" w-20 h-20 rounded-full "
          />
        </div>
        </div>
      </NavLink>
      <div className=" bg-gray-100  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-1.png " alt="" className="  rounded-md   h-20  mx-auto" />
      </div>
      <div className=" bg-gray-100  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-2.png" alt="" className="   rounded-md  h-20  mx-auto" />
      </div>
      <div className=" bg-gray-100  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-3.png" alt="" className="   rounded-md  h-20  mx-auto" />
      </div>
    </Slider>
  );
}

export default PolicyFooter;

// <div className="md:w-[30%] w-full flex gap-5">
// <NavLink
//   to="/about"
//   className="bg-white text-[#2F9BD6] flex items-center gap-2 text-[1.1rem] font-medium py-4 px-9 text-nowrap"
// >
//   Learn More{" "}
//   <span>
//     <FaArrowRight />
//   </span>
// </NavLink>
// <NavLink
//     to="https://merchant.cyberpay.ng/signup"
//   className="bg-white text-[#2F9BD6] flex items-center gap-2 text-[1.1rem] font-medium py-4 px-9 text-nowrap"
// >
//   Get Started{" "}
//   <span>
//     <FaArrowRight />
//   </span>
// </NavLink>
// </div>
