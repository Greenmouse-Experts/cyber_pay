import React from "react";
import LandingHeader from "./header";
import LandingFooter from "./footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scroll-to-top";
import ChatBot from "../../components/Chat";
import LiveChat from "../../components/LiveChat";

const LandingLayout = () => {
  return (
    <div className="">
      <LandingHeader />
      <ScrollToTop />
      <main className="">
        <Outlet />
       <ChatBot/>
       <LiveChat/>
      </main>

      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
