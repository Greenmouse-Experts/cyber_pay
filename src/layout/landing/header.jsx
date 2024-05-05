import React, { useState, useEffect, useRef } from "react";
import "../../Stylesheet/navbar.css";
import logo from "../../assets/images/logo.png";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidUserCircle, BiTransferAlt } from "react-icons/bi";
import ToggleBtn from "../../components/Togglebtn";
import { useTheme } from "../../ThemeContext";
import dark from "../../assets/images/dark-logo.png";
import { BiWallet } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";

const LandingHeader = () => {
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    setAboutDropdownOpen(false);
  };
  const hide = () => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
  };
  const show = () => setIsOpen(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 40) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <div
      className={`navbar ${fix ? "fixed" : ""} ${
        theme === "light" ? "" : "nav_dark"
      }`}
    >
      <div className="logo">
        <Link to="/">
          {theme === "light" ? (
            <img src={logo} alt="Cyberpay-logo" />
          ) : (
            <img src={dark} alt="Cyberpay-logo" />
          )}
        </Link>
      </div>

      <div className={`nav_body`}>
        <div
          ref={dropdownRef}
          className={`nav_div ${isOpen ? "show_nav" : "hide_nav"} ${
            theme === "light" ? "" : "navDark"
          }`}
        >
          <div className="nav_link">
            <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/" className={({ isActive }) => (isActive ? '!text-[#dd0a35] !font-medium' : "")} >
              {" "}
              Home
            </NavLink>
            <div
              className="nav_dropdown"
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            >
              <span>
                Solution <IoIosArrowDown />
              </span>
              {aboutDropdownOpen && (
                <div className="drop_link">
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/marketplace"
                  >
                    {" "}
                    <span className="bg-stone-50 rounded-[9px]">
                      <FiShoppingBag className=" !text-blue-500" />
                    </span>{" "}
                    Marketplace and Mobile App
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/micropension"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <BiWallet className="text-rose-600" />
                    </span>
                    Micro Pension
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/ussdcollection"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <BsPhone className="text-sky-950" />
                    </span>
                    USSD Collection
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/payment"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <BiTransferAlt className="text-purple-800" />
                    </span>
                    CyberPay online (Web / Mobile) <br /> Payment Processing
                  </NavLink>
                </div>
              )}
              {aboutDropdownOpen && (
                <div className="drop">
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/marketplace"
                  >
                    Marketplace and Mobile App <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/micropension"
                  >
                    Micro Pension <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/ussdcollection"
                  >
                    USSD Collection <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/payment"
                  >
                    CyberPay online (Web / Mobile) <br /> Payment Processing{" "}
                    <RiArrowRightSLine />
                  </Link>
                </div>
              )}
            </div>
            <NavLink
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/about"
              className={({ isActive }) => (isActive ? '!text-[#dd0a35] !font-medium' : "")}
            >
              Company
            </NavLink>
            <NavLink
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/whycyberpay"
              className={({ isActive }) => (isActive ? '!text-[#dd0a35] !font-medium' : "")}
            >
              Why CyberPay
            </NavLink>

            <NavLink
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/developer"
              className={({ isActive }) =>
                isActive ? "!text-[#dd0a35] !font-medium" : ""
              }
            >
              Developer
            </NavLink>
            <NavLink
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/pricing"
              className={({ isActive }) => (isActive ? '!text-[#dd0a35] !font-medium' : "")}
            >
              Pricing
            </NavLink>
          </div>

          <div className="hide nav_hide">
            <span onClick={toggleTheme}>
              <ToggleBtn />
              Theme
            </span>
            <Link
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="login_btn"
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>

        <ToggleBtn />
        <Link
          className="login_btn"
          onClick={toggle}
          onBlur={hide}
          onFocus={show}
          to="https://merchant.cyberpay.ng/"
        >
          Login
        </Link>
        <Link to="/login" className="login_span ">
          <BiSolidUserCircle />
        </Link>

        <button className="nav_toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseFill /> : <RiMenuFill />}
        </button>
      </div>
    </div>
  );
};

export default LandingHeader;
