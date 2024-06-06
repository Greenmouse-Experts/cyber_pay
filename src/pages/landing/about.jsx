import { useTheme } from "../../ThemeContext";
import React from "react";
import Header from "../../layout/landing/Heading";
import { Link } from "react-router-dom";
import about from "../../assets/images/about-header.png";
import story from "../../assets/images/story.png";
import { RiFlagFill } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { RxArrowRight } from "react-icons/rx";
import quick from "../../assets/images/quick.png";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import "../../Stylesheet/about.scss";
import appledark from "../../assets/images/apple-logo.png";
import DownloadButton from "../../components/DownloadButton";
import play from "../../assets/images/play.png";
import apple from "../../assets/images/apple.png";
import { GoDotFill } from "react-icons/go";
import { MdDiversity1 } from "react-icons/md";

const LandingAbout = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="About Us"
        body="Setting up CyberPay is a breeze, offering your customers a range of secure and user-friendly payment options."
        img="/img/about-banner.png"
      />

      <div className="about_main">
        <div className="story">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="story_img"
          >
            <img src="/img/about-img1.png" alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="story_text"
          >
            <h2 data-aos="zoom-out" data-aos-duration="1100" className="h2">
              About CyberPay
            </h2>
            <p className="!text-black">
              At CyberPay, we pride ourselves in the understanding of the
              industry pain points and the various other challenges faced by the
              merchants and their customers alike. Hence, we have developed
              various products and services that address the challenges,
              thereby, making the process of digital payments and collections
              not only seamless but much more convenient, smarter and safer.
            </p>
            <Link className="startbtn" to="https://merchant.cyberpay.ng/signup">
              <span>Get Started</span>
              <HiMiniArrowRightCircle />
            </Link>
          </div>
        </div>

        <div className="our ">
          <h2 className="h2">
            Providing users with convenient and secure payment methods to choose
            from.
          </h2>
          <div className="flex items-center justify-between ">
            <div className="xl:w-[40%] w-full">
              <div
                data-aos="zoom-in"
                data-aos-delay="800"
                className=" mx-auto !text-black"
              >
                <h3 className=" font-semibold mt-10 text-3xl">
                  Quick facts about us
                </h3>
                <p className="text-[1.1rem] font-medium mt-5">
                  We are CBN (PSSP and PTSP) Licensed payment processing service
                  for gateway providers, acquirers and merchants.
                </p>
                <div className=" flex flex-col gap-4 mt-5">
                  <p className="text-[1.1rem] font-medium flex items-center gap-2">
                    <span>
                      <GoDotFill size={14} />
                    </span>{" "}
                    We Accept multiple means of payment i.e. Cards, Bank
                    Accounts, USSD, Wallet, QR Code.
                  </p>
                  <p className="text-[1.1rem] font-medium flex items-center gap-2">
                    <span>
                      <GoDotFill size={14} />
                    </span>{" "}
                    Secure, hassle-free and seamless payment platform for
                    customers.
                  </p>
                  <p className="text-[1.1rem] font-medium flex items-center gap-2">
                    <span>
                      <GoDotFill size={14} />
                    </span>{" "}
                    Our platform allows a simple API Integration.
                  </p>
                  <p className="text-[1.1rem] font-medium flex items-center gap-2">
                    <span>
                      <GoDotFill size={14} />
                    </span>{" "}
                    Cyberpay is PCIDSS compliant.
                  </p>
                </div>
              </div>
            </div>
            <div className="our_body xl:w-[45%] w-full ">
              <div
                data-aos="zoom-in-right"
                data-aos-duration="1100"
                className="our_card vision bg-bluePrimary !h-40"
              >
                <div className="our_icon bg-white bg-opacity-10 rounded-full ">
                  <img
                    src="/img/vision.png"
                    alt=""
                    className="object-center h-8 w-8"
                  />
                </div>
                <div className="our_text">
                  <h2 className="h2 !text-white">Our Vision</h2>
                  <p className="text-white">
                    To be the partner of choice in the financial technology
                    industry.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1100"
                className="our_card mission bg-bluePrimary !h-40"
              >
                <div className="our_icon bg-white bg-opacity-10 rounded-full">
                  <img
                    src="/img/mission.png"
                    alt=""
                    className="object-center h-8 w-8"
                  />
                </div>
                <div className="our_text">
                  <h2 className="h2 !text-white">Our Mission</h2>
                  <p className="text-white">
                    To facilitate transactions globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="enjoy">
        <div className="enjoy_cont">
          <h2 data-aos="fade-up"
        data-aos-delay="1000" className="h2">
            Enjoy Hassle Free Payment Solutions with the CyberPay Mobile App Today
          </h2>

          <div className="flex items-center gap-2">
            <DownloadButton style="zoom-in-right" delay="1100" img={play} span="GET IT ON" text="Google Play" />
            <DownloadButton style="zoom-in-left" delay="1100"
              img={apple}
              span="Download on"
              text="Apple Store"
            />
          </div>

        </div>

      </div> */}
    </div>
  );
};

export default LandingAbout;
