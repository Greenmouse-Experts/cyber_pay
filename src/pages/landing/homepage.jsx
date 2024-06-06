import { useEffect, useState } from "react";
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
import join7 from "../../assets/images/join7.png";
import join8 from "../../assets/images/join8.png";
import join9 from "../../assets/images/join9.png";
import join10 from "../../assets/images/join10.png";
import join12 from "../../assets/images/join12.png";
import join11 from "../../assets/images/join11.png";
import Cookie from "./Cookie";
import { motion } from "framer-motion";
import { IoArrowForwardCircleOutline, IoEyeOutline } from "react-icons/io5";
import Slider from "react-slick";
import { settings, settings2 } from "../../lib/utils/helpers";
import { IoMdArrowForward } from "react-icons/io";
import OurProducts from "../../components/HomeComp/OurProducts";
import PolicyFooter from "../../components/PolicyFooter";

const LandingHomepage = () => {
  const [value, setValue] = useState(0);

  const [isScaledOut, setIsScaledOut] = useState(false);
  const [imageIndex, setImageIndex] = useState(0); // Track image index

  const variants = {
    scaledOut: {
      scale: 1.1, // Adjust the scale factor for zoom effect
      transition: { duration: 2, easing: "easeInOut" },
    },
    scaledIn: {
      scale: 0.8,
      transition: { duration: 2, easing: "easeInOut" },
    },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsScaledOut(true); // Trigger initial scale out
      const newIndex = (imageIndex + 1) % 2; // Toggle image index
      setImageIndex(newIndex);
      setTimeout(() => setIsScaledOut(false), 500); // Scale back in after 0.5s
    }, 2000); // Set timeout for 3 seconds

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [imageIndex]);

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
        { tick: "1.58% capped N2000" },
        { tick: "1.48% capped at N1700" },
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

  const { theme } = useTheme();

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

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 1 ? slideLength : prevSlide - 1
  //   );
  // };
  return (
    <div className={`homepage ${theme === "light" ? "light" : "lbg"}`}>
      <Cookie />

      <div
        className={`hero-${currentSlide} h-[60%] w-full bg-center bg-cover landing `}
      >
        {currentSlide === 1 && (
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="landing_text"
          >
            <h2 className={`h2 !text-white`}>
              Flexible Payment Options With CyberPay
            </h2>
            <p className="text-white">
              Say goodbye to payment hassles and hello to effortless
              transactions with CyberPay! Experience convenience like never
              before with CyberPay's flexible payment options.
            </p>

            <div className="landing_link flex items-center gap-4">
              <div className="flex items-center gap-2">
                <NavLink
                  to="https://merchant.cyberpay.ng/signup"
                  className="bg-[#DD0A35] hover:bg-[#dd0a37] hover:-translate-y-[2px] transition-all text-lg px-8 py-5 rounded-[4rem] text-white flex items-center gap-2 text-nowrap"
                >
                  Get Started
                  <span>
                    <IoMdArrowForward />
                  </span>
                </NavLink>
              </div>

              
            </div>
          </div>
        )}
        {currentSlide === 2 && (
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="landing_text xl:!w-[50%]"
          >
            <h2 className={`h2 !text-white`}>
              Licensed Payment Terminal Service Provider
            </h2>
            <p className="text-white">
              Experience seamless transactions with our industry-compliant
              solutions. Trust in our expertise for a reliable and secure
              payment experience.
            </p>

            <div className="landing_link flex items-center gap-4">
              <div className="flex items-center gap-2">
                <NavLink
                  to="https://merchant.cyberpay.ng/signup"
                  className="bg-[#DD0A35] hover:bg-[#dd0a37] hover:-translate-y-[2px] transition-all text-lg px-8 py-5 rounded-[4rem] text-white flex items-center gap-2 text-nowrap"
                >
                  Get Started
                  <span>
                    <IoMdArrowForward />
                  </span>
                </NavLink>
              </div>

              
            </div>
          </div>
        )}
        {currentSlide === 3 && (
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="landing_text  xl:!w-[50%]"
          >
            <h2 className={`h2 !text-white`}>
              Send and Receive Funds Hassle-Free Around the World
            </h2>
            <p className="text-white">
              Experience Global Money Transfers Made Easy: Send and Receive
              Funds Anywhere with Smooth Transactions and Confidence in
              Security.
            </p>

            <div className="landing_link flex items-center gap-4">
              <div className="flex items-center gap-2">
                <NavLink
                  to="https://merchant.cyberpay.ng/signup"
                  className="bg-[#DD0A35] hover:bg-[#dd0a37] hover:-translate-y-[2px] transition-all text-lg px-8 py-5 rounded-[4rem] text-white flex items-center gap-2 text-nowrap"
                >
                  Get Started
                  <span>
                    <IoMdArrowForward />
                  </span>
                </NavLink>
              </div>

              
            </div>
          </div>
        )}
        {currentSlide === 4 && (
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="landing_text   xl:!w-[55%]"
          >
            <h2 className={`h2 !text-white`}>
              Our Expertise as your Payment Solution Service Providers
            </h2>
            <p className="text-white">
              Efficient, Secure, and Tailored: Partner with us for seamless
              payment solutions. Our expertise ensures hassle-free transactions
              and customer satisfaction.
            </p>

            <div className="landing_link flex items-center gap-4">
              <div className="flex items-center gap-2">
                <NavLink
                  to="https://merchant.cyberpay.ng/signup"
                  className="bg-[#DD0A35] hover:bg-[#dd0a37] hover:-translate-y-[2px] transition-all text-lg px-8 py-5 rounded-[4rem] text-white flex items-center gap-2 text-nowrap"
                >
                  Get Started
                  <span>
                    <IoMdArrowForward />
                  </span>
                </NavLink>
              </div>

              
            </div>
          </div>
        )}
      </div>
      <div className={`home ${theme === "light" ? "light" : "lbg"}`}>
        <div className="bg_first">
          <BgSection
            title="SERVICES"
            style="fade-up"
            delay="1000"
            sec_style="zoom-in"
            sec_delay="1200"
            img="/img/online-solution.png"
            heading="We provide premium online payment solutions."
            paragraph="Say goodbye to payment hassles and hello to effortless transactions with CyberPay! Experience convenience like never before with CyberPay's flexible payment options.  "
          >
            <div style={{ marginTop: 25 }}>
              <NavLink
                to="/about"
                className="bg-[#DD0A35] hover:bg-[#dd0a37] hover:-translate-y-[2px] w-fit transition-all text-lg px-8 py-5 rounded-[4rem] text-white flex items-center gap-2"
              >
                Read More
                <span>
                  <IoMdArrowForward />
                </span>
              </NavLink>
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
            <h2 className="h2">Monitor your personal financial activities.</h2>
            <p>
              Monitor every income earned and spent by your business. Maintain
              control of your finances by comprehending your cash flow and
              overall financial well-being.
            </p>

            <Resuablebtn
              link="/developer"
              place="center-bottom"
              delay="1300"
              style="zoom-in"
              data-aos-duration="1100"
              text="Developer APIs"
              icon={<RxArrowRight />}
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200"
            className="monitor_img md:mr-[-10%]"
          >
            <div className="gradient2 left-24 bottom-28 w-[20rem] h-[13rem] "></div>
            {theme === "light" ? (
              <img src={user} alt="" />
            ) : (
              <img src={userdark} alt="" />
            )}
          </div>
        </div>
      </div>

      <OurProducts />
      <div className={`home ${theme === "light" ? "light" : "lbg"}`}>
        <div className="get">
          <h2
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-anchor-placement="center-center"
            data-aos-duration="800"
            className="h2"
          >
            Get the best experience with the CyberPay Mobile App
          </h2>

          <div className="get_img">
            <div
              data-aos-easing="ease-in-sine"
              data-aos="flip-left"
              data-aos-duration="1100"
            >
              <div
                className={`${
                  theme === "light" ? "bg-[#E8F0FC]" : "bg-[#181818]"
                }  rounded-3xl relative h-full lg:p-10 p-5 sm:h-[25rem]`}
              >
                <div className=" !w-16 !h-16 rounded-full bg-white">
                  <img
                    src="/icons/transfer.png"
                    alt=""
                    className=" !w-16 !h-16"
                  />
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <h3 className="h3 sm:pt-10 pt-16 ">
                    Transfer anywhere around the world
                  </h3>

                  <div
                    className={`${
                      theme === "light" ? "bg-white" : "bg-[#0D0D0D]"
                    }  absolute bottom-7 w-[85%] rounded-[21px] flex flex-col gap-2 p-3`}
                  >
                    <div className="flex justify-between">
                      <span className="text-[0.8rem]">Your balance</span>
                      <IoEyeOutline color="#C3C3C3" size={20} />
                    </div>
                    <p className="font-medium md:text-4xl text-base">₦52,972</p>
                    <div>
                      <Slider {...settings}>
                        <div>
                          <img
                            src="/icons/transfer-1.svg"
                            alt=""
                            className="!w-16 !h-16"
                          />
                        </div>
                        <div>
                          <img
                            src="/icons/transfer-2.svg"
                            alt=""
                            className="!w-16 !h-16"
                          />
                        </div>
                        <div>
                          <img
                            src="/icons/transfer-3.svg"
                            alt=""
                            className="!w-16 !h-16"
                          />
                        </div>
                        <div>
                          <img
                            src="/icons/transfer-4.svg"
                            alt=""
                            className="!w-16 !h-16"
                          />
                        </div>
                        <div>
                          <img
                            src="/icons/transfer-1.svg"
                            alt=""
                            className="!w-16 !h-16"
                          />
                        </div>
                        <div>
                          <img
                            src="/icons/transfer-2.svg"
                            alt=""
                            className="!w-16 !h-16"
                          />
                        </div>
                        <div>
                          <img
                            src="/icons/transfer-3.svg"
                            alt=""
                            className="!w-16 !h-16"
                          />
                        </div>
                        <div>
                          <img
                            src="/icons/transfer-4.svg"
                            alt=""
                            className="!w-16 !h-16"
                          />
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
              <div
                className={`${
                  theme === "light" ? "bg-[#FCEBEF]" : "bg-[#181818]"
                }  rounded-3xl relative h-full lg:p-10 p-5 sm:h-[25rem]`}
              >
                <div className=" !w-16 !h-16 rounded-full bg-white">
                  <img
                    src="/icons/credit-card.png"
                    alt=""
                    className=" !w-16 !h-16"
                  />
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <h3 className="h3 sm:pt-10 pt-16 ">
                    Make bill payments online seamlessly.
                  </h3>

                  <div
                    className={`  absolute bottom-1 w-[85%] rounded-t-[21px] flex flex-col gap-2 py-5`}
                  >
                    <div>
                      <Slider {...settings}>
                        <div className=" px-1 lg:h-24 h-20 lg:py-0 py-2 md:!grid rounded-2xl items-center  bg-white">
                          <img
                            src="/icons/bill-1.svg"
                            alt=""
                            className=" justify-self-center self-center mx-auto"
                          />
                        </div>
                        <div className=" px-1 lg:h-24 h-20 lg:py-0 py-2 md:!grid rounded-2xl items-center  bg-white">
                          <img
                            src="/icons/bill-2.svg"
                            alt=""
                            className=" justify-self-center self-center mx-auto"
                          />
                        </div>
                        <div className=" px-1 lg:h-24 h-20 lg:py-0 py-2 md:!grid rounded-2xl items-center  bg-white">
                          <img
                            src="/icons/bill-3.svg"
                            alt=""
                            className=" justify-self-center self-center mx-auto"
                          />
                        </div>
                        <div className=" px-1 lg:h-24 h-20 lg:py-0 py-2 md:!grid rounded-2xl items-center  bg-white">
                          <img
                            src="/icons/bill-4.svg"
                            alt=""
                            className=" justify-self-center self-center mx-auto"
                          />
                        </div>
                        <div className=" px-1 lg:h-24 h-20 lg:py-0 py-2 md:!grid rounded-2xl items-center  bg-white">
                          <img
                            src="/icons/bill-1.svg"
                            alt=""
                            className=" justify-self-center self-center mx-auto"
                          />
                        </div>
                        <div className=" px-1 lg:h-24 h-20 lg:py-0 py-2 md:!grid rounded-2xl items-center  bg-white">
                          <img
                            src="/icons/bill-2.svg"
                            alt=""
                            className=" justify-self-center self-center mx-auto"
                          />
                        </div>
                        <div className=" px-1 lg:h-24 h-20 lg:py-0 py-2 md:!grid rounded-2xl items-center  bg-white">
                          <img
                            src="/icons/bill-3.svg"
                            alt=""
                            className=" justify-self-center self-center mx-auto"
                          />
                        </div>
                        <div className=" px-1 lg:h-24 h-20 lg:py-0 py-2 md:!grid rounded-2xl items-center  bg-white">
                          <img
                            src="/icons/bill-4.svg"
                            alt=""
                            className=" justify-self-center self-center mx-auto"
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos-easing="ease-in-sine"
              data-aos="flip-right"
              data-aos-duration="1100"
            >
              <div
                className={`${
                  theme === "light" ? "bg-[#EDF0F2]" : "bg-[#181818]"
                }  rounded-3xl relative h-full lg:p-10 p-5 sm:h-[25rem]`}
              >
                <div className=" !w-16 !h-16 rounded-full bg-white overflow-hidden">
                  <img src="/icons/brain.png" alt="" className=" !w-16 !h-16" />
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <h3 className="h3 sm:pt-10 pt-16 ">
                    Modify your financial insights and goals
                  </h3>

                  <div
                    className={`${
                      theme === "light" ? "" : "bg-[#181818]"
                    }  absolute 2xl:bottom-[3%] xl:bottom-[-2%] sm:bottom-[-3%] w-[100%] bottom-[1rem]  flex flex-col gap-2 md:px-7 px-14`}
                  >
                    <img
                      src="/icons/revenue.svg"
                      alt=""
                      className="xl:!h-[10rem] !h-[8rem] !w-full"
                    />
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`home ${theme === "light" ? "light" : "lbg"}`}>
        <BgSection
          style="fade-up"
          delay="900"
          sec_delay="1000"
          sec_style="fade-down"
          link="Learn more"
          img="/img/why-home.png"
          route="/whycyberpay"
          heading="Why CyberPay"
          paragraph2="Hence why CyberPay is out to address the pain points and make payments, collections and interactions between Merchants and their customers seamless, convenient and safer."
          paragraph="We have identified gaps in the existing payment and collection solutions that are still resulting in pain points and bad checkout experiences for the customers."
        >
          <div></div>
        </BgSection>
      </div>

      {/* <Videomodal /> */}

      <div className="join flex flex-col items-center gap-8 bg-[url(/img/map.png)] dark:bg-[url(/)] dark:!bg-black bg-center bg-cover">
        <h2 className="h2 text-center">
        Join thousands who use CyberPay
        </h2>

        <div className="join_img">
          <motion.img
            src={imageIndex === 0 ? join1 : join7} // Use image based on index
            alt=""
            className="w-24 h-24"
            variants={variants}
            animate={isScaledOut ? "scaledOut" : "scaledIn"}
          />
          <motion.img
            src={imageIndex === 0 ? join2 : join8} // Use image based on index
            alt=""
            className="w-24 h-24 mt-20"
            variants={variants}
            animate={isScaledOut ? "scaledIn" : "scaledOut"}
          />
          <motion.img
            src={imageIndex === 0 ? join3 : join9} // Use image based on index
            alt=""
            className="w-24 h-24"
            variants={variants}
            animate={isScaledOut ? "scaledOut" : "scaledIn"}
          />
          <motion.img
            src={imageIndex === 0 ? join4 : join10} // Use image based on index
            alt=""
            className="w-24 h-24 mt-20"
            variants={variants}
            animate={isScaledOut ? "scaledIn" : "scaledOut"}
          />
          <motion.img
            src={imageIndex === 0 ? join5 : join11} // Use image based on index
            alt=""
            className="w-24 h-24"
            variants={variants}
            animate={isScaledOut ? "scaledOut" : "scaledIn"}
          />
          <motion.img
            src={imageIndex === 0 ? join6 : join12} // Use image based on index
            alt=""
            className="w-24 h-24 mt-20"
            variants={variants}
            animate={isScaledOut ? "scaledIn" : "scaledOut"}
          />
        </div>

        <div className="flex gap-3">
          <NavLink
            to="https://merchant.cyberpay.ng/signup"
            className="bg-bluePrimary  hover:-translate-y-[2px] transition-all text-lg px-8 py-5 rounded-[4rem] text-white flex items-center gap-2 text-nowrap"
          >
            Get Started
            <span>
              <IoMdArrowForward />
            </span>
          </NavLink>
        </div>
      </div>

      <CardSection />

      {/* <div className="home">
        <div className="simple">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="h2 text-center !font-bold"
          >
            Simple easy pricing
          </h2>
          <p
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="text-center xl:w-[70%] w-full flex justify-center mx-auto"
          >
            Explore our range of pricing packages tailored to suit your
            transaction needs. Whether you're processing large volumes or
            occasional payments, we have flexible options to accommodate your
            requirements.
          </p>

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
                            <span>
                              {" "}
                              <HiCheckCircle color="#71717A" size={20} />
                            </span>{" "}
                            {listItem.tick}
                          </p>
                        ))}
                      </div>
                      <NavLink
                        to="https://merchant.cyberpay.ng/signup"
                        className="select_btn"
                      >
                        Get Started
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div
        className={`bg-[url('/img/coin-bg.png')] padding lg:!pr-0 `}
        // data-aos="zoom-in-up"
        // data-aos-duration="1000"
      >
        <Slider {...settings2}>
          <div className="bg-[#042E46] flex justify-center">
            <img
              src="/img/coin1.png"
              alt="coin"
              className="mix-blend-luminosity w-[6rem] "
            />
          </div>
          <div className="bg-[#042E46] flex justify-center">
            <img
              src="/img/coin2.png"
              alt="coin"
              className="mix-blend-luminosity w-[6rem] "
            />
          </div>
          <div className="bg-[#042E46] flex justify-center">
            <img
              src="/img/coin3.png"
              alt="coin"
              className="mix-blend-luminosity w-[6rem] "
            />
          </div>
          <div className="bg-[#042E46] flex justify-center">
            <img
              src="/img/coin4.png"
              alt="coin"
              className="mix-blend-luminosity w-[6rem] "
            />
          </div>
          <div className="bg-[#042E46] flex justify-center">
            <img
              src="/img/coin5.png"
              alt="coin"
              className="mix-blend-luminosity w-[6rem] "
            />
          </div>
          <div className="bg-[#042E46] flex justify-center">
            <img
              src="/img/coin6.png"
              alt="coin"
              className="mix-blend-luminosity w-[6rem] "
            />
          </div>
          <div className="bg-[#042E46] flex justify-center">
            <img
              src="/img/coin1.png"
              alt="coin"
              className="mix-blend-luminosity w-[6rem] "
            />
          </div>
        </Slider>
      </div>
     <div className="padding">
     <PolicyFooter/>
     </div>
      <div className="app">
        <div className="app_div">
          <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="h2">
            Get the CyberPay Mobile App
          </h2>
          <p
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="xl:w-[70%] w-full"
          >
            Experience hassle-free and secure payment processing with CyberPay.
            Our reliable platform guarantees smooth transactions, enabling you
            to concentrate on your business growth.
          </p>

          <div className=" flex items-center gap-6">
            <DownloadButton
              style="fade-right"
              delay="1200"
              className=""
              img={play}
              span="Get it on"
              text="Google Play"
            />
            <DownloadButton
              style="fade-left"
              delay="1200"
              img={theme === "light" ? apple : appledark}
              span="Download on"
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
