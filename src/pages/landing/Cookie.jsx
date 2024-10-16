import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import "../../Stylesheet/downloadbtn.scss"
import { Link } from "react-router-dom";

const Cookie = () => {
    const [showCookieBanner, setShowCookieBanner] = useState(true);

    const handleAccept = () => {
        // Handle accept logic, e.g., set a cookie to indicate acceptance
        setShowCookieBanner(false);
    };

    const handleDecline = () => {
        // Handle decline logic, e.g., don't set any cookies
        setShowCookieBanner(false);
    };

    return (
        <div>


            {showCookieBanner && (
                <CookieConsent
                    location="bottom"
                    containerClasses="cookie"

                    expires={150}
                    buttonStyle={{ display: "none" }}
                    
                >
                    <div className="cooks">
                    <p>
                    CyberPay uses cookies to improve your website experience. By enabling cookies, you help understand your usage, tailor marketing efforts and enhance navigation. Please view our <Link to="/privacy-policy" className="text-blue-500 underline">Privacy Policy </Link> for more information
                    </p>
                    <div className="cookie_btn">
                    <button
                    className="decline_button"
                            onClick={handleDecline}
                            style={{
                                cursor: "pointer",
                                color: "black",
                                background: "white",
                                borderRadius: "5px",
                                padding: "10px 20px",
                                fontSize: "12px",
                                border: "none",
                                fontWeight: 500
                            
                            }}
                        >
                            Close
                        </button>
                        <button
                            onClick={handleAccept}
                            style={{
                                cursor: "pointer",
                                color: "#ffffff",
                                background: "#2F8ED6",
                                borderRadius: "5px",
                                padding: "10px 20px",
                                fontSize: "12px",
                                border: "none",
                                fontWeight: 500
                            }}
                        >
                            Accept Cookies
                        </button>
                        
                    </div>


                    </div>
                  
                </CookieConsent>
            )}


        </div>
    );
};
export default Cookie