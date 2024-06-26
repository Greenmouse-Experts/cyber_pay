import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";

import AccordionItem from "../../components/Accordion";
import BulkBanner from "../../assets/images/bulk-banner.png";
import { useState } from "react";

function BulkSms() {
  const { theme } = useTheme();

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`pension solution ${
        theme === "light" ? "" : "darkabout"
      } pb-20`}
    >
      <Heading
      img="/img/bulk-banner.png"
        head="Bulk SMS"
        body="Turbocharge your marketing with bulk SMS. Our bulk SMS service is your gateway to connecting and marketing your products or services directly to your target audience, in real time."
      />
      <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
        <div
          className="lg:w-[50%] w-full "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src="/img/bulk-sms.png" alt="" className="w-full" />
        </div>
        <div
          className="flex flex-col gap-8 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2 dark:text-white">Unleash the power of Bulk SMS</h2>
          <p className="para dark:text-white">
            With our expertise, we offer a Bulk SMS solution that does more than
            just sending messages. It’s a tool to increase Brand Awareness as
            you reach your audience in an instant and leave a lasting
            impression. It enables you engage with your customers directly and
            build strong, lasting relationships. Your customers will feel
            valued, and your business will thrive.
          </p>

          <div>
            <AccordionItem
              title="Effective Communication"
              answer="Communicate with your audience in real time, creating immediate impact."
              index={0}
              open={openIndex === 0}
              toggleAccordion={toggleAccordion}
            />
            <AccordionItem
              title="Brand Excellence"
              answer="Elevate your brand recognition and establish a strong presence in the market."
              index={1}
              open={openIndex === 1}
              toggleAccordion={toggleAccordion}
            />
            <AccordionItem
              title="Customer Satisfaction"
              answer="Keep your customers engaged and satisfied, fostering long-term loyalty."
              index={2}
              open={openIndex === 2}
              toggleAccordion={toggleAccordion}
            />
          </div>
        </div>
      </div>

      <div className=" bg-[#FAFAF9] dark:bg-gray-900 dark:text-white padding text-center mt-10 pb-20 flex flex-col justify-center items-center">
        <h2 className="h2">Worldwide Reach, Local Expertise</h2>
        <p className="para mt-5 xl:w-[70%] w-full">
          With our Bulk SMS solution, you can access optimal delivery rates
          worldwide. Whether you’re connecting with customers near or far, our
          unified interface ensures your message reaches its destination
          reliably.
        </p>
      </div>
    </div>
  );
}

export default BulkSms;
