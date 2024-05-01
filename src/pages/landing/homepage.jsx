import React, { useState } from "react";
import land from "../../assets/images/land.png";
import DownloadButton from "../../components/DownloadButton";
import "../../Stylesheet/landing.scss";
import play from "../../assets/images/play.png";
import apple from "../../assets/images/apple.png";
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
import get1 from "../../assets/images/get1.png";
import get2 from "../../assets/images/get2.png";
import get3 from "../../assets/images/get3.png";
import darkget1 from "../../assets/images/darkget1.png";
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
import coinbg from "../../assets/images/coin-bg.png";
import coin1 from "../../assets/images/coin1.png";
import Cookie from "./Cookie";

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

  const { theme } = useTheme();

  return (
    <div className={`homepage ${theme === "light" ? "light" : "lbg"}`}>
      <Cookie />
      <div className="landing">
        <div className="gradient"></div>

        <div className="grad-2"></div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="landing_text"
        >
          <h2 className={`h2 ${theme === "light" ? "" : "h2-dark"}`}>
            Flexible Payment Options With CyberPay
          </h2>
          <p>
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
                span="GET IT ON"
                text="Google Play"
              />
              <DownloadButton
                style="zoom-in-left"
                delay="1100"
                img={theme === "light" ? apple : appledark}
                span="Download on"
                text="Apple Store"
              />
            </div>

            <p className="flex !item-center gap-2 w-fit">
              <span>Fully Licensed by the CBN</span>

              <img src={bank} alt="" />
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="landing_image"
        >
          {theme === "light" ? (
            <img src={land} alt="" />
          ) : (
            <img src={landBlack} alt="" />
          )}
        </div>
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
                  span="GET IT ON"
                  text="Google Play"
                />
                <DownloadButton
                  img={theme === "light" ? apple : appledark}
                  span="Download on"
                  text="Apple Store"
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
            <div className="gradient2 !left-20 bottom-20 h-20 w-40"></div>
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
              {theme === "light" ? (
                <img src={get1} alt="" />
              ) : (
                <img src={darkget1} alt="" />
              )}
            </div>

            <div
              data-aos-easing="ease-in-sine"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              {theme === "light" ? (
                <img src={get2} alt="" />
              ) : (
                <img src={darkget3} alt="" />
              )}
            </div>

            <div
              data-aos-easing="ease-in-sine"
              data-aos="flip-right"
              data-aos-duration="1100"
            >
              {theme === "light" ? (
                <img src={get3} alt="" />
              ) : (
                <img src={darkget2} alt="" />
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

        <Videomodal />
      </div>

      <div className="join flex flex-col items-center gap-8">
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

        <Resuablebtn
          style="flip-down"
          delay="1300"
          text="Download App"
          icon={<MdOutlineFileDownload />}
        />
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

          <div style={{ position: "relative" }}>
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
          </div>

          <div className="simple_div mt-8">
            <div className="simple_list">
              {data.map((item, index) => (
                <div
                  data-aos="flip-right"
                  data-aos-duration="1500"
                  className="simple_card"
                  key={index}
                >
                  <div className="simple_grad"></div>
                  <div className="simple_content ">
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
      <div className={`bg-[url('./img/coin-bg.png')] padding grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 justify-between items-center ` } data-aos="zoom-in-up" data-aos-duration="1000">
          <img src="/img/coin1.png" alt="coin" className="mix-blend-luminosity mx-auto md:w-[9rem] w-[5rem]" />
          <img src="/img/coin2.png" alt="coin" className="mix-blend-luminosity mx-auto md:w-[9rem] w-[5rem]" />
          <img src="/img/coin3.png" alt="coin" className="mix-blend-luminosity mx-auto md:w-[9rem] w-[5rem]" />
          <img src="/img/coin4.png" alt="coin" className="mix-blend-luminosity mx-auto md:w-[9rem] w-[5rem]" />
          <img src="/img/coin5.png" alt="coin" className="mix-blend-luminosity mx-auto md:w-[9rem] w-[5rem]" />
          <img src="/img/coin6.png" alt="coin" className="mix-blend-luminosity mx-auto md:w-[9rem] w-[5rem]" />
        </div>
        <div className="app">
          <div className="app_div">
            <h2 data-aos="zoom-in-up" data-aos-duration="1000" className="h2">
              Get the Cyber App
            </h2>
            <p data-aos="zoom-in-down" data-aos-duration="1000">
              Experience hassle-free and secure payment processing with
              CyberPay. Our reliable platform guarantees smooth transactions,
              enabling you to concentrate on your business growth.
            </p>

            <div className=" flex items-center gap-6">
              <DownloadButton
                style="fade-right"
                delay="1200"
                className="white_btn"
                img={play}
                span="GET IT ON"
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
