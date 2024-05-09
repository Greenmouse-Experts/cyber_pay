import React from 'react'
import "../Stylesheet/downloadbtn.scss"
import { NavLink } from 'react-router-dom'
import { MdArrowOutward } from 'react-icons/md'




const BgSection = ({heading, children, paragraph,img, absolute, style, delay, sec_delay, sec_style , title, paragraph2 , link, route}) => {
  return (
    <div className="bgsection">
        <div className="img-secction" data-aos={style} data-aos-duration={delay}>
            <img src={img} className={`${absolute ? 'absolute-img': 'img_sec'}`} alt="" />
        </div>
        <div className="intro-text">
           <div data-aos={sec_style} data-aos-duration={sec_delay}>
            <p className='text-[#DFDFDF] tracking-widest'>{title}</p>
                <h2>{heading}</h2>
                <p className='paragraph'>{paragraph}</p>
                <p className='paragraph'>{paragraph2}</p>
              {link && <NavLink to={route} className="!text-[#DFDFDF] underline paragraph flex items-center gap-1">{link} <MdArrowOutward /></NavLink>}
                {children && children}
           </div>
        </div>
    </div>
  )
}

export default BgSection