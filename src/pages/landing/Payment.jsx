import React from 'react'
import "../../Stylesheet/pension.scss"
import { useTheme } from '../../ThemeContext'
import Heading from '../../layout/landing/Heading';
import solution from "../../assets/images/solution.png"
import { Link } from 'react-router-dom'
import { HiMiniArrowRightCircle } from 'react-icons/hi2'
import icon from "../../assets/images/icon.svg"



const Payment = () => {
  const { theme } = useTheme();
  const data = [
    {
      head: "One Platform, Multiple Channels.",
      body: "With one integration, your customers can make payments on your website with their bank cards, their bank accounts, USSD, QR Code, eWallet etc."
    },
    {
      head: "Great Checkout Experience",
      body: "We have deployed a simple and highly efficient transaction processing system that ensures your transactions do not fail, guaranteeing a great checkout experience for your customers."
    },
    {
      head: "Secure Transactions.",
      body: "We ensure top-notch security with full compliance to PCI-DSS, MasterCard Secure, Verified by Visa (VbyV), and Verve Safetoken standards for seamless payment processing."
    },
  ]

  return (
    <div className={`pension solution ${theme === 'light' ? "" : "darkabout"}`}>
      <Heading img={solution} head="Accept Payments Securely on your Website" body="CyberPay offers a smart, convenient, and highly secure process of receiving payments from your customers all over the world" />
      <div className="benefit pay">
        <div className="list_1">
          <div data-aos="zoom-in-right" data-aos-duration="1100" className="dark_card">
            <h2 className="h2"><img src={icon} alt="" />
            Global Payment Solutions with CyberPay: Smart, Convenient, and Secure
            </h2>

            
          </div>
          <div data-aos="zoom-in-left" data-aos-duration="1100" className="lists_card">
            <h3>Features and Benefits</h3>
            <p>Explore the Comprehensive Features and Exclusive Benefits of Our Services, Tailored to Enhance Your Experience and Maximize Your Results. </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1100" className="list_2">
          {data.map((item) => (
            <div className="list_card">
              <h3>{item.head}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Payment