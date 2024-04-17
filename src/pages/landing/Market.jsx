import React from 'react'
import "../../Stylesheet/pension.scss"
import { useTheme } from '../../ThemeContext'
import Heading from '../../layout/landing/Heading';
import solution from "../../assets/images/solution.png"
import market from "../../assets/images/market.png"


const Market = () => {
  const { theme } = useTheme();

  return (
    <div className={`pension solution ${theme === 'light' ? "" : "darkabout"}`}>
      <Heading img={solution} head="Cyberpay Marketplace & Mobile App" body="Experience seamless transactions and convenient shopping with Cyberpay Marketplace & Mobile App. Discover a world of endless possibilities at your fingertips!" />
        <div className="market padding">
        <div data-aos="fade-right" data-aos-duration="1000"  className="market_img">
            <img src={market} alt="" />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000"  className="market_text">
            <h2 className="h2">Our Story</h2>
            <p className='para'>CyberPay Marketplace and CyberPay Mobile APP gives you the satisfaction and relief of accessing all your needs at one online place either on the web or through the mobile app. We aggregate your shopping needs in one online location and provide ease of access, secured transactions and convenience, which means that you do not need to bother checking multiple online sites before you access your needs. <br /><br /> With our wealth of experience and strong competence in providing digital payment solutions across different business sectors and industries, we had you in mind in building and providing the CyberPay Marketplace & Mobile App to you. Welcome to Fast, Secure and Convenient Shopping, welcome to CyberPay where Technology Meets Lifestyle.</p>
          </div>
          
        </div>

      </div>
  )
}

export default Market