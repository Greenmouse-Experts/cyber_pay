import React from "react";
import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/accept-pay.png";
import payment from "../../assets/images/payment-global.jpg";
import Resuablebtn from "../../components/Resuablebtn";
import { RxArrowRight } from "react-icons/rx";

const Payment = () => {
  const { theme } = useTheme();
  const data = [
    {
      head: "One Platform, Multiple Channels.",
      body: "With one integration, your customers can make payments on your website with their bank cards, their bank accounts, USSD, QR Code, eWallet etc.",
    },
    {
      head: "Great Checkout Experience",
      body: "We have deployed a simple and highly efficient transaction processing system that ensures your transactions do not fail, guaranteeing a great checkout experience for your customers.",
    },
    {
      head: "Secure Transactions.",
      body: "We offer the very highest security standards for your transactions as we are compliant with all regulatory security standards for processing payments. Our platform is PCI-DSS compliant and aligns with MasterCard Secure, Verified by Visa (VbyV) and Verve Safetoken.",
    },
  ];

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/online-banner.png"
        head="Accept Payments Securely on your Website"
        body="CyberPay offers a smart, convenient, and highly secure process of receiving payments from your customers all over the world"
      />
      <div className="benefit pay ">
        <div className="list_1">
          <div data-aos="zoom-in-right" data-aos-duration="1100" className="">
            <img src={payment} alt="" className="rounded-2xl scale-90" />
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1100"
            className="lists_card "
          >
            <h2 className="h2">
              Global Payment Solutions with CyberPay: Smart, Convenient, and
              Secure
            </h2>
            <p className="para mb-8">
              Explore the Comprehensive Features and Exclusive Benefits of Our
              Services, Tailored to Enhance Your Experience and Maximize Your
              Results.
            </p>
            <Resuablebtn
              link="https://merchant.cyberpay.ng/signup"
              place="center-bottom"
              delay="1300"
              style="zoom-in"
              data-aos-duration="1100"
              text="Get Started"
              icon={<RxArrowRight />}
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1100" className="list_2">
          {data.map((item) => (
            <div className="list_card">
              <h3>{item.head}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;
