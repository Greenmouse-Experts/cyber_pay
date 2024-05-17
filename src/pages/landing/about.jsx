import { useTheme } from '../../ThemeContext'
import React from 'react'
import Header from "../../layout/landing/Heading"
import { Link } from 'react-router-dom'
import about from "../../assets/images/about-header.png"
import story from "../../assets/images/story.png"
import { RiFlagFill } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { RxArrowRight } from "react-icons/rx";
import quick from "../../assets/images/quick.png"
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import "../../Stylesheet/about.scss"
import appledark from "../../assets/images/apple-logo.png";
import DownloadButton from "../../components/DownloadButton";
import play from "../../assets/images/play.png";
import apple from "../../assets/images/apple.png";

const LandingAbout = () => {
  const { theme } = useTheme();

  return (
    <div className={`landing-about ${theme === 'light' ? "about" : "darkabout"}`}>
      <Header head="About Us" body="Setting up CyberPay is a breeze, offering your customers a range of secure and user-friendly payment options." img={about} />

      <div className="about_main">
        <div className="story">
          <div data-aos="fade-right" data-aos-duration="1000" className="story_img">
            <img src="/img/about-img1.png" alt="" />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="story_text">
            <h2 data-aos="zoom-out" data-aos-duration="1100" className="h2">
            About CyberPay
            </h2>
            <p>
              At CyberPay, we pride ourselves in the understanding of the industry pain points and the various other challenges faced by the merchants and their customers alike. Hence, we have developed various products and services that address the challenges, thereby, making the process of digital payments and collections not only seamless but much more convenient, smarter and safer.
            </p>
            <Link className='startbtn' to="https://merchant.cyberpay.ng">
              <span>
                Get Started
              </span>
              <HiMiniArrowRightCircle />
            </Link>
          </div>
        </div>

        <div className="our">
          <div className="our_head">
            <h2 data-aos="fade-down" data-aos-duration="1100"
              className="h2">
              Providing users with convenient and <br /> secure payment methods to choose from.
            </h2>
            {/* <Link data-aos="zoom-out-left" data-aos-duration="1100">
              Learn More
              <RxArrowRight />
            </Link> */}
          </div>
          <div className="our_body">
            <div data-aos="zoom-in-right" data-aos-duration="1100" className="our_card vision bg-blue-100 dark:bg-gray-600 ">
              <div className="our_text">
                <h2 className="h2 dark:!text-white">Our Vision</h2>
                <p>To be the partner of choice in the financial technology industry.</p>
              </div>
              <div className="our_icon bg-blue-500 bg-opacity-10 rounded-full">
                <RiFlagFill className='text-sky-500' />
              </div>
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="1100" className="our_card mission bg-pink-100 dark:bg-sky-950">
              <div className="our_text">
                <h2 className="h2 dark:!text-white">Our Mission</h2>
                <p>To facilitate transactions globally.</p>
              </div>
              <div className="our_icon bg-rose-600 bg-opacity-10 rounded-full">
                <TbTargetArrow className='text-rose-600' />
              </div>
            </div>
          </div>

        </div>
        <div className="quick">
          <div data-aos="zoom-in"
            data-aos-delay="800" className="quick_text bg-sky-950 text-white">
            <h3>Quick facts about us</h3>
            <p>
              We are CBN (PSSP)- Licensed payment processing service for gateway providers, acquirers and merchants.
            </p>
            <div className="quick_list">
              <p>✓ We Accept multiple means of payment i.e. Cards, Bank Accounts, USSD, Wallet, QR Code.</p>
              <p>✓ Secure, hassle-free and seamless payment platform for customers.</p>
              <p>✓ Our platform allows a simple API Integration.</p>
              <p>✓ Cyberpay is PCIDSS compliant.</p>
            </div>

          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" className="quick_img">
            <img src={quick} alt="" />
          </div>

        </div>
      </div>
      <div className="enjoy">
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

      </div>
    </div>
  )
}

export default LandingAbout