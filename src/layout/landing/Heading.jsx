import React from "react";
import "../../Stylesheet/header.scss";

const Heading = ({ head, body, img }) => {
  return (
    <section className={`header`}>
      <img
        src={img ? img : "/img/story.png"}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="main_head items-center">
        <div className="header_text">
          <h1>{head}</h1>
          <p>{body}</p>

          {/* <Resuablebtn link='/whycyberpay' text="View our Solutions" icon={<RxArrowRight />} /> */}
        </div>
        {/* <div className="header_img">
          <img src={img} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Heading;
