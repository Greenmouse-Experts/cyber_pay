import React, { useEffect, useState } from "react";
import card from "../../../../assets/images/card.png";
import darkcard from "../../../../assets/images/darkcard.png";
import "../../../../Stylesheet/section.scss";
import { useTheme } from "../../../../ThemeContext";
import { motion } from "framer-motion";

const Card = ({ children, rotation }) => {
  // You can optionally add a default rotation value here if needed:
  // rotation = rotation || 0;  // Sets default to 0 degrees

  return (
    <motion.div
    className="flex absolute md:justify-end items-center top-0">
      {children}
    </motion.div>
  );
};

const CardSection = () => {
  const { theme } = useTheme();
  const [isRotated, setIsRotated] = useState(false); // Flag for rotation state
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsRotated((prevRotated) => !prevRotated);
    }, 5000); // Adjust interval (2 seconds here)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card_section md:pt-[10rem] pt-[5rem] md:pb-[20rem] pb-[7rem]">
      <div data-aos="fade-left" data-aos-duration="1200" className="card_text">
        <span>Coming Soon!</span>
        <h2
          data-aos="zoom-in-up"
          data-aos-duration="1100"
          className="h2 text-white"
        >
          Get the CyberPay Virtual Card
        </h2>
        <p className="text-white">
          Experience the convenience of our innovative services, managing your
          finances has never been easier. With user-centric design, navigating
          complex financial tasks is effortless.
        </p>
      </div>
      <div data-aos="fade-right" data-aos-duration="1200" className="flex md:justify-end md:ml-auto card_img relative">
       
          <Card rotation={135}>
            <motion.div
              animate={{ rotate: isRotated ? -135 : 0 }} // Apply opposite rotation
              transition={{ duration: 3 }} // Adjust animation duration (0.5 seconds here)
            >
              {/* Top card content here */}
              <img src={card} alt="" />
            </motion.div>
          </Card>
          <Card rotation={90}>
            <motion.div
              animate={{ rotate: isRotated ? 90 : 0 }} // Apply rotation
              transition={{ duration: 3 }} // Adjust animation duration (0.5 seconds here)
            >
              {/* Bottom card content here */}
              <img src={card} alt="" />
            </motion.div>
          </Card>
          <Card rotation={135}>
            <motion.div
              animate={{ rotate: isRotated ? 135 : 0 }} // Apply rotation
              transition={{ duration: 3 }} // Adjust animation duration (0.5 seconds here)
            >
              {/* Bottom card content here */}
              <img src={card} alt="" />
            </motion.div>
          </Card>
     
     
        {/* {theme === "light" ? (
            <img src={card} alt="" />
          ) : (
            <img src={darkcard} alt="" />
          )} */}
      </div>
    </div>
  );
};

export default CardSection;
