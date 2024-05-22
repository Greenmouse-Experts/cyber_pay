import { useState } from 'react';
import AccordionItem from '../../components/Accordion'

function Management() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <div className=" padding !pt-3">
      <h2 className="h2">Account Management</h2>
    <h3 className='h3 mt-5'>Can I use one CyberPay account for multiple businesses?</h3>
    <p className="para mt-4">
    As a Merchant, you have the opportunity to have multiple businesses on one CyberPay Profile.
      </p>
    </div>

    
    
    <div className="padding">
      <AccordionItem title="Updating your CyberPay Account and Business Information" answer="Requires demo screens."
      index={0}
      open={openIndex === 0}
      toggleAccordion={toggleAccordion}
      />
      <AccordionItem title="Resetting your Cyberpay password" answer="Requires demo screens."
      index={1}
      open={openIndex === 1}
      toggleAccordion={toggleAccordion}
      />
      <AccordionItem title="How do I create a Cyberpay account?" answer="Requires demo screens."
      index={2}
      open={openIndex === 2}
      toggleAccordion={toggleAccordion}
      />
    </div>
    </>
  )
}

export default Management