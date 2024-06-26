import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { settings3 } from "../lib/utils/helpers";

function PolicyFooter() {
  return (
    <Slider {...settings3}>
      {/* <NavLink
        to="/isms"
        className=" bg-gray-100 w-full  rounded-2xl"
      >
       <div  className=" bg-gray-100 w-full px-5 py-3 flex justify-between  items-center rounded-2xl">
       <div className="para text-black !font-semibold dark:text-black flex flex-col w-[70%]">
          <span className="dark:!text-black">ISMS - ISO</span>
          <span className="dark:!text-black"> 27001:2022</span>
        </div>
        <div className="w-[40%] flex justify-end">
          <img src="/img/isms.png" alt="" className=" w-20 h-20 rounded-full" />
        </div>
       </div>
      </NavLink>
      <NavLink
        to="/bcms"
        className=" bg-gray-100 w-full  rounded-2xl"
      >
          <div  className=" w-full px-5 py-3 flex justify-between  items-center ">
        <div className="para text-black !font-semibold dark:text-black flex flex-col  w-[70%]">
          <span className="dark:!text-black">BCMS - ISO </span>
          <span className="dark:!text-black"> 22301:2019</span>
        </div>
        <div className="w-[40%] flex justify-end">
          <img
            src="/img/bcms.webp"
            alt=""
            className=" w-20 h-20 rounded-full "
          />
        </div>
        </div>
      </NavLink> */}
      <div className="  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-4.png" alt="" className="  rounded-md   h-32  mx-auto" />
      </div>
      <div className="  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img   src="/img/audit-5.png" alt="" className="  rounded-md   h-32  mx-auto" />
      </div>
      <div className="  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-1.png " alt="" className="  rounded-md   h-32  mx-auto" />
      </div>
      <div className="  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-2.png" alt="" className="   rounded-md  h-32  mx-auto" />
      </div>
      <div className="  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-3.png" alt="" className="   rounded-md  h-32  mx-auto" />
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
