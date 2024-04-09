import React, { useState } from 'react';
import "../../../../Stylesheet/section.scss";
import PlayVideo from './PlayVideo';
import { AiOutlinePlus, AiOutlineMinus, AiOutlinePlayCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Videomodal = () => {
    
  const [showVideoPopup, setShowVideoPopup] = useState(false);

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
      head: "Our Solutions",
      body: "",
      style: "fade-down",
      delay: "1500"

    },
    {
      id: 2,
      head: "Our Company",
      body: "",
      style: "fade-down",
      delay: "1200"
    },
    {
      id: 3,
      head: "Developers API",
      body: "",
      style: "fade-down",
      delay: "900"
    },
    {
      id: 4,
      head: "FAQs",
      body: "",
      style: "fade-down",
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
          <div data-aos={item.style} data-aos-duration={item.delay} key={item.id} className="faq_content">
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
