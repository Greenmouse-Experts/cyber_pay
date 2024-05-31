
import { NavLink } from 'react-router-dom'

function PolicyFooter() {
  return (
    <div className="padding flex lg:flex-row flex-col justify-center items-center gap-5">
    <NavLink
      to="/isms"
      className=" bg-[#DD0A35] sm:w-[30rem] w-full px-5 py-3 flex flex-col gap-1 justify-between items-center rounded-2xl"
      data-aos-easing="ease-in-sine"
      data-aos="zoom-in"
      data-aos-duration="1100"
    >
       <div className=" flex justify-end">
        <img
          src="/img/isms.png"
          alt=""
          className=" w-16 h-16 rounded-full"
        />
      </div>
      <div className="para text-white flex items-center">
        <span>ISMS - ISO</span>
        <span> 27001 Information Security Policy</span>
      </div>
     
    </NavLink>
    <NavLink
      to="/bcms"
      className=" bg-bluePrimary sm:w-[30rem] w-full px-5 py-3 justify-between flex flex-col gap-1 items-center rounded-2xl"
      data-aos-easing="ease-in-sine"
      data-aos="zoom-in"
      data-aos-duration="1100"
    >
      <div className=" flex items-center gap-4">
        <img
          src="/img/bcms.webp"
          alt=""
          className="  h-16 rounded-full "
        />
           <img
            src="/img/audit-1.png "
            alt=""
            className="  bg-white   h-16 "
          />
          <img
            src="/img/audit-2.png"
            alt=""
            className="  bg-white  h-16 "
          />
      </div>
      <div className="para text-white flex items-center">
        <span>BCMS - ISO </span>
        <span> 22301 Business Continuity Policy</span>
      </div>
    </NavLink>
  </div>
  )
}

export default PolicyFooter



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