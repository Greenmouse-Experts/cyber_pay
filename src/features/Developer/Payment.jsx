import AccordionItem from "../../components/Accordion";
import payment from "../../assets/images/payment.png";
import gtbank from "../../assets/images/gtb.png";
import access from "../../assets/images/access.png";
import firstbank from "../../assets/images/firstbank.png";
import zenith from "../../assets/images/zenith.png";
import uba from "../../assets/images/uba.png";
import { useState } from "react";

function Payment() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {/* <div className="  !pt-3">
        <h2 className="h2">Pay with Bank</h2>
        <p className="para">
          CyberPay avails your customers the opportunity of paying directly from
          their bank accounts when they select the “Pay with Bank” option at the
          point of checkout. The following banks are currently supported:
        </p>
      </div> */}

      {/* <div className=" !pt-2">
        <div className="flex md:flex-row flex-col gap-6 items-center justify-center">
          <div className="rounded-lg shadow-md border border-grey-400 overflow-hidden md:w-[33%] w-full">
            <img src={gtbank} alt="" className="w-full" />
          </div>
          <div className="rounded-lg shadow-md border border-grey-400 overflow-hidden md:w-[33%] w-full">
            <img src={access} alt="" className="w-full" />
          </div>
          <div className="rounded-lg shadow-md border border-grey-400 overflow-hidden md:w-[33%] w-full">
            <img src={firstbank} alt="" className="w-full" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-6 items-center justify-center mt-6">
        <div className="rounded-lg shadow-md border border-grey-400 overflow-hidden md:w-[33%] w-full">
            <img src={zenith} alt="" className="w-full" />
          </div>
          <div className="rounded-lg shadow-md border border-grey-400 overflow-hidden md:w-[33%] w-full">
            <img src={uba} alt="" className="w-full" />
          </div>
        </div>
      </div> */}
      {/* <div className="bg-[#2F9BD6] flex md:flex-row flex-col justify-between items-center ">
        <div className="text-white md:w-[55%] w-full leading-10">
          <h3 className="h3">
          Transaction Charges when paying with bank account:
          </h3>
          <p className="mt-3 leading-8">
          – Charge per transaction is 1.58%. <br/>– Fees are capped at NGN 1,000. <br/>– which means that NGN 1,000 is the highest amount payable in fees to CyberPay.
          </p>
        </div>

        <div className="md:w-[30%] md:block hidden">
          <img src={payment} className="w-full" alt="" />
        </div>
      </div> */}
      <div className="">
        <AccordionItem title="Pay with Bank" answer={
      
        <div>
        <p>CyberPay avails your customers the opportunity of paying directly from their bank accounts when they select the “Pay with Bank” option at the point of checkout.</p>
      
        <p className="mt-5">Note: We support all  banks.</p>
      </div>
        }
        index={0}
        open={openIndex === 0}
        toggleAccordion={toggleAccordion}
        />
         <AccordionItem title="Pay with Card" answer={
          <div>
            <p>CyberPay accepts all card variants – Mastercard, Visa and Verve. This means that your customers can pay with any of these card variants from any bank in Nigeria.</p>
            <p className="mt-5">We are currently working on acceptance of International cards and this will be available soon.</p>
            <p className="mt-5">Charge per transaction is 1.58%</p>
          </div>
        }
        index={3}
        open={openIndex === 3}
        toggleAccordion={toggleAccordion}
        />
        <AccordionItem title="USSD" answer="Require demo screens" 
          index={1}
          open={openIndex === 1}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem title="E-Wallet" answer="Require demo screens" 
          index={2}
          open={openIndex === 2}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </>
  );
}

export default Payment;
