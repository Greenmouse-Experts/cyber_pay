import React from "react";
import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/mobile-banner.png";
import market from "../../assets/images/market.png";
import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { getMobileApp } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

const MobileApp = () => {
  const { theme } = useTheme();

  const { isLoading, data: mobileApp } = useQuery({
    queryKey: ["mobileApp"],
    queryFn: getMobileApp,
  });

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
      img="/img/mobile-banner.png"
        head="Mobile App"
        body="Experience seamless transactions and convenient shopping with CyberPay Mobile App."
      />
       { isLoading && <SkeletonLoader />}
       { mobileApp && !isLoading &&  <div className="market padding">
        <div
       
          className="market_img"
        >
          <img src={mobileApp?.setImage} alt=""  className="md:max-h-[30rem] max-h-[20rem] rounded-2xl"/>
        </div>
        <div
         
          className="market_text"
          dangerouslySetInnerHTML={{ __html: mobileApp?.setDescription }}
        >
         
        </div>
      </div>}
      {/* <div className="market padding">
        <div
          className="market_img"
        >
          <img src="/img/mobile-app.jpg" alt=""  className="md:max-h-[30rem] max-h-[20rem] rounded-2xl"/>
        </div>
        <div
          className="market_text"
        >
          <h2 className="h2">Embrace the future</h2>
          <p className="para">
            Experience the seamless convenience of CyberPay Mobile, a
            cutting-edge mobile payment platform that's revolutionizing
            transactions. With state-of-the-art encryption technology
            safeguarding personal and financial data, it offers effortless bill
            payments and streamlined funds management. Embrace the future of
            digital payments with CyberPay today
          </p>

         <div className="mt-5">
         <h2 className="h2">Features</h2>
         <p className="para flex items-center gap-2"> <span><GoDotFill size={14}  /></span>Airtime</p>
         <p className="para flex items-center gap-2"> <span><GoDotFill size={14}  /></span>Bills Payment </p>
         <p className="para flex items-center gap-2"> <span><GoDotFill size={14}  /></span>Wallet transfers </p>
         <p className="para flex items-center gap-2"> <span><GoDotFill size={14}  /></span>Betting</p>
         <p className="para flex items-center gap-2"> <span><GoDotFill size={14}  /></span>Fund request</p>
         <p className="para flex items-center gap-2"> <span><GoDotFill size={14}  /></span><NavLink to="https://apps.apple.com/ng/app/cyberpay/id6466426786">QR Code</NavLink></p>
         </div>
        </div>
      </div> */}
    </div>
  );
};

export default MobileApp;
