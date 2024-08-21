
import Slider from "react-slick";
import { settings3 } from "../lib/utils/helpers";

function PolicyFooter() {
  return (
    <Slider {...settings3}>
   
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
