import React from 'react'
import {Link} from "react-router-dom"
import "../Stylesheet/downloadbtn.scss"

const DownloadButton = ({ img, span, text, delay, style, color, radius, store}) => {

  const link = text === "Google Play" ? 'https://play.google.com/store/search?q=cyberpay&c=apps' : 'https://apps.apple.com/ng/app/cyberpay/id6466426786'
  return (

    <Link data-aos={style} data-aos-duration={delay}  to={link} className={`download_link flex w-fit ${radius ?  "rounded-2xl" : "rounded-lg"}  ${color === "black" ? "bg-[#000000]" : "bg-[#042E46]"}`} >
      <img className='h-7 w-7' src={img} alt="" />
      <div>
        <span className='text-xs' >{span}</span>
        <p className='text-sm'>{text}</p>
      </div>
    </Link>
      )
}

export default DownloadButton