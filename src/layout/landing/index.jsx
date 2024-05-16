import React from "react";
import LandingHeader from "./header";
import LandingFooter from "./footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scroll-to-top";

const LandingLayout = () => {
  return (
    <div className="">
      <LandingHeader />
      <ScrollToTop />
      <main className="">
        <Outlet />
        <div className=" bottom-10 left-[-12.5rem] hover:left-2 transition-all  z-[9999999999] fixed  items-center flex flex-row-reverse gap-0 cursor-pointer ">
          <img src="/icons/whatsapp.svg" alt="whatsapp" />
          <p className="bg-white py-3 px-7 rounded-xl h-fit dark:bg-gray-900">Send us Message</p>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
