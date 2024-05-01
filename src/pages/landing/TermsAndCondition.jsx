
import Heading from '../../layout/landing/Heading'
import banner from "../../assets/images/terms.png";
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';

function TermsAndCondition() {
    const { theme } = useTheme();
  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img={banner}
        head="Data Privacy Policy"
        body="Data Privacy Policy: Safeguarding Your Information"
      />

      <div className="padding mt-5">
        <div className="mb-12">
          <h3 className="h3 mb-5">
          What’s in these terms?
          </h3>
          <p className="para text-[#565656]">
          These terms tell you the framework for using our site.
          </p> 
        </div>

        <div className="mt-20">
          <button className="bg-[#2F9BD6] cursor-pointer text-white underline mx-auto rounded-[4.8rem] flex items-center gap-2 text-[1.1rem] font-medium py-4 px-9 text-nowrap">
            Read all our Privacy Policies
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      <div className="bg-[#2F9BD6] padding flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center mt-5">
        <h3 className="h3 md:w-[55%] w-full text-white leading-10">
          CyberPay offers effortless setup and provides customers with a range
          of convenient and secure payment options.
        </h3>

        <div className="md:w-[30%] w-full flex gap-5">
          <button className="bg-white text-[#2F9BD6] flex items-center gap-2 text-[1.1rem] font-medium py-4 px-9 text-nowrap">
            Learn More{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
          <button className="bg-white text-[#2F9BD6] flex items-center gap-2 text-[1.1rem] font-medium py-4 px-9 text-nowrap">
            Get Started{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TermsAndCondition