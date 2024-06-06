import React from "react";
import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/solution.png";
import seam1 from "../../assets/images/seam1.png";
import seam2 from "../../assets/images/seam2.png";
import seam3 from "../../assets/images/seam3.png";
import { GoDotFill } from "react-icons/go";
import ease from "../../assets/images/ease.png";
import Resuablebtn from "../../components/Resuablebtn";
import { RxArrowRight } from "react-icons/rx";
import Heading2 from "../../components/Heading2";

const UssdCollect = () => {
  const { theme } = useTheme();
  const data = [
    {
      num: 1,
      body: "Dial the USSD code *5988# on your mobile device",
    },
    {
      num: 2,
      body: "Select payment action from listed options eg. subscription, bills e.t.c",
    },
    {
      num: 3,
      body: "Enter the desired amount you wish to pay and continue ",
    },
    {
      num: 4,
      body: "Select your desired bank you wish to be debited from",
    },
    {
      num: 5,
      body: "Enter your protected transaction pin to authorize your payment",
    },
    {
      num: 6,
      body: "Receive payment receipt after confirmed transaction. ",
    },
  ];

  return (
    <div className={`pension ussd ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="img/ussd-banner.png"
        head="USSD Collection"
        body="The current circumstances have necessitated a change in the way things are done. The changes cut across every sphere of life. "
      />

      <div className="seam">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="seam_text"
        >
          <h2 className="h2">Seamless Payments Collection</h2>
          <p className="para mb-8">
            The COVID-19 pandemic has profoundly changed our world, accelerating
            digitalization. However, many established organizations lag in
            adapting to this new landscape, clinging to outdated processes.
            Lockdowns and restrictions due to the virus have catalyzed
            significant shifts in how we operate. These changes are pervasive,
            impacting every aspect of life.
          </p>
          <Resuablebtn
              link="https://merchant.cyberpay.ng/signup"
              place="center-bottom"
              delay="1300"
              style="zoom-in"
              data-aos-duration="1100"
              text="Get Started"
              icon={<RxArrowRight />}
            />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="seam_img">
          <img src={seam1} alt="" />
        </div>
      </div>
      <div className="seam seam2">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="seam_img"
        >
          <img src={seam2} alt="" className="rounded-2xl"/>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="seam_text"
        >
          <h2 className="h2">Benefits to the users</h2>

          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />A user can use code
            with any bank account tied to his/her mobile number.
          </p>

          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />
            Easy and Simple to Use.
          </p>

          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />
            One Time dial to Pay code.
          </p>

          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />
            Convenient for giving at any location and time.
          </p>

          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />
            Instant Notification/Receipt.
          </p>
          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />
            Smart Phone not required.
          </p>
          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />
            Promotes instant giving.
          </p>
          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />
            Prevents chargeback issues.
          </p>
          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />
            Saves time.
          </p>
          <p className="flex items-center gap-1">
            <GoDotFill className="text-bluePrimary dark:text-white" />
            No restrictions to a single bank.
          </p>
        </div>
      </div>
      {/* <div className="seam ">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="seam_text"
        >
          <h2 className="h2">Benefits to the members</h2>
          <p className="para">
            • A member can use code with any bank account tied to his/her mobile
            number.
            <br />
            • Easy and Simple to Use.
            <br />
            • One Time dial to Pay code.
            <br />
            • Convenient for giving at any location and time.
            <br />
            • Instant Notification/Receipt.
            <br />
            • Smart Phone not required.
            <br />
            • Promotes instant giving.
            <br />
            • Prevents chargeback issues.
            <br />
            • Saves time.
            <br />• No restrictions to a single bank.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="seam_img">
          <img src={seam3} alt="" />
        </div>
      </div> */}

      <div className="procedure padding bg-sky-950">
        <h2 className="h2 text-center text-white">
        The USSD Procedure
        </h2>

        <div className="procedure_list">
          {data.map((item, index) => (
            <div className="ussd_card dark:!bg-gray-600 dark:text-white rounded-[15px]" key={index}>
              <span className="bg-rose-200  text-rose-600 dark:bg-rose-800">{item.num}</span>
              <p className="para">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="option padding">
        <h2 className="h2">USSD Solution Options</h2>

        <div className="option_div">
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="code bg-indigo-50 rounded-2xl dark:!bg-gray-600"
          >
            <h3 className="h3">Dedicated Code</h3>
            <p>
              <GoDotFill /> Example: *5599#{" "}
            </p>
            {/* <p>
              <GoDotFill /> XYZ Church as Single User{" "}
            </p> */}
            <p>
              <GoDotFill /> Special Menu List Creation{" "}
            </p>
            <p>
              <GoDotFill /> Multiple Settlement Account{" "}
            </p>
            <p>
              <GoDotFill /> Free Integration{" "}
            </p>
            <p>
              <GoDotFill /> 24/7 Support{" "}
            </p>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            className="code bg-pink-100 rounded-2xl dark:!bg-gray-600"
          >
            <h3 className="h3">Shared Code</h3>
            <p>
              <GoDotFill /> Example: *5599*5#{" "}
            </p>
            <p>
              <GoDotFill /> *5599 String Code Shared with other users{" "}
            </p>
            {/* <p>
              <GoDotFill /> Predetermined menu details: offering, tithe,
              e.t.c{" "}
            </p> */}
            <p>
              <GoDotFill /> Multiple Settlement Account{" "}
            </p>
            <p>
              <GoDotFill /> Free Integration{" "}
            </p>
            <p>
              <GoDotFill /> 24/7 Support{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="ease padding">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="ease_text"
        >
          <h2 className="h2">Manage organisation account with ease</h2>
          <ul>
            <li className="para">
              Share collection history via other convenient channels with users.
            </li>
            <li className="para">
              Easy financial records, track history, settlements and
              reconciliation.
            </li>
           
          </ul>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="ease_img"
        >
          <img src={ease} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UssdCollect;
