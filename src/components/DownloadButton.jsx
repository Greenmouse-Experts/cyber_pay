import React from 'react'
import {Link} from "react-router-dom"
import "../Stylesheet/downloadbtn.scss"

const DownloadButton = ({link, img, span, text, delay, style}) => {
  return (

    <Link data-aos={style} data-aos-duration={delay}  to={link} className='download_link flex w-fit'>
      <img className='h-9 w-9' src={img} alt="" />
      <div>
        <span className='text-xs' >{span}</span>
        <p className='text-sm'>{text}</p>
      </div>
    </Link>
      )
}

export default DownloadButton