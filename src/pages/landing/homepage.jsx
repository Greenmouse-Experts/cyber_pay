import  { useEffect, useState } from "react";
import land from "../../assets/images/land.png";
import DownloadButton from "../../components/DownloadButton";
import "../../Stylesheet/landing.scss";
import play from "../../assets/images/play.svg";
import apple from "../../assets/images/apple.svg";
import bank from "../../assets/images/bank.png";
import { RxArrowRight } from "react-icons/rx";
import { useTheme } from "../../ThemeContext";
import landBlack from "../../assets/images/land-black.png";
import appledark from "../../assets/images/apple-logo.png";
import BgSection from "../../components/BgSection";
import prov from "../../assets/images/prov.png";
import provdark from "../../assets/images/provdark.png";
import lead from "../../assets/images/image-min.png";
import Resuablebtn from "../../components/Resuablebtn";
import user from "../../assets/images/user.png";
import userdark from "../../assets/images/userdark.png";
import get2 from "../../assets/images/get2.png";
import get3 from "../../assets/images/get3.png";
import darkget2 from "../../assets/images/darkget2.png";
import darkget3 from "../../assets/images/darkget3.png";
import app from "../../assets/images/app.png";
import { HiCheckCircle } from "react-icons/hi";
import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";
import CardSection from "../../lib/modules/landing/homepage/CardSection";
import Videomodal from "../../lib/modules/landing/homepage/Videomodal";
import join1 from "../../assets/images/join1.png";
import join2 from "../../assets/images/join2.png";
import join3 from "../../assets/images/join3.png";
import join4 from "../../assets/images/join4.png";
import join5 from "../../assets/images/join5.png";
import join6 from "../../assets/images/join6.png";
import Cookie from "./Cookie";
import { IoEyeOutline } from "react-icons/io5";
import Slider from "react-slick";
import { settings, settings2 } from "../../lib/utils/helpers";

const LandingHomepage = () => {
  const [value, setValue] = useState(0);

  const handleInputChange = (newValue) => {
    setValue(newValue);
  };
  const data = [
    {
      id: 1,
      list: [
        { tick: "ideal for small businesses" },
        { tick: "Startups" },
        { tick: "Payment processing" },
        { tick: "Invoicing and basic analytics" },
        { tick: "Email support during business hours" },
      ],
    },
    {
      id: 2,
      list: [
        { tick: "Domestic Cards 1.58% capped N2000" },
        { tick: "Domestic Cards 1.48% capped at N1700" },
        { tick: "1.38% capped @ N1,600" },
        { tick: "1.33% capped @ N1,600" },
        { tick: "International Cards 3.78%" },
      ],
    },
    {
      id: 3,
      list: [{ tick: "Merchant Aggregator" }, { tick: "Payment Gateway" }],
    },
  ];

  const {theme} = useTheme()

  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 4; // Total number of slides
  const transitionTime = 4000; // Transition time in milliseconds
  let slideInterval;

  useEffect(() => {
    // Auto change slide at intervals
    // eslint-disable-next-line react-hooks/exhaustive-deps
    slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
    }, transitionTime);

    return () => clearInterval(slideInterval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? slideLength : prevSlide - 1
    );
  };
return (
    <div className={`homepage ${theme === "light" ? "light" : "lbg"}`}>
      <Cookie />
     
      <div className={`hero-${currentSlide} h-[60%] w-full bg-center bg-cover landing `}>
      
       {currentSlide === 1 &&   <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="landing_text"
        >
          <h2 className={`h2 !text-white`}>
            Flexible Payment Options With CyberPay
          </h2>
          <p className="text-white">
            Say goodbye to payment hassles and hello to effortless transactions
            with CyberPay! Experience convenience like never before with
            CyberPay's flexible payment options.
          </p>

          <div className="landing_link flex items-center gap-2">
            <div className="flex items-center gap-2">
              <DownloadButton
                style="zoom-in-right"
                delay="1100"
                img={play}
                span="Get on it"
                text="Google Play"
                radius="16"
              />
              <DownloadButton
                style="zoom-in-left"
                delay="1100"
                img={theme === "light" ? apple : appledark}
                span="Download on the"
                text="Apple Store"
                radius="16"
              />
            </div>

            <p className="flex !item-center gap-2 w-fit text-white">
              <span>Fully Licensed by the CBN</span>

              <img src={bank} alt="" />
            </p>
          </div>
        </div>
        }
         {currentSlide === 2 &&   <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="landing_text"
        >
          <h2 className={`h2 !text-white`}>
          Licensed Payment Terminal Service Provider
          </h2>
          <p className="text-white">
          Experience seamless transactions with our industry-compliant solutions. Trust in our expertise for a reliable and secure payment experience.
          </p>

          <div className="landing_link flex items-center gap-2">
            <div className="flex items-center gap-2">
              <DownloadButton
                style="zoom-in-right"
                delay="1100"
                img={play}
                span="Get on it"
                text="Google Play"
                radius="16"
              />
              <DownloadButton
                style="zoom-in-left"
                delay="1100"
                img={theme === "light" ? apple : appledark}
                span="Download on the"
                text="Apple Store"
                radius="16"
              />
            </div>

            <p className="flex !item-center gap-2 w-fit text-white">
              <span>Fully Licensed by the CBN</span>

              <img src={bank} alt="" />
            </p>
          </div>
        </div>
        }
         {currentSlide === 3 &&   <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="landing_text"
        >
          <h2 className={`h2 !text-white`}>
          Send and Receive Funds Hassle-Free Around the World
          </h2>
          <p className="text-white">
          Experience Global Money Transfers Made Easy: Send and Receive Funds Anywhere with Smooth Transactions and Confidence in Security.
          </p>

          <div className="landing_link flex items-center gap-2">
            <div className="flex items-center gap-2">
              <DownloadButton
                style="zoom-in-right"
                delay="1100"
                img={play}
                span="Get on it"
                text="Google Play"
                radius="16"
              />
              <DownloadButton
                style="zoom-in-left"
                delay="1100"
                img={theme === "light" ? apple : appledark}
                span="Download on the"
                text="Apple Store"
                radius="16"
              />
            </div>

            <p className="flex !item-center gap-2 w-fit text-white">
              <span>Fully Licensed by the CBN</span>

              <img src={bank} alt="" />
            </p>
          </div>
        </div>
        }
          {currentSlide === 4 &&   <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="landing_text"
        >
          <h2 className={`h2 !text-white`}>
          Our Expertise as your Payment Solution Service Providers
          </h2>
          <p className="text-white">
          Efficient, Secure, and Tailored: Partner with us for seamless payment solutions. Our expertise ensures hassle-free transactions and customer satisfaction.
          </p>

          <div className="landing_link flex items-center gap-2">
            <div className="flex items-center gap-2">
              <DownloadButton
                style="zoom-in-right"
                delay="1100"
                img={play}
                span="Get on it"
                text="Google Play"
                radius="16"
              />
              <DownloadButton
                style="zoom-in-left"
                delay="1100"
                img={theme === "light" ? apple : appledark}
                span="Download on the"
                text="Apple Store"
                radius="16"
              />
            </div>

            <p className="flex !item-center gap-2 w-fit text-white">
              <span>Fully Licensed by the CBN</span>

              <img src={bank} alt="" />
            </p>
          </div>
        </div>
        }
      </div>
      <div className={`home ${theme === "light" ? "light" : "lbg"}`}>
        <div className="bg_first">
          <BgSection
            style="fade-up"
            delay="1000"
            sec_style="zoom-in"
            sec_delay="1200"
            absolute
            img={theme === "light" ? prov : provdark}
            heading="We provide premium online payment solutions."
            paragraph="Say goodbye to payment hassles and hello to effortless transactions with CyberPay! Experience convenience like never before with CyberPay's flexible payment options.  "
          >
            <div style={{ marginTop: 25 }}>
              <div className="flex items-center gap-2">
                <DownloadButton
                  img={play}
                  span="Get on it"
                  text="Google Play"
                  color="black"
                />
                <DownloadButton
                  img={theme === "light" ? apple : appledark}
                  span="Download on the"
                  text="Apple Store"
                  color="black"
                />
              </div>
            </div>
          </BgSection>
        </div>

        <div className="monitor">
          <div className="gradient"></div>
          <div
            data-aos="fade-left"
            data-aos-duration="1100"
            className="monitor_text"
          >
            <h2 className="h2">Monitor your personal finances.</h2>
            <p>
              Monitor every income earned and spent by your business. Maintain
              control of your finances by comprehending your cash flow and
              overall financial well-being.
            </p>

            <Resuablebtn
              link="/pricing"
              place="center-bottom"
              delay="1300"
              style="zoom-in"
              data-aos-duration="1100"
              text="View Our Pricing"
              icon={<RxArrowRight />}
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200"
            className="monitor_img"
          >
            <div className="gradient2 left-24 bottom-28 w-[20rem] h-[13rem] "></div>
            {theme === "light" ? (
              <img src={user} alt="" />
            ) : (
              <img src={userdark} alt="" />
            )}
          </div>
        </div>

        <div className="get">
          <h2
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="center-center"
            data-aos-duration="800"
            className="h2"
          >
            Get the best Experience with the CyberPay mobile app
          </h2>

          <div className="get_img">
            <div
              data-aos-easing="ease-in-sine"
              data-aos="flip-left"
              data-aos-duration="1100"
            >
              <div className={`${theme === "light" ? "bg-[#E8F0FC]" : "bg-[#181818]"}  rounded-3xl relative h-full p-10`}>
                <img src="/icons/transfer.svg" alt="" className=" !w-16 !h-16" />
                <div className="flex flex-col  justify-center items-center">
                  <h3 className="h3 mt-12 ">Transfer anywhere around the world</h3>

                  <div className={`${theme === "light" ? "bg-white" : "bg-[#0D0D0D]"}  absolute bottom-0 w-[80%] rounded-t-[21px] flex flex-col gap-2 p-3`}>
                    <div className="flex justify-between">
                      <span className="text-[0.8rem]">Your balance</span>
                      <IoEyeOutline color="#C3C3C3" size={20} />
                    </div>
                    <p className="font-medium md:text-4xl text-base">₦52,972</p>
                    <div>
                      <Slider {...settings}>
                        <div>
                          <img src="/icons/transfer-1.svg" alt="" className="!w-16 !h-16" />
                        </div>
                        <div>
                          <img src="/icons/transfer-2.svg" alt="" className="!w-16 !h-16" />
                        </div>
                        <div>
                          <img src="/icons/transfer-3.svg" alt="" className="!w-16 !h-16" />
                        </div>
                        <div>
                          <img src="/icons/transfer-4.svg" alt="" className="!w-16 !h-16" />
                        </div>
                        <div>
                          <img src="/icons/transfer-1.svg" alt="" className="!w-16 !h-16" />
                        </div>
                        <div>
                          <img src="/icons/transfer-2.svg" alt="" className="!w-16 !h-16" />
                        </div>
                        <div>
                          <img src="/icons/transfer-3.svg" alt="" className="!w-16 !h-16" />
                        </div>
                        <div>
                          <img src="/icons/transfer-4.svg" alt="" className="!w-16 !h-16" />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos-easing="ease-in-sine"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {theme === "light" ? (
                <img src={get2} alt="" className="h-full" />
              ) : (
                <img src={darkget3} alt="" className="h-full" />
              )}
            </div>

            <div
              data-aos-easing="ease-in-sine"
              data-aos="flip-right"
              data-aos-duration="1100"
            >
              {theme === "light" ? (
                <img src={get3} alt="" className="h-full"/>
              ) : (
                <img src={darkget2} alt="" className="h-full" />
              )}
            </div>
          </div>
        </div>

        <div className="sec_bg">
          <BgSection
            style="fade-up"
            delay="900"
            sec_delay="1000"
            sec_style="fade-down"
            img={lead}
            heading="Leading-edge Transaction Report System"
            paragraph="Stay informed and in control of your financial activities with our comprehensive Transaction Report service. Get detailed insights into all transactions conducted."
          >
            <div></div>
          </BgSection>
        </div>

        {/* <Videomodal /> */}
      </div>

      <div className="join flex flex-col items-center gap-8 bg-[url(/img/map.png)] bg-center bg-cover">
        <h2 className="h2 text-center">
          Join thousands who use the CyberPay mobile app
        </h2>

        <div className="join_img">
          <img
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="w-24 h-24"
            src={join1}
            alt=""
          />
          <img
            data-aos="zoom-in-down"
            data-aos-duration="1100"
            className="w-24 h-24 mt-20"
            src={join2}
            alt=""
          />
          <img
            data-aos="zoom-in-down"
            data-aos-duration="1100"
            className="w-28 h-28"
            src={join3}
            alt=""
          />
          <img
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="w-24 h-24 mt-20"
            src={join4}
            alt=""
          />
          <img
            data-aos="zoom-in-down"
            data-aos-duration="1100"
            className="w-24 h-24"
            src={join5}
            alt=""
          />
          <img
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="w-24 h-24 mt-20"
            src={join6}
            alt=""
          />
        </div>

        <div className="flex gap-3">
        <DownloadButton
                style="zoom-in-right"
                delay="1100"
                img={play}
                span="Get on it"
                text="Google Play"
                color="black"
              />
              <DownloadButton
                style="zoom-in-left"
                delay="1100"
                img={theme === "light" ? apple : appledark}
                span="Download on the"
                text="Apple Store"
                color="black"
              />
        </div>
      </div>

      <CardSection />

      <div className="home">
        <div className="simple">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="h2 text-center"
          >
            Simple Easy Pricing
          </h2>
          <p
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="text-center"
          >
            Explore our range of pricing packages tailored to suit your
            transaction needs. Whether you're processing large volumes or
            occasional payments, we have flexible options to accommodate your
            requirements.
          </p>

          {/* <div style={{ position: "relative" }}>
            <input
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => handleInputChange(parseInt(e.target.value))}
              style={{
                width: "100%",
                height: "10px",
                position: "absolute",
                appearance: "none",
                outline: "none",
                background: `linear-gradient(
            to right,
            rgba(109, 220, 255, 1),
            rgba(127, 96, 249, 1)
          )`,
              }}
            />
            {[0, 20, 40, 60, 80, 100].map((position) => (
              <div
                key={position}
                style={{
                  position: "absolute",
                  top: "-3px",
                  left: `${position}%`,
                  width: "1px",
                  height: "15px",
                  background: "black",
                }}
              />
            ))}
          </div> */}

          <div className="simple_div mt-8">
            <div className="simple_list">
              {data.map((item, index) => (
                <div
                  data-aos="flip-right"
                  data-aos-duration="1500"
                  className="simple_card "
                  key={index}
                >
                  <div className="simple_grad"></div>
                  <div className="simple_content rounded-lg overflow-hidden">
                    <span>Single Merchant</span>
                    <h1>Free</h1>
                    <p>
                      Built for businesses and sales <br /> merchants
                    </p>

                    <div>
                      <div>
                        {item.list.map((listItem, index) => (
                          <p key={index}>
                            <HiCheckCircle /> {listItem.tick}
                          </p>
                        ))}
                      </div>
                      <NavLink to="/pricing" className="select_btn">
                        Select Plan
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[url('/img/coin-bg.png')] padding `}
        // data-aos="zoom-in-up"
        // data-aos-duration="1000"
      >
         <Slider {...settings2}>
<div className="bg-[#042E46]">
        <img
          src="/img/coin1.png"
          alt="coin"
          className="mix-blend-luminosity w-[5rem]"
        />
     </div>   
       <div className="bg-[#042E46]">

    
        <img
          src="/img/coin2.png"
          alt="coin"
          className="mix-blend-luminosity w-[5rem]"
        />
    </div>    
       <div className="bg-[#042E46]">

    
        <img
          src="/img/coin3.png"
          alt="coin"
          className="mix-blend-luminosity w-[5rem]"
        />
    </div>    
       <div className="bg-[#042E46]">

    
        <img
          src="/img/coin4.png"
          alt="coin"
          className="mix-blend-luminosity w-[5rem]"
        />
    </div>    
       <div className="bg-[#042E46]">

    
        <img
          src="/img/coin5.png"
          alt="coin"
          className="mix-blend-luminosity w-[5rem]"
        />
    </div>    
       <div className="bg-[#042E46]">

    
        <img
          src="/img/coin6.png"
          alt="coin"
          className="mix-blend-luminosity w-[5rem]"
        />
    </div>    
        
        </Slider>
      </div>
      <div className="app">
        <div className="app_div">
          <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="h2">
            Get the Cyber App
          </h2>
          <p data-aos="zoom-in-down" data-aos-duration="1000">
            Experience hassle-free and secure payment processing with CyberPay.
            Our reliable platform guarantees smooth transactions, enabling you
            to concentrate on your business growth.
          </p>

          <div className=" flex items-center gap-6">
            <DownloadButton
              style="fade-right"
              delay="1200"
              className="white_btn"
              img={play}
              span="Get on it"
              text="Google Play"
            />
            <DownloadButton
              style="fade-left"
              delay="1200"
              img={theme === "light" ? apple : appledark}
              span="Download on the"
              text="Apple Store"
            />
          </div>

          <img data-aos="fade-up" data-aos-duration="1200" src={app} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingHomepage;
