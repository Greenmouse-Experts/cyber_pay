import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { productSettings } from "../../lib/utils/helpers";

function OurProducts() {
  return (
    <div className="bg-[url('/img/pattarn-bg.png')] padding mb-10 !py-20">
      <div className="text-center mb-20">
        <p className=" tracking-widest para text-[#DFDFDF]">SOLUTIONS</p>
        <h2 className="h2 text-white">Our Products</h2>
        <p className="para text-white">
          Learn more about our products offering solutions to your everyday
          payments.
        </p>
      </div>

      <Slider {...productSettings}>
        <div className="bg-[#FFFFFF] p-5 rounded-xl flex flex-col justify-between min-h-[11.5rem] mr-3 relative">
          <p className="para text-[#5D5D5D] !font-semibold col-span-3">
            USSD Collection
          </p>

          <div className="flex justify-between items-center absolute bottom-5 w-[90%]">
            <NavLink
              to="/ussdcollection"
              className="text-[#DD0A35] text-lg font-medium flex items-center gap-1"
            >
              View more{" "}
              <span>
                <IoArrowForwardCircleOutline size={23} />
              </span>
            </NavLink>
            <img
              src="/icons/product-1.svg"
              alt=""
              className="w-[4rem] h-[4rem]"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-xl flex flex-col justify-between min-h-[11.5rem] mr-3 relative">
          <p className="para text-[#5D5D5D] !font-semibold col-span-3">
            Cyberpay Marketplace
          </p>
          <div className="flex justify-between items-center absolute bottom-5 w-[90%]">
            <NavLink
              to="/marketplace"
              className="text-[#DD0A35] text-lg font-medium flex items-center gap-1"
            >
              View more{" "}
              <span>
                <IoArrowForwardCircleOutline size={23} />
              </span>
            </NavLink>
            <img
              src="/icons/product-2.svg"
              alt=""
              className="w-[4rem] h-[4rem]"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-xl flex flex-col justify-between min-h-[11.5rem] mr-3 relative">
          <p className="para text-[#5D5D5D] !font-semibold col-span-3">
          Mobile App
          </p>
          <div className="flex justify-between items-center absolute bottom-5 w-[90%] ">
            <NavLink
              to="/mobile-app"
              className="text-[#DD0A35] text-lg font-medium flex items-center gap-1"
            >
              View more{" "}
              <span>
                <IoArrowForwardCircleOutline size={23} />
              </span>
            </NavLink>
            <img
              src="/icons/product-5.png"
              alt=""
              className="w-[4rem] h-[4rem]"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-xl flex flex-col justify-between min-h-[11.5rem] mr-3 relative">
          <p className="para text-[#5D5D5D] !font-semibold col-span-3">
          Bulk SMS
          </p>
          <div className="flex justify-between items-center absolute bottom-5 w-[90%] ">
            <NavLink
              to="/"
              className="text-[#DD0A35] text-lg font-medium flex items-center gap-1"
            >
              View more{" "}
              <span>
                <IoArrowForwardCircleOutline size={23} />
              </span>
            </NavLink>
            <img
              src="/icons/product-5.png"
              alt=""
              className="w-[4rem] h-[4rem]"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-xl flex flex-col justify-between min-h-[11.5rem] mr-3 relative">
          <p className="para text-[#5D5D5D] !font-semibold col-span-3">
          Disbursement

          </p>
          <div className="flex justify-between items-center absolute bottom-5 w-[90%] ">
            <NavLink
              to="/"
              className="text-[#DD0A35] text-lg font-medium flex items-center gap-1"
            >
              View more{" "}
              <span>
                <IoArrowForwardCircleOutline size={23} />
              </span>
            </NavLink>
            <img
              src="/icons/product-5.png"
              alt=""
              className="w-[4rem] h-[4rem]"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-xl flex flex-col justify-between min-h-[11.5rem] mr-3 relative">
          <p className="para text-[#5D5D5D] !font-semibold col-span-3">
          Loan Repayment made simple
          </p>
          <div className="flex justify-between items-center absolute bottom-5 w-[90%] ">
            <NavLink
              to="/"
              className="text-[#DD0A35] text-lg font-medium flex items-center gap-1"
            >
              View more{" "}
              <span>
                <IoArrowForwardCircleOutline size={23} />
              </span>
            </NavLink>
            <img
              src="/icons/product-5.png"
              alt=""
              className="w-[4rem] h-[4rem]"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-xl flex flex-col justify-between min-h-[11.5rem] mr-3 relative">
          <p className="para text-[#5D5D5D] !font-semibold col-span-3">
          POS Services
          </p>
          <div className="flex justify-between items-center absolute bottom-5 w-[90%] ">
            <NavLink
              to="/"
              className="text-[#DD0A35] text-lg font-medium flex items-center gap-1"
            >
              View more{" "}
              <span>
                <IoArrowForwardCircleOutline size={23} />
              </span>
            </NavLink>
            <img
              src="/icons/product-5.png"
              alt=""
              className="w-[4rem] h-[4rem]"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-xl flex flex-col justify-between min-h-[11.5rem] mr-3 relative">
          <p className="para text-[#5D5D5D] !font-semibold col-span-3">
          PenRemit
          </p>
          <div className="flex justify-between items-center absolute bottom-5 w-[90%]">
            <NavLink
              to="/micropension"
              className="text-[#DD0A35] text-lg font-medium flex items-center gap-1"
            >
              View more{" "}
              <span>
                <IoArrowForwardCircleOutline size={23} />
              </span>
            </NavLink>
            <img
              src="/icons/product-3.svg"
              alt=""
              className="w-[4rem] h-[4rem]"
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] p-5 rounded-xl flex flex-col justify-between min-h-[11.5rem] mr-3 relative">
          <p className="para text-[#5D5D5D] !font-semibold col-span-3">
            Cyberpay Online (Web and Mobile) Payment Processing
          </p>
          <div className="flex justify-between items-center absolute bottom-5 w-[90%]">
            <NavLink
              to="payment"
              className="text-[#DD0A35] text-lg font-medium flex items-center gap-1"
            >
              View more{" "}
              <span>
                <IoArrowForwardCircleOutline size={23} />
              </span>
            </NavLink>
            <img
              src="/icons/product-4.svg"
              alt=""
              className="w-[4rem] h-[4rem]"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default OurProducts;
