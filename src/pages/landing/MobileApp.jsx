import React from "react";
import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/solution.png";
import market from "../../assets/images/market.png";

const MobileApp = () => {
  const { theme } = useTheme();

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img={solution}
        head="Mobile App"
        body="Experience seamless transactions and convenient shopping with CyberPay Mobile App."
      />
      <div className="market padding">
        <div
          className="market_img"
        >
          <img src="/img/mobile-app.png" alt=""  className="md:max-h-[30rem] max-h-[20rem]"/>
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
         <p className="para">Airtime</p>
         <p className="para">Bills Payment </p>
         <p className="para">Wallet transfers </p>
         <p className="para">Betting</p>
         <p className="para">Fund request</p>
         <p className="para">QR Code</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
