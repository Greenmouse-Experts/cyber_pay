import React from 'react'
import DownloadButton from './DownloadButton'
import bank from "../assets/images/bank.png";
import play from "../assets/images/play.png";
import appledark from "../assets/images/apple-logo.png";
import apple from "../assets/images/apple.png";
import { useTheme } from '../ThemeContext';

function TextSlider() {
  const {theme} = useTheme()
  return (
  <div className='landing'>
      <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="landing_text"
        >
          <h2 className={`h2 !text-white`}>
            Flexible Payment Options With CyberPay
          </h2>
          <p className="text-white">
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

            <p className="flex !item-center gap-2 w-fit text-white">
              <span>Fully Licensed by the CBN</span>

              <img src={bank} alt="" />
            </p>
          </div>
        </div>
  </div>
  )
}

export default TextSlider