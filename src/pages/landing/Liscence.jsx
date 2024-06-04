
import { NavLink } from 'react-router-dom';
import Heading from '../../layout/landing/Heading';
import { useTheme } from '../../ThemeContext';
import banner from "../../assets/images/cookie-policy.png";

function Liscence() {
    const { theme } = useTheme();
  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout"}`}>
    <Heading
      img="/img/lisence-banner.png"
      head="Cookies Policy"
      body=" You can manage your cookie preferences or opt-out at any time through your browser settings."
    />
    <div className="padding grid xl:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
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
          <img src="/img/isms.png" alt="" className="  h-32 rounded-full" />
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
            className="  h-32 rounded-full "
          />
        </div>
      </NavLink>
      <div  className=" bg-gray-100  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-1.png " alt="" className="  rounded-md   h-32 " />
      </div>
      <div  className=" bg-gray-100  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/audit-2.png" alt="" className="   rounded-md  h-32 " />
      </div>
    </div>

    </div>
  );
}



export default Liscence