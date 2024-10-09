import React from "react";
import LandingHeader from "./header";
import LandingFooter from "./footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scroll-to-top";
import ChatBot from "../../components/Chat";

const LandingLayout = () => {
  return (
    <div className="">
      <LandingHeader />
      <ScrollToTop />
      <main className="">
        <Outlet />
       <ChatBot/>
      </main>

      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
