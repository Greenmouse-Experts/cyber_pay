import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/solution.png";
import market from "../../assets/images/market.png";
import AccordionItem from "../../components/Accordion";
import BulkBanner from "../../assets/images/bulk-banner.png"

function BulkSms() {
  const { theme } = useTheme();

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
       img={BulkBanner}
        head="Bulk SMS"
        body="Turbocharge your marketing with Bulk SMS"
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
          <h2 className="h2">Unleash the power of Bulk SMS</h2>
          <p className="para">
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
            />
            <AccordionItem
              title="Brand Excellence"
              answer="Elevate your brand recognition and establish a strong presence in the market."
            />
            <AccordionItem
              title="Customer Satisfaction"
              answer="Keep your customers engaged and satisfied, fostering long-term loyalty."
            />
            <AccordionItem
              title="Effective Communication"
              answer="Communicate with your audience in real time, creating immediate impact."
            />
          </div>
        </div>
      </div>

      <div className=" bg-[#FAFAF9] padding text-center mt-10 mb-20">
        <h2 className="h2">Worldwide Reach, Local Expertise</h2>
        <p className="para mt-5">
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
