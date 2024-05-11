import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import about from "../../assets/images/about-header.png";
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
    lat: 6.584041,
    lng: 3.2464628,
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
        img={about}
      />

      <div className="padding">
        <div className="flex lg:flex-row flex-col gap-10 items-center">
          <div className="bg-[#f4f4f4]  shadow-lg rounded-md p-5 flex flex-col items-center text-center lg:w-[33%] lg:h-[18rem] h-[14rem] w-full">
            <div className=" bg-bluePrimary p-4 rounded-full w-fit">
              {" "}
              <FaLocationDot color="white" size={50} />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <h4 className="text-xl">Our Office</h4>
              <p>
                {" "}
                Head Office: 12 Ologun Agbaje Street Victoria Island Lagos.
              </p>
              <p> Abuja Office: 2B street Abacha Estate Wuse Zone , Abuja.</p>
            </div>
          </div>
          <div className="bg-[#f4f4f4]  shadow-lg rounded-md p-5 flex flex-col items-center text-center lg:w-[33%] lg:h-[18rem] h-[14rem] w-full">
            <div className=" bg-bluePrimary p-4 rounded-full w-fit">
              {" "}
              <FaHeadset color="white" size={50} />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <h4 className="text-xl">Phone Number</h4>
              <p> 02015151118</p>
            </div>
          </div>
          <div className="bg-[#f4f4f4]  shadow-lg rounded-md p-5 flex flex-col items-center text-center lg:w-[33%] lg:h-[18rem] h-[14rem] w-full">
            <div className=" bg-bluePrimary p-4 rounded-full w-fit">
              {" "}
              <IoIosMail color="white" size={50} />
            </div>
            <div className=" flex flex-col gap-3 mt-3">
              <h4 className="text-xl">Email Address</h4>
              <p> hello@cyberpay.net.ng</p>
              <p>support@cyberpay.net.ng</p>
            </div>
          </div>
        </div>

        {/* map */}
        <div className="flex lg:flex-row gap-10 flex-col mt-20">
          <div className="w-[50%] ">
           {isLoaded ? 
           <GoogleMap
              mapContainerStyle={{width:"100%", height:"100%" }}
              zoom={10}
              center={center}>
              <Marker position={center} />
            </GoogleMap> :
            <h4>Loading...</h4>
  }
  </div>
  <div className="bg-bluePrimary text-white px-8 2xl:py-[70px] py-10 md:w-[50%] w-full   md:ml-3 ml-0 shadow-md">
              <form
                className="flex flex-col 2xl:gap-8 gap-5 "
                onSubmit={(e) => e.preventDefault()}
              >
                <h5 className="font-montserrat text-[22px] font-semibold  ">
                  Contact Us
                </h5>
                <p className="leading-5 font-medium font-montserrat text-white 2xl:leading-6">
                  Complete control over products allows us to ensure our
                  customers receive the best quality prices and service. We take
                  great pride in everything that we do in our factory.
                </p>
                <div className=" flex md:flex-row flex-col justify-between gap-8 ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-grayPrimary2 h-[50px] pl-5 md:w-[373px] w-full"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-[#F4F4F4] md:w-[373px] w-full 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5"
                  />
                </div>
                <div className=" ">
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
                  />
                </div>
                <div className=" ">
                  <textarea
                    placeholder="Additional details"
                    className="bg-[#F4F4F4] text-black h-[120px] pl-5 w-full pt-4"
                  />
                </div>
                <button type="sunmit bg-red-500">Submit Form</button>
              </form>
            </div>
           </div>
          
          
       
     
      </div>
    </div>
  );
}

export default Contact;