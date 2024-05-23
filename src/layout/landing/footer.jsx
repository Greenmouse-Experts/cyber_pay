// import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "../../Stylesheet/footer.css";
import logo from "../../assets/images/dark-logo.png";
import DownloadButton from "../../components/DownloadButton";
import play from "../../assets/images/play.png";
// import apple from "../../assets/images/apple.png";
import appledark from "../../assets/images/apple-logo.png";
import { useTheme } from "@emotion/react";
import { SiInstagram } from "react-icons/si";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";

const LandingFooter = () => {
  const { theme } = useTheme();
  return (
    <footer>
      <div className="footer_body">
        <div className="foot1">
          <img src={logo} alt="" />
          <p>
            {/* <span>care@cyberpay.net.ng </span>
                        <span>support@cyberpay.net.ng</span> */}
            <span>hello@cyberpay.net.ng</span>
            <span>support@cyberpay.net.ng</span>
          </p>
          <div className="footer_links">
            <DownloadButton img={play} span="Get it on" text="Google Play" />
            <DownloadButton
              img={appledark}
              span="Download on"
              text="Apple Store"
            />
          </div>
          <div className="social">
            <Link to="https://www.instagram.com/cyberpaynaija/">
              <SiInstagram />
            </Link>
            <Link to="https://www.linkedin.com/company/cyberpay-limited/">
              <FaLinkedinIn />
            </Link>
            <Link to="https://www.facebook.com/CyberPayNaija">
              <BiLogoFacebook />
            </Link>
            <Link to="https://twitter.com/Cyberpaynaija">
              <FaXTwitter />
            </Link>
          </div>
        </div>
        <div className="links">
          <h4>Quick Links</h4>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About CyberPay</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/people">Our People</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/certifications">Our Certification</Link>
            <Link to="/whycyberpay">Why CyberPay </Link>
            <Link to="https://merchant.cyberpay.ng">Login</Link>
          </div>
        </div>
        <div className="links">
          <h4>Support</h4>
          <div>
            <Link to="/terms-conditions">Terms and conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/developer">Developer API</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/isms">ISMS Policy Statement</Link>
            <Link to="/bcms">BCMS Policy Statement</Link>
          </div>
        </div>
        <div className="links">
          <h4>Solutions</h4>
          <div>
            <Link to="/marketplace">CyberPay Marketplace</Link>
            <Link to="/mobile-app">CyberPay Mobile App</Link>
            <Link to="/disbursement-solutions">Disbursement Solution</Link>
            <Link to="/bulksms">Bulk SMS</Link>
            <Link to="/loan-repayment">Loan Repayment Made Simple</Link>
            <Link to="/pos-service">POS Services</Link>
            <Link to="/penremit">PenRemit</Link>
            <Link to="/payment-link">Online Sales with Payment Link</Link>
            <Link to="/ussdcollection">USSD Collection</Link>
            <Link to="/payment"> CyberPay online (Web / Mobile) <br /> Payment Processing</Link>
          </div>
        </div>
        <div className="links">
          <h4>Contact Us</h4>
          <div>
            <p className="flex items-start gap-1">
              <span>
                {" "}
                <IoLocationOutline size={20} />
              </span>
              Head Office: 12 Ologun Agbaje Street Victoria Island Lagos.
            </p>
            <p className="flex items-start gap-1">
              <span>
                {" "}
                <IoLocationOutline size={20} />
              </span>
              Abuja Office: 2B street Abacha Estate Wuse Zone , Abuja.
            </p>
            <p className="flex items-start gap-1">
              <span>
                {" "}
                <CiMobile1 size={20} />
              </span>
              02015151118
            </p>
          </div>
        </div>
      </div>
      <div className="c_tag">
        <p>
          © 2024 <span>CyberPay</span> Limited. All rights reserved. |{" "}
          <span>
            <NavLink to="/whistle-blower">Whistle Blower</NavLink>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;
