import React, { useState, useEffect, useRef } from "react";
import "../../Stylesheet/navbar.css";
import logo from "../../assets/images/logo.png";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidUserCircle } from "react-icons/bi";
import ToggleBtn from "../../components/Togglebtn";
import { useTheme } from "../../ThemeContext";
import dark from "../../assets/images/dark-logo.png";

const LandingHeader = () => {
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
      className={`navbar ${fix ? "fixed" : ""} ${theme === "light" ? "" : "nav_dark"
        }`}
    >
      <div className="logo">
        {theme === "light" ? (
          <img src={logo} alt="Cyberpay-logo" />
        ) : (
          <img src={dark} alt="Cyberpay-logo" />
        )}
      </div>

      <div className={`nav_body`}>
        <div
          ref={dropdownRef}
          className={`nav_div ${isOpen ? "show_nav" : "hide_nav"} ${theme === "light" ? "" : "navDark"
            }`}
        >
          <div className="nav_link">
            <Link onClick={toggle} onBlur={hide} onFocus={show} to="/">
              {" "}
              Home
            </Link>
            <div
              className={`nav_dropdown ${theme === "light" ? "" : "dd-dark"}`}
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            >
              Solution <IoIosArrowDown />
              {/* {aboutDropdownOpen && (
            <div className="C">
              <div className="drop_link">
                <Link to="/who-we-are">Who Are We  <RiArrowRightSLine /></Link>
              <Link to="/careers">Careers  <RiArrowRightSLine /></Link>
              <Link to="/our-clients">Our Clients <RiArrowRightSLine /></Link>
              <Link to="/health-safety">Health Safety <RiArrowRightSLine /></Link>
              </div>              
            </div>
          )} */}
            </div>
            <Link onClick={toggle} onBlur={hide} onFocus={show} to="/about">
              Company
            </Link>
            <Link
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/whycyberpay"
            >
              Why CyberPay
            </Link>

            <Link onClick={toggle} onBlur={hide} onFocus={show} to="/developer">
              Developer
            </Link>
            <Link onClick={toggle} onBlur={hide} onFocus={show} to="/pricing">
              Pricing
            </Link>
          </div>

          <div className="hide nav_hide">
            <span onClick={toggleTheme}>
              <ToggleBtn />
              Theme
            </span>
            <Link
            data-aos="zoom-in-up" data-aos-duration="1000"
              className="login_btn"
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/"
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
          to="/"
        >
          Login
        </Link>
        <Link className="login_span ">
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
