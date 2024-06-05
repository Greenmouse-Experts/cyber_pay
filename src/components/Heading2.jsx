import React from "react";
import "../Stylesheet/header.scss";

const Heading2 = ({ head, body, img }) => {
  return (
    <section className={`header `}>
     
      <div className="main_head items-center bg-bluePrimary">
        <div className="header_text">
          <h1>{head}</h1>
          <p>{body}</p>

          {/* <Resuablebtn link='/whycyberpay' text="View our Solutions" icon={<RxArrowRight />} /> */}
        </div>
        <div className="header_img">
        { img && <img src={img} alt="" />}
        </div>
      </div>
    </section>
  );
};

export default Heading2;
