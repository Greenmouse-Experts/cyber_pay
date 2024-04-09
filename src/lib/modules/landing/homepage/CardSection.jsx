import React from 'react'
import card from "../../../../assets/images/card.png"
import darkcard from "../../../../assets/images/darkcard.png"
import "../../../../Stylesheet/section.scss"
import { useTheme } from '../../../../ThemeContext'

const CardSection = () => {
    const {theme} = useTheme()
  return (
    <div className="card_section">
        <div data-aos="fade-left" data-aos-duration="1200" className="card_text">
            <span>Coming Soon!</span>
            <h2 data-aos="zoom-in-up" data-aos-duration="1100" className="h2 text-white">Get the Cyberpay Debit Card</h2>
            <p className='text-white'>Experience the convenience of our innovative services, managing your finances has never been easier. With user-centric design, navigating complex financial tasks is effortless.</p>
        </div>
        <div data-aos="fade-right" data-aos-duration="1200" className="card_img">
        {theme === "light" ? (
            <img src={card} alt="" />
          ) : (
            <img src={darkcard} alt="" />
          )}
        </div>
    </div>
    )
}

export default CardSection