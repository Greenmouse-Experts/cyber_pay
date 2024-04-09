import React from 'react'
import "../../Stylesheet/header.scss"
import Resuablebtn from "../../components/Resuablebtn";
import { RxArrowRight } from "react-icons/rx";



const Heading = ({head, body, img}) => {
  return (
    <div className='header'>
      <div className="main_head">
        <div className="header_text">
          <h1>{head}</h1>
          <p>{body}</p>

          <Resuablebtn text="View our Solutions" icon={<RxArrowRight />} />
        </div>
        <div className="header_img">
          <img src={img} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Heading