import React, { useState } from 'react';
import "../../../../Stylesheet/section.scss";
import PlayVideo from './PlayVideo';
import { AiOutlinePlus, AiOutlineMinus, AiOutlinePlayCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Videomodal = () => {
    
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const navigate = useNavigate();

  const handleVideoClick = () => {
    setShowVideoPopup(true);
  };

  const handleCloseVideoPopup = () => {
    setShowVideoPopup(false);
  };

  const [openItemId, setOpenItemId] = useState(null);
  
  const handleItemClick = (id) => {
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  };

  const faqData = [
    {
      id: 1,
      head: "Why Cyberpay",
      body: "",
      style: "fade-down",
      link:"whycyberpay",
      delay: "1500"

    },
    {
      id: 2,
      head: "Our Company",
      body: "",
      style: "fade-down",
      link:"about",
      delay: "1200"
    },
    {
      id: 3,
      head: "Developers API",
      body: "",
      style: "fade-down",
      link:"developer",
      delay: "900"
    },
    {
      id: 4,
      head: "FAQs",
      body: "",
      style: "fade-down",
      link:"",
      delay: "600"

    }
  ];

  return (
    <div className="video">
      <div className="play_btn" >
        <span onClick={handleVideoClick} ><FaPlay/></span>
      </div>
      <div className="faq_main">
        {faqData.map((item) => (
          <div data-aos={item.style} data-aos-duration={item.delay} key={item.id} onClick={() => navigate(`/${item.link}`)} className="faq_content cursor-pointer">
            <div onClick={() => handleItemClick(item.id)} className="faq_head">
             
              <p>{item.head}</p>
              <span onClick={() => handleItemClick(item.id)} className="faq_icon">
                {openItemId === item.id ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </span>
            </div>
            {openItemId === item.id && (
              <div className="faq_body">{item.body}</div>
            )}
          </div>
        ))}
      </div>
      {showVideoPopup && (
        <div className="popup">
          <PlayVideo onClose={handleCloseVideoPopup} />
        </div>
      )}
    </div>
  );
};

export default Videomodal;
