import React from 'react'
import {Link} from "react-router-dom"
import "../Stylesheet/downloadbtn.scss"

const DownloadButton = ({ img, span, text, delay, style, color, radius, store}) => {

  const link = text === "Google Play" ? 'https://play.google.com/store/apps/details?id=com.cyberpay.cyberpay_mobile_2' : 'https://apps.apple.com/ng/app/cyberpay/id6466426786'
  return (

    <Link data-aos={style} data-aos-duration={delay}  to={link} className={`download_link flex w-fit ${radius ?  "rounded-2xl" : "rounded-lg"}  ${color === "black" ? "bg-[#000000] dark:bg-white dark:!text-black" : "bg-[#042E46] dark:!bg-white dark:!text-black "} `} >
      <img className='h-7 w-7' src={img} alt="" />
      <div>
        <span className='text-xs dark:!text-black' >{span}</span>
        <p className='text-sm dark:!text-black'>{text}</p>
      </div>
    </Link>
      )
}

export default DownloadButton