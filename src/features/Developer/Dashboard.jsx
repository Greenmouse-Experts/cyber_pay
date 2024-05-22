import { useState } from "react";
import AccordionItem from "../../components/Accordion";

function Dashboard() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className=" padding !pt-3">
        <h2 className="h2">CyberPay Transfers - Requires Demo Screens</h2>
        <p className="para mt-3">
          CyberPay transfer is only available to registered (Consolidated)
          businesses. Businesses can transfer funds settled into the wallet to
          any bank account of their choice.
        </p>
        <p className="para mt-8">
          Please note that CyberPay do not have any access to debit or make
          transfer from the merchant’s wallet.
        </p>
        <p className="para mt-8">
          Merchants can also top up or fund their wallet balances either
          directly through a bank card or through a bank account by using the
          wallet top-up option.
        </p>
      </div>

      <div className="padding">
        <AccordionItem
          title="CyberPay Invoices - Requires Demo Screens"
          answer="At CyberPay, we continue to provide you multiple means of collecting payments from your customers. The CyberPay invoicing service allows you to generate a link that you can share with your customers via WhatsApp, emails, direct messaging on Twitter etc.

"
index={0}
open={openIndex === 0}
toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          title="How to split a payment across multiple bank accounts"
          answer="This is a feature to be added later"
          index={1}
          open={openIndex === 1}
          toggleAccordion={toggleAccordion}
        />
        <AccordionItem
          title="CyberPay Subscriptions"
          answer="This is a feature to be added later"
          index={2}
          open={openIndex === 2}
          toggleAccordion={toggleAccordion}
        />
      </div>
    </>
  );
}

export default Dashboard;
