import React from 'react'
import "../Stylesheet/downloadbtn.scss"




const BgSection = ({heading, children, paragraph,img, absolute, style, delay, sec_delay, sec_style }) => {
  return (
    <div className="bgsection">
        <div className="img-secction" data-aos={style} data-aos-duration={delay}>
            <img src={img} className={`${absolute ? 'absolute-img': 'img_sec'}`} alt="" />
        </div>
        <div className="intro-text">
           <div data-aos={sec_style} data-aos-duration={sec_delay}>
                <h2>{heading}</h2>
                <p className='paragraph'>{paragraph}</p>
                {children && children}
           </div>
        </div>
    </div>
  )
}

export default BgSection