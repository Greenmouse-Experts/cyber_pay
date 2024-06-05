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
import { BsFilePostFill, BsPhone } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineTextsms, MdVerifiedUser } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { PiBookOpenUserFill, PiCertificateBold } from "react-icons/pi";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { LuSmartphoneNfc } from "react-icons/lu";
import { IoLinkSharp } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbPasswordMobilePhone } from "react-icons/tb";

const LandingHeader = () => {
  const { theme, toggleTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [aboutDropdownOpen2, setAboutDropdownOpen2] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    setAboutDropdownOpen(false);
  };

  const toggle2 = () => {
    setIsOpen2(!isOpen);
    setAboutDropdownOpen2(false);
  };
  const hide = () => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
  };
  const hide2 = () => {
    setIsOpen2(false);
    setAboutDropdownOpen2(false);
  };
  const show = () => setIsOpen(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setAboutDropdownOpen(false);
        setIsOpen2(false);
        setAboutDropdownOpen2(false);
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
            <NavLink
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/"
              className={({ isActive }) => (isActive ? "!text-[#2F9BD6] " : "")}
            >
              {" "}
              Home
            </NavLink>
            <div
              onClick={() => {
                setAboutDropdownOpen2(!aboutDropdownOpen2);
                setAboutDropdownOpen(false);
              }}
              className="nav_dropdown"
            >
              <span>
                {" "}
                Company <IoIosArrowDown />
              </span>
              {aboutDropdownOpen2 && (
                <div className="drop_link !mt-44">
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/about"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <MdVerifiedUser className="text-blue-500" />
                    </span>{" "}
                    About CyberPay
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/story"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <PiBookOpenUserFill className="text-sky-950" />
                    </span>{" "}
                    Our Story
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/people"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <FaUsers className="text-green-800" />
                    </span>{" "}
                    Our People
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/careers"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <FaUserTie className="text-sky-950" />
                    </span>{" "}
                    Careers
                  </NavLink>
                  <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/certifications">
                    <span className="bg-stone-50 rounded-[9px]">
                      <PiCertificateBold className="text-red-500" />
                    </span>{" "}
                    Our Certification
                  </NavLink>
                </div>
              )}
              {aboutDropdownOpen2 && (
                <div className="drop">
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/about"
                  >
                    About CyberPay <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/story"
                  >
                    Our Story
                    <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/people"
                  >
                    Our People <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/careers"
                  >
                    Careers <RiArrowRightSLine />
                  </Link>
                  <Link onClick={toggle} onBlur={hide} onFocus={show} to="/certifications">
                    Our Certification
                    <RiArrowRightSLine />
                  </Link>
                </div>
              )}
            </div>
            <div
              className="nav_dropdown"
              onClick={() => {
                setAboutDropdownOpen(!aboutDropdownOpen);
                setAboutDropdownOpen2(false);
              }}
            >
              <span>
                Solutions <IoIosArrowDown />
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
                    CyberPay Marketplace
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/mobile-app"
                  >
                    {" "}
                    <span className="bg-stone-50 rounded-[9px]">
                      <BsPhone className="text-sky-950" />
                    </span>{" "}
                    CyberPay Mobile App
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/disbursement-solutions"
                  >
                    {" "}
                    <span className="bg-stone-50 rounded-[9px]">
                      <LiaToolsSolid className=" !text-green-800" />
                    </span>{" "}
                    Disbursement Solution
                  </NavLink>
                  <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/bulksms">
                    {" "}
                    <span className="bg-stone-50 rounded-[9px]">
                      <MdOutlineTextsms className="text-sky-950" />
                    </span>{" "}
                    Bulk SMS
                  </NavLink>
                  <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/direct-debit">
                    {" "}
                    <span className="bg-stone-50 rounded-[9px]">
                      <GiReceiveMoney className=" !text-blue-500" />
                    </span>{" "}
                    Direct Debit
                  </NavLink>
                  <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/pos-service">
                    {" "}
                    <span className="bg-stone-50 rounded-[9px]">
                      <BsFilePostFill className="text-sky-950" />
                    </span>{" "}
                    POS Services
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/penremit"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <BiWallet className="text-rose-600" />
                    </span>
                    PenRemit
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/payment-link"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <IoLinkSharp className="text-rose-600" />
                    </span>
                    Online Sales with Payment Link
                  </NavLink>
                  <NavLink
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/ussdcollection"
                  >
                    <span className="bg-stone-50 rounded-[9px]">
                      <TbPasswordMobilePhone className="text-sky-950" />
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
                      <FaMoneyBillTransfer className="text-green-800" />
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
                    CyberPay Marketplace <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/mobile-app"
                  >
                    CyberPay Mobile App <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/disbursement-solutions"
                  >
                    Disbursement Solution <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/bulksms"
                  >
                    Bulk SMS <RiArrowRightSLine />
                  </Link>
                  <Link onClick={toggle} onBlur={hide} onFocus={show} to="/direct-debit">
                  Direct Debit <RiArrowRightSLine />
                  </Link>
                  <Link onClick={toggle} onBlur={hide} onFocus={show} to="/pos-service">
                    POS Services <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/penremit"
                  >
                    PenRemit <RiArrowRightSLine />
                  </Link>
                  <Link
                    onClick={toggle}
                    onBlur={hide}
                    onFocus={show}
                    to="/payment-link"
                  >
                    Online Sales with Payment Link <RiArrowRightSLine />
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
              to="/whycyberpay"
              className={({ isActive }) => (isActive ? "!text-[#2F9BD6] " : "")}
            >
              Why CyberPay
            </NavLink>

            <NavLink
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/developer"
              className={({ isActive }) => (isActive ? "!text-[#2F9BD6] " : "")}
            >
              Developer API
            </NavLink>
            <NavLink
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/faqs"
              className={({ isActive }) => (isActive ? "!text-[#2F9BD6] " : "")}
            >
              FAQs
            </NavLink>
            <NavLink
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
              to="/contact"
              className={({ isActive }) => (isActive ? "!text-[#2F9BD6] " : "")}
            >
              Contact Us
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
              to="https://merchant.cyberpay.ng"
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
        <Link to="https://merchant.cyberpay.ng/" className="login_span ">
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
