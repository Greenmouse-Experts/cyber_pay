import Slider from "react-slick";
import { settings3 } from "../lib/utils/helpers";
import { useQuery } from "@tanstack/react-query";
import { getCertificates } from "../services/api";

function CertificateSlider() {
  const { data: certificates, isLoading } = useQuery({
    queryKey: ["certificate"],
    queryFn: getCertificates,
  });


  return (
    <Slider {...settings3}>
      {certificates?.map((item) => {
        return (
          <div className="" key={item._id}>
            <img
              src={item?.image}
              alt=""
              className="  rounded-md   h-32  mx-auto object-center max-w-52"
            />
          </div>
        );
      })}
      {/* <div className="  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
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
      <div className="  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/cert-1.png" alt="" className="   rounded-md  h-32  mx-auto" />
      </div>
      <div className="  w-full px-5 py-3 justify-center flex items-center rounded-2xl">
        <img src="/img/cert-2.png" alt="" className="   rounded-md  h-32  mx-auto" />
      </div> */}
    </Slider>
  );
}

export default CertificateSlider;

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
