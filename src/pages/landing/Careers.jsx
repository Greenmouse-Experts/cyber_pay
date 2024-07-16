import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import "../../Stylesheet/about.scss";
import CareerForm from "../../components/CareerForm";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Careers = () => {
  const { theme } = useTheme();

  const [showForm, setShowForm] = useState(false)

  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Careers"
        body="We value self-motivation, a strong work ethic, and a desire to continuously develop your skillset."
        img="/img/careers-img.png"
      />

      <div>
        <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
          <div
            className="flex flex-col gap-5 lg:w-[60%] w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="h3">CAREER OPPORTUNITIES</h3>
            {/* <h2 className="h2"></h2> */}
            <h5 className="font-montserrat text-xl font-semibold  ">
              Join our team
            </h5>
            <p className="para">
              At CyberPay, we believe that every employee plays a vital role in
              shaping the future of our company. That's why we offer
              comprehensive training programs designed to foster personal and
              professional growth, as well as opportunities for career
              advancement within our organization. Our goal is to empower each
              member of our team to reach their full potential and make
              meaningful contributions to our mission.
            </p>
          </div>
          <div
            className="lg:w-[40%] w-full "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="/img/career-1.png"
              alt=""
              className="w-full rounded-2xl h-[20rem]"
            />
          </div>
        </div>

        <div className="bg-sky-950 flex flex-col items-center px-0 padding text-white text-center">
          <h2 className="h2">Recruitment scam warning</h2>
          <p className="para !font-semibold">
            CyberPay will never ask you for money to support any job
            application. For general enquiries, please contact hello@cyberpay.net.ng
          </p>
        </div>

      

        <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
          <div
            className="flex flex-col gap-5 lg:w-[60%] w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5 className="font-montserrat text-xl font-semibold  ">
              Submit Your CV
            </h5>
            <p className="para">
              Submit your CV for a review when there is an opening for your
              desired career.
            </p>
            <div className="flex gap-3">
              <NavLink
                to="/career-form"
                className="bg-[#DD0A35]  hover:-translate-y-[2px] transition-all text-lg px-8 py-5 rounded-[4rem] text-white flex items-center gap-2 text-nowrap"
              >
                Apply here
              </NavLink>
            </div>
          </div>

          <div
            className="lg:w-[40%] w-full "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src="/img/career-3.png"
              alt=""
              className="w-full rounded-2xl h-[20rem]"
            />
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Careers;

{
  /* <div
data-aos="fade-right"
data-aos-duration="1000"
className="story_img"
>
<img src="/img/careers-main.webp" alt=""  className="rounded-xl"/>
</div> */
}
