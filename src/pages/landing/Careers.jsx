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

const Careers = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Careers"
        body="We value self-motivation, a strong work ethic, and a desire to continuously develop your skillset."
        img="/img/careers-img.png"
      />

      <div className="about_main">
        <div className="story">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="story_img"
          >
            <img src="/img/careers-main.webp" alt=""  className="rounded-xl"/>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="story_text"
          >
            <h2 data-aos="zoom-out" data-aos-duration="1100" className="h2">
              Join our Team
            </h2>
            <p className="para">
              At CyberPay, we believe that every employee plays a vital role in
              shaping the future of our company. That's why we offer
              comprehensive training programs designed to foster personal and
              professional growth, as well as opportunities for career
              advancement within our organization. Our goal is to empower each
              member of our team to reach their full potential and make
              meaningful contributions to our mission.
            </p>
            <p className="para">
              To thrive at CyberPay, we seek creative thinkers who possess
              strong analytical skills and a passion for solving complex
              problems. You should be a team player with a proven track record
              of working collaboratively towards common goals. Additionally, we
              value self-motivation, a strong work ethic, and a desire to
              continuously develop your skillset.
            </p>
            <p className="para">
              Whether you're looking to start your first job or advance in your
              career, CyberPay offers a supportive and dynamic environment where
              you can grow both personally and professionally. Join us and
              become part of a forward-thinking team dedicated to making a
              difference in the world of financial technology.
            </p>
            <Link className="startbtn" to="https://merchant.cyberpay.ng">
              <span>Get Started</span>
              <HiMiniArrowRightCircle />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
