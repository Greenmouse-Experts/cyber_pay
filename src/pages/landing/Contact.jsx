import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import about from "../../assets/images/contact-img.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Contact() {
  const { theme } = useTheme();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDGaiubUdqf5Bypla2u6eSlVDmvopME5ew",
  });

  const [center, setcenter] = useState({
    lat: 6.42705,
    lng: 3.41648,
  });
  //   if (loadError) {
  //     return <div>Error loading maps</div>;
  //   }

  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Contact Us"
        body="Setting up CyberPay is a breeze, offering your customers a range of secure and user-friendly payment options."
        img="/img/contact-banner.png"
      />

      <div className="padding">
        <div className="flex lg:flex-row flex-col gap-10 items-center">
          <div className="bg-[#f4f4f4] dark:bg-bluePrimary dark:text-white   shadow-lg rounded-md p-5 flex flex-col items-center text-center lg:w-[33%] lg:h-[18rem] h-[14rem] w-full">
            <div className=" bg-bluePrimary p-4 rounded-full w-fit">
              {" "}
              <FaLocationDot color="white" size={50} />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <h4 className="text-xl font-semibold">Our Office</h4>
              <p>
                {" "}
                Head Office: 12 Ologun Agbaje Street Victoria Island Lagos.
              </p>
              <p> Plot 1722, Ademola Adetokunbo Crescent, Wuse 2, Abuja</p>
            </div>
          </div>
          <div className="bg-[#f4f4f4]  dark:bg-bluePrimary dark:text-white  shadow-lg rounded-md p-5 flex flex-col items-center text-center lg:w-[33%] lg:h-[18rem] h-[14rem] w-full">
            <div className=" bg-bluePrimary p-4 rounded-full w-fit">
              {" "}
              <FaHeadset color="white" size={50} />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <h4 className="text-xl font-semibold">Phone Number</h4>
              <p> 02015151118</p>
              <p> 02015150277</p>
              <p> 02015150173</p>
              <p> 02015150140</p>
            </div>
          </div>
          <div className="bg-[#f4f4f4] dark:bg-bluePrimary dark:text-white   shadow-lg rounded-md p-5 flex flex-col items-center text-center lg:w-[33%] lg:h-[18rem] h-[14rem] w-full">
            <div className=" bg-bluePrimary p-4 rounded-full w-fit">
              {" "}
              <IoIosMail color="white" size={50} />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <h4 className="text-xl font-semibold">Email Address</h4>
              <p> hello@cyberpay.net.ng</p>
              <p>support@cyberpay.net.ng</p>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="flex lg:flex-row gap-10 flex-col mt-20">
          <div className="w-[50%] ">
            <div>
              <iframe
                title="Contact Map"
                width="100%"
                height="600px"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.750165491411!2d3.4140952757533904!3d6.426135924285578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8acdaec4eb6b%3A0x86a6056ae99642d9!2s12%20Ologun%20Agbaje%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1717680371715!5m2!1sen!2sng"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className=" text-black border border-gray-400 rounded-md dark:text-white px-8 2xl:py-[70px] py-10 md:w-[50%] w-full   md:ml-3 ml-0 shadow-md">
            <form
              className="flex flex-col 2xl:gap-8 gap-5 "
              onSubmit={(e) => e.preventDefault()}
            >
              <h5 className="font-montserrat text-[22px] font-semibold  ">
                Contact Us
              </h5>
              <div className=" flex md:flex-row flex-col justify-between gap-8 ">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#F4F4F4] border border-gray-300 rounded-lg 2xl:h-[60px] placeholder:text-bluePrimary dark:placeholder:text-white h-[50px] pl-5 md:w-[373px] w-full"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-[#F4F4F4] border border-gray-300 rounded-lg md:w-[373px] w-full 2xl:h-[60px] placeholder:text-bluePrimary dark:placeholder:text-white  h-[50px] pl-5"
                />
              </div>
              <div className=" ">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-[#F4F4F4] border border-gray-300 rounded-lg 2xl:h-[60px] placeholder:text-bluePrimary dark:placeholder:text-white  h-[50px] pl-5 w-full"
                />
              </div>
              <div className=" ">
                <textarea
                  placeholder="Additional details"
                  className="bg-[#F4F4F4] border border-gray-300 rounded-lg text-black h-[120px] pl-5 w-full pt-4 placeholder:text-bluePrimary dark:placeholder:text-white"
                />
              </div>
              <button
                type="submit"
                className="bg-[#DD0A35] text-white font-medium py-3"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
