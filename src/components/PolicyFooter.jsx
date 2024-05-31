import { NavLink } from "react-router-dom";

function PolicyFooter() {
  return (
    <div className="padding grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
      <NavLink
        to="/isms"
        className=" bg-[#DD0A35] w-full px-5 py-3 flex justify-between items-center rounded-2xl"
        data-aos-easing="ease-in-sine"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        <div className="para text-white flex flex-col w-[70%]">
          <span>ISMS - ISO</span>
          <span> 27001 Policy</span>
        </div>
        <div className="w-[40%] flex justify-end">
          <img src="/img/isms.png" alt="" className=" w-20 h-20 rounded-full" />
        </div>
      </NavLink>
      <NavLink
        to="/bcms"
        className=" bg-bluePrimary w-full px-5 py-3 justify-between flex items-center rounded-2xl"
        data-aos-easing="ease-in-sine"
        data-aos="zoom-in"
        data-aos-duration="1100"
      >
        <div className="para text-white flex flex-col  w-[70%]">
          <span>BCMS - ISO </span>
          <span> 22301 Policy</span>
        </div>
        <div className="w-[40%] flex justify-end">
          <img
            src="/img/bcms.webp"
            alt=""
            className=" w-20 h-20 rounded-full "
          />
        </div>
      </NavLink>
      <div  className=" bg-[#dd0a35] w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-1.png " alt="" className="  rounded-md   h-20 " />
      </div>
      <div  className=" bg-bluePrimary  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-2.png" alt="" className="   rounded-md  h-20 " />
      </div>
    </div>
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
