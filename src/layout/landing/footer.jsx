import React from 'react';
import { Link } from 'react-router-dom';
import "../../Stylesheet/footer.css";
import logo from "../../assets/images/dark-logo.png";
import DownloadButton from '../../components/DownloadButton';
import play from "../../assets/images/play.png";
import apple from "../../assets/images/apple.png";
import appledark from "../../assets/images/apple-logo.png";
import { useTheme } from '@emotion/react';
import { SiInstagram } from "react-icons/si";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn,FaXTwitter } from "react-icons/fa6";

const LandingFooter = () => {
    const { theme } = useTheme();
    return (
        <footer>
            <div className="footer_body">
                <div className="foot1">
                    <img src={logo} alt="" />
                    <p>
                        <span>care@cyberpay.net.ng </span>
                        <span>support@cyberpay.net.ng</span>
                    </p>
                    <div className="footer_links">
                        <DownloadButton img={play} span="GET IT ON" text="Google Play" />
                        <DownloadButton img={appledark} span="Download on" text="Apple Store" />
                    </div>
                    <div className="social">
                        <Link><SiInstagram /></Link>
                        <Link><FaLinkedinIn /></Link>
                        <Link><BiLogoFacebook /></Link>
                        <Link><FaXTwitter /></Link>
                    </div>
                </div>
                <div className="links">
                    <h4>Quick Links</h4>
                    <div>
                        <Link to="#over">Home</Link>
                        <Link to="#over">About Us</Link>
                        <Link to="#price">Features</Link>
                        <Link to="#faq">Product</Link>
                        <Link to="#contact">Pricing</Link>
                    </div>
                </div>
                <div className="links">
                    <h4>Support</h4>
                    <div>
                        <Link to="#d">Terms and condition</Link>
                        <Link to="#d">Privacy Policy</Link>
                        <Link>Lisense</Link>
                        <Link>FAQs</Link>
                        <Link>Cookies Policy</Link>
                    </div>
                </div>
                <div className="links">
                    <h4>Dvelopers</h4>
                    <div>
                        <Link to="#o">Documentation</Link>
                        <Link to="#p">APIs</Link>
                        
                    </div>
                </div>
                <div className="links">
                    <h4>Social</h4>
                    <div>
                        <p>Head Office: 12 Ologun Agbaje Street Victoria Island Lagos.</p>
                        <p>Abuja Office: 2B street Abacha Estate Wuse zone , Abuja.</p>
                        <p>09076555420, 01-5151118, 09-5150100</p>
                    </div>
                </div>
            </div>
            <div className="c_tag">
                <p>© 2024 <span>CyberPay</span> Limited. All rights reserved. | <span>Whistle Blower</span></p>
            </div>
        </footer>
    );
};

export default LandingFooter;
