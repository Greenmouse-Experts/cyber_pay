import React from 'react'
import {Link} from "react-router-dom"
import { useTheme } from '../ThemeContext';
import "../Stylesheet/downloadbtn.scss"



const Resuablebtn = ({icon, link, text, delay, style, place}) => {
    const {theme} = useTheme()
  return (
    <Link to={link} className={`reuseable ${theme === "light" ? "" : "dark_btn"}`}>
        <span>
            {text}
        </span>
        {icon}
    </Link>
    
  )
}

export default Resuablebtn