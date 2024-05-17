import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function PolicyFooter() {
  return (
    <div className="md:w-[30%] w-full flex gap-5">
    <NavLink
      to="/about"
      className="bg-white text-[#2F9BD6] flex items-center gap-2 text-[1.1rem] font-medium py-4 px-9 text-nowrap"
    >
      Learn More{" "}
      <span>
        <FaArrowRight />
      </span>
    </NavLink>
    <NavLink
        to="https://merchant.cyberpay.ng/signup"
      className="bg-white text-[#2F9BD6] flex items-center gap-2 text-[1.1rem] font-medium py-4 px-9 text-nowrap"
    >
      Get Started{" "}
      <span>
        <FaArrowRight />
      </span>
    </NavLink>
  </div>
  )
}

export default PolicyFooter