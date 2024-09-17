import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";

import AccordionItem from "../../components/Accordion";
import BulkBanner from "../../assets/images/bulk-banner.png";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBulkSms } from "../../services/api";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

function BulkSms() {
  const { theme } = useTheme();

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { isLoading, data: bulk } = useQuery({
    queryKey: ["bulkSms"],
    queryFn: getBulkSms,
  });

  const faqs = bulk && JSON.parse(bulk?.setFirstContent);
  const second = bulk && JSON.parse(bulk?.setSecondContent);
  console.log(second);
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
      {isLoading && <SkeletonLoader />}
      {bulk && !isLoading && (
        <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
          <div
            className="lg:w-[50%] w-full "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={bulk?.setImage} alt="" className="w-full" />
          </div>
          <div
            className="flex flex-col gap-8 lg:w-[60%] w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div dangerouslySetInnerHTML={{ __html: bulk?.setDescription }} />

            <div>
              {faqs.map((item, i) => (
                <AccordionItem
                  key={item.id}
                  title={item.question}
                  answer={item.answer}
                  index={i}
                  open={openIndex === i}
                  toggleAccordion={toggleAccordion}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {second.map((item, i) => (
        <div
          className=" bg-[#FAFAF9] dark:bg-gray-900 dark:text-white padding text-center mt-10 pb-20 flex flex-col justify-center items-center"
          key={i}
        >
          <h2 className="h2">{item?.title}</h2>
          <p className="para mt-5 xl:w-[70%] w-full">{item?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BulkSms;
