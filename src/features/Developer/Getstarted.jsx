import wallet from "../../assets/images/wallet.png";
import AccordionItem from "../../components/Accordion";
import paymentlink from "../../assets/videos/payment-link.mp4";
import { useState } from "react";

function Getstarted({theme}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className=" padding !pt-3">
        <h2 className="h2">Getting Started</h2>
        <p className="para">
          What are the requirements for using Cyberpay as a Registered Business?
        </p>
      </div>

      <div className="bg-[#E8F0FC] padding dark:bg-gray-900 dark:text-white">
        <h3 className="h3">
          Business Requirements on CyberPay. Eligible merchants on CyberPay fall
          in two categories:
        </h3>
        <div className="flex md:flex-row flex-col justify-center items-center gap-6 mt-8 ">
          <div className="bg-white dark:bg-gray-600 dark:text-white rounded-2xl px-10 py-12 w-full md:h-36 ">
            <p className="para">
              Registered services – CyberPay Consolidated Scheme (CCS)
            </p>
          </div>
          <div className="bg-white dark:bg-gray-600 dark:text-white rounded-2xl px-10 py-12 w-full md:h-36">
            <p className="para">
              Unregistered services – CyberPay Beginner Scheme
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#2F9BD6] flex md:flex-row flex-col justify-between items-center padding dark:bg-gray-900 dark:text-white">
        <div className="text-white md:w-[55%] w-full leading-10">
          <h3 className="h3">
            If your business is registered and you want to integrate to
            CyberPay, the following are the requirements:
          </h3>
          <p className="mt-3 leading-8">
            – Business Registration Document
            <br />– Corporate Bank Account
            <br />– BVN information of anyone affiliated with this business
          </p>
        </div>

        <div className="md:w-[30%] md:block hidden">
          <img src={wallet} className="w-full" alt="" />
        </div>
      </div>

      <div className=" !py-5 flex md:flex-row flex-col justify-between items-center padding">
        <div className="md:w-[30%] md:block hidden">
          <img src={wallet} className="w-full" alt="" />
        </div>
        <div className=" md:w-[55%] w-full leading-10">
          <h3 className="h3">
            The following are the documents acceptable for Business Registration
            Document for a Registered Business?
          </h3>
          <p className="mt-3 leading-8 text-[#565656] dark:text-white">
            – Certified True Copy of Certificate of Incorporation issued by the
            Corporate Affairs Commission (RC/CAC_IT)
            <br />– Certified True Copy of Business Name Registration
            Certificate (BN)
            <br />– Corporate bank account opening documentation – mandates etc.
          </p>
        </div>
      </div>
      <div className={`padding ${theme === "light" ? "bg-[#FAFAF9] " : "bg-black"}`}>
        <p className="para font-medium">
          In case you did not meet the requirements for Registered business, you
          have an option of been activated under the CyberPay Beginners Scheme
          after fulfilling the requirements for the beginner’s scheme above.
        </p>
        <p className="para font-medium mt-10">
          Kindly access the Corporate Affairs Commission website for more
          information about business registration.
        </p>

        <div className="mt-20">
          <AccordionItem
            title="Who bears the transactions charges?"
            answer="Transaction charges are borne by the merchants in line with the CBN regulation and international best practice."
            index={0}
            open={openIndex === 0}
            toggleAccordion={toggleAccordion}
          />
          <AccordionItem
            title="How to activate your Beginner’s Scheme on CyberPay."
            answer={
              <div>
                <p className="para">
                  The CyberPay Beginner Scheme is designed to accommodate
                  businesses that are unregistered or currently passing through
                  the process of registration.
                </p>
                <p className="para mt-3">
                  The following are the requirements for such businesses:
                </p>
                <p className="para mt-5">
                  Means of identification: Any of the government issued means of
                  identification like an international passport, driver’s
                  license, permanent voter’s card, or national ID can be used.
                  <br />
                  Personal bank account
                  <br />
                  BVN (Bank Verification Number)
                  <br />
                  and international best practice.
                </p>
              </div>
            }
            index={1}
            open={openIndex === 1}
            toggleAccordion={toggleAccordion}
          />
          <AccordionItem
            title="Requirements for using CyberPay as a Starter Business"
            answer={
              <div>
                <p className="para">
                  The CyberPay Beginner Scheme is designed to accommodate
                  businesses that are unregistered or currently passing through
                  the process of registration.
                </p>
                <p className="para mt-3">
                  The following are the requirements for such businesses:
                </p>
                <p className="para mt-5">
                  Means of identification: Any of the government issued means of
                  identification like an international passport, driver’s
                  license, permanent voter’s card, or national ID can be used.
                  <br />
                  Personal bank account
                  <br />
                  BVN (Bank Verification Number)
                  <br />
                  and international best practice.
                </p>
              </div>
            }
            index={2}
            open={openIndex === 2}
            toggleAccordion={toggleAccordion}
          />
          <AccordionItem
            title="Customize your payment link"
            answer={
              <div>
                <video src={paymentlink} controls autoPlay loop />
              </div>
            }
            index={3}
            open={openIndex === 3}
            toggleAccordion={toggleAccordion}
          />
        </div>
      </div>
    </>
  );
}

export default Getstarted;
