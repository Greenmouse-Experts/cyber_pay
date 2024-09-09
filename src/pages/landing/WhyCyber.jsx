import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import why from "../../assets/images/why.png";
import "../../Stylesheet/why.scss";
import comp from "../../assets/images/comp.png";
// import DownloadButton from "../../components/DownloadButton";
// import play from "../../assets/images/play.png";
// import apple from "../../assets/images/apple.png";
// import appledark from "../../assets/images/apple-logo.png";
import icon from "../../assets/images/icon.svg";
import { GoDotFill } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { getWhy } from "../../services/api";
import SkeletonLoader from "../../components/loader/SkeletonLoader";
// import { Link } from "react-router-dom";
// import { HiMiniArrowRightCircle } from "react-icons/hi2";

const WhyCyber = () => {
  const list = [
    {
      head: "Effortless Collections",
      body: "CyberPay accepts payments and collections securely. ",
    },
    {
      head: "Convenient Payments",
      body: "Avail multiple payment methods.",
    },
    {
      head: "Rapid Settlement",
      body: "Settlement is made within a short cycle.",
    },
    {
      head: "Safeguarding Transactions",
      body: "Secured payment gateway.",
    },
    {
      head: "Effortless Report Collation",
      body: "Allows report collation/ generation.",
    },
    {
      head: "Accelerated Transactions",
      body: "Faster and higher transaction success rates.",
    },
  ];
  const data = [
    {
      head: "Streamlined Tokenization",
      body: "CyberPay accepts payments and collections securely.",
    },
    {
      head: "Multi-Channel Payments",
      body: "Allows one-click access to multiple payment channels.",
    },
    {
      head: "Diverse Payment Options",
      body: "Allows multiple payment methods( Cards, bank accounts, USSD and wallets).",
    },
  ];
  const { theme } = useTheme();

  const { data: why, isLoading } = useQuery({
    queryKey: ["why"],
    queryFn: getWhy,
  });

  console.log(why?.benefitList);
  const benefitList = why && JSON.parse(why?.benefitList);
  const benefitMerchantList = why && JSON.parse(why?.benefitMerchantList);

  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Why CyberPay"
        body="We identified gaps in the existing payment and collection solutions, hence why we are here to make your life easier."
        img="/img/why-banner.png"
      />
      {isLoading && <SkeletonLoader />}
      {!isLoading && why && (
        <>
          <div className="why">
            <div className="comp">
              <div
                data-aos="fade-right"
                data-aos-duration="1100"
                className="comp_text"
                dangerouslySetInnerHTML={{ __html: why?.title }}
              >
                {/* <h2 className="h2">Comprehensive Support</h2>
            <div className="why_text">
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> Multiple access channels (email, phone, online chat).</p>
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> 100% availability and prompt responses.</p>
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> Proactive monitoring of transactions.</p>
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> 24/7 Customer Support System in multiple languages.</p>
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> Provides shorter settlement cycle.</p>
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> Prompt resolution of disputes.</p>
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> Ensure complete settlement amount/value.</p>
              <p className="para flex items-center gap-2">
                <span><GoDotFill size={14}  /></span> Reporting - deploy customization, accurate and timely reports.
              </p>
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> Well defined escalation matrix and alert system.</p>
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> Training.</p>
              <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> Fraud prevention and management.</p>
            </div> */}
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1100"
                className="comp_img"
              >
                <img src={why.image_url} alt="" className="rounded-xl" />
              </div>
            </div>
          </div>
          <div className="whynow dark:!bg-[#1a1a1a]">
            <h2 data-aos="fade-down" data-aos-duration="1100" className="h2">
              {why.caption}
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-duration="1100"
              className="lg:w-[80%] lg:text3xl"
            >
              {why.description}
            </p>
          </div>
          <div className="benefit dark:!bg-[#1a1a1a] ">
            <div className="list_1 md:!grid-cols-3 !gap-6">
              <div
                data-aos="zoom-in-right"
                data-aos-duration="1100"
                className="dark_card !bg-[#042E46] col-span-2"
              >
                <h2 className="h2">
                  <img src={icon} alt="" />
                  {why.benefitCaption}
                </h2>

                {/* <div className="benefit_card_link">
              <Link    to="https://merchant.cyberpay.ng/signup" className="startbtn">
                <span>Get Started</span>
                <HiMiniArrowRightCircle />
              </Link>
            </div> */}
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1100"
                className="list_card"
              >
                <h3>{benefitList[0].title}</h3>
                <p>{benefitList[0].description} </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1100" className="list_2">
              {benefitList.slice(1).map((item, index) => (
                <div className="list_card" key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="why_list"
            dangerouslySetInnerHTML={{ __html: why?.why_us }}
          >
            {/* <h2 data-aos="fade-down" data-aos-duration="1100" className="h2">
          Why us?
        </h2>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1100"
          className="why_text"
        >
          
            <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span>  Simple, API based integration: We are guaranteeing
            simple API integration.
          </p>
          
            <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span>  Tokenization and Recurring Debit Opportunities: We
            offer a tokenization system that generates a string of random
            characters to replace the original credit card number. The token
            then allows payments to be processed without exposing sensitive
            account details that could breach security and privacy.
          </p>
          
            <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span>  Faster Settlement Cycle: We provide hourly settlement
            system. However, this is upon fulfilling terms of service.
          </p>
          
            <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span>  We are innovating around alternate payment services
            that allow consumers and businesses to safely make and receive
            payments in all major currencies, regardless of location. Payments
            can be made via Cards, Bank Accounts, USSD, eWallet and QR Code.
          </p>
          
            <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span>  Multiple Processing/Switching Channel – High PSR: We
            will be ensuring high transaction success rates, leveraging multiple
            processing and switching channels.
          </p>
        </div> */}
          </div>

          <div className="merchant dark:!bg-[#1a1a1a]">
            <h2 data-aos="zoom-in" data-aos-duration="1100" className="h2">
              {why.benefitMerchantCaption}
              {/* <span className="text-rose-600">Merchants</span> */}
            </h2>
            <div className="merchant_list">
              {benefitMerchantList?.map((item, index) => (
                <div
                  data-aos="flip-right"
                  data-aos-duration="1100"
                  className="list_card"
                  key={index}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WhyCyber;
