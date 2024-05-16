
import {Link} from "react-router-dom"
import img from "../assets/images/play.png"


const downloadBtn = () => {
  return (
    // <Link to={link} className='download_link'>
    //   <img src={img} alt="" />
    //   <div>
    //     <span>{span}</span>
    //     <p>{text}</p>
    //   </div>
    // </Link>

    <Link to="/" className='download_link flex '>
      <img src={img} alt="" />
      <div>
        <span>GET it on</span>
        <p>Google Play</p>
      </div>
    </Link>
  )
}

export default downloadBtn

