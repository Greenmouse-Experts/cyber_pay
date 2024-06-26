import { useState } from "react";
import openaccount from "../../assets/videos/open-account.mp4";
import AccordionItem from "../../components/Accordion";

function Account() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className=" padding !pt-3">
        <h2 className="h2">My Account</h2>
        <p className="para">How do I open my CyberPay Account?</p>
      </div>
      <div className="padding !pt-5">
        <video src={openaccount} controls autoPlay loop />
      </div>

      <div className="padding">
        <AccordionItem
          title="Is there a cost for creating a CyberPay Account?"
          answer="It costs totally nothing to open a Cyberpay Account!"
          index={0}
          open={openIndex === 0}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          title=" How do I connect to CyberPay?"
          answer="Require demo screens"
          index={1}
          open={openIndex === 1}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          title="Add Business documents"
          answer="Require demo screens"
          index={2}
          open={openIndex === 2}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          title="How do I check my CyberPay balance?"
          answer={
            <div>
              <p className="para">Require demo screens.</p>
              <p className="para mt-5">
                This is available on your page on the merchant portal. You can
                access this whenever you sign on to your account.
              </p>
            </div>
          }
          index={3}
          open={openIndex === 3}
          toggleAccordion={toggleAccordion}
        />

        <AccordionItem
          title="Upgrading from an individual account to a business account"
          answer="Require demo screens"
          index={4}
          open={openIndex === 4}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </>
  );
}

export default Account;
