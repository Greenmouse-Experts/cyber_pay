import { useState } from "react";
import Heading from "../../layout/landing/Heading";
import { useTheme } from "../../ThemeContext";
import "../../Stylesheet/developer.scss";
import AccordionItem from "../../components/Accordion";

const Faqs = () => {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "What is CyberPay?",
      answer:
        "CyberPay is a Vibrant Fintech company with young and innovative minds that offers all your payment process solutions from Transfer solutions, Payment gateway, USSD, SMS binding, P.O.S, MicroPen, Disbursement, Collections etc.",
    },
    {
      title: "Can I use my Bank account to make payments?",
      answer:
        "Yes, you can use your bank account to make payments through CyberPay. You can also use our USSD solutions for payments of bills, airtime, card payment solutions, Bank transfer, etc.",
    },
    {
      title:
        "I made a successful payment but haven't received the expected Value of what I paid for. What should I do?",
      answer:
        "If you've made a successful payment but haven't received the service as expected, please reach out to CyberPay's customer support for assistance, or send an email to support@cyberpay.net.ng or contact us on this WhatsApp number or you can also talk to Bomboi our chat box.",
    },
    {
      title:
        "I made a payment that was not successful, but I have been debited. How can I resolve it?",
      answer:
        "If you've been debited but the payment was not successful, check your transaction history on CyberPay or contact their support team for clarification.",
    },
    {
      title: "Does CyberPay work on both Web and Mobile platforms?",
      answer: "Yes, CyberPay works on both web and mobile devices.",
    },
    {
      title: "Can I see my transaction reports on CyberPay?",
      answer:
        "Yes, you can access transaction reports through your CyberPay account.",
    },
    {
      title: "Do you offer transaction volume discounts?",
      answer:
        "For information on transaction volume discounts, please refer to CyberPay's official documentation or contact their support team.",
    },
    {
      title: "Can I integrate CyberPay with my eCommerce platform?",
      answer:
        "Yes, you can integrate CyberPay with your eCommerce platform for seamless payment processing.",
    },
    {
      title:
        "What are Chargebacks? How do I get a chargeback if I am debited but the service is not delivered?",
      answer:
        "Chargebacks occur when a customer disputes a transaction. To request a chargeback, follow the process outlined by CyberPay's support team.",
    },
    {
      title:
        "How secure is CyberPay? What is PCIDSS, and how does it relate to my payment security?",
      answer:
        "CyberPay prioritizes security and follows industry standards such as Payment Card Industry Data Security Standard (PCIDSS) to protect your transactions.",
    },
    {
      title:
        "Can I identify fraudulent transactions on my account as a Merchant?",
      answer:
        "Yes, as a merchant, you can monitor your account for any suspicious or fraudulent activity.",
    },
    {
      title: "How long does it take for me to receive my money as a Merchant?",
      answer:
        "The time it takes for funds to reach your account depends on various factors. For specific details, contact CyberPay's support team.",
    },
    {
      title: "What should I do if my POS system is not working correctly?",
      answer:
        "If you encounter issues with your POS system, the first step is to contact our POS support provider for assistance. They can help diagnose the problem and provide guidance on resolving it.",
    },
    {
      title: "Can POS support help with software updates and upgrades?",
      answer:
        "Yes, POS support teams can assist with software updates and upgrades, including providing instructions for installation and troubleshooting any issues that may arise during the process.",
    },
    {
      title: "What should I do if I need additional POS hardware or software?",
      answer:
        "If you need to expand your POS system or add new features, you can contact us to discuss your requirements. We can recommend suitable hardware or software solutions and assist with setup and integration.",
    },
    {
      title: "How do I contact POS support for assistance?",
      answer:
        "You can get assistance through phone support, email support, and live chat. We also offer on-site support for more complex issues.",
    },
    {
      title: "Updating your CyberPay Account and Business Information",
      answer: "Requires demo screens.",
    },
    {
      title: "Resetting your CyberPay password",
      answer: "Requires demo screens.",
    },
    {
      title: "How do I create a CyberPay account?",
      answer: "Requires demo screens.",
    },
  ];

  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/faq-banner.png"
        head="FAQs"
        body="Our Frequently Asked Questions"
      />
      <div className="mt-20 padding xl:!px-[20%]">
      <h2 className="h2 mb-3">General</h2>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            index={index}
            open={openIndex === index}
            title={faq.title}
            answer={faq.answer}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
      <div className="padding -mt-5 !pt-0 xl:!px-[20%]">
        <h2 className="h2 mb-3">Security</h2>
      <AccordionItem
          title="How can I protect my company’s identity?"
          answer={
            <div>
              <p>
                Please note the following in order to protect your identity and
                data:
              </p>

              <div className="mt-5">
                <p>
                  – CyberPay will never ask you to prove your identity on behalf
                  of other individuals or companies.
                  <br />
                  – Kindly ensure that as the account owner, only you should
                  create and have access to your login details
                  <br />
                  – Do not send your ID or passport to unknown or unverified
                  recipients.
                  <br />
                  – When asked to provide certain documents, please ensure you
                  send to email provided by CyberPay only
                  <br />– We will never ask for your username, password, or PIN
                  codes outside the CyberPay merchant portal.
                </p>
              </div>
            </div>
          }
          index={0}
open={openIndex === 0}
toggleAccordion={toggleAccordion}
        />
         <AccordionItem
          title="How does CyberPay protect my money?"
          answer={
            <div>
              <p>
              Transactions are processed through our proactive risk and fraud management platforms to ensure and proactively prevent instances of fraud.
              </p>

              <div className="mt-5">
                <p>
                CyberPay is also compliant with all the local and international standards on protection of payment data, transactions and funds.
                </p>
              </div>
            </div>
          }
          index={1}
open={openIndex === 1}
toggleAccordion={toggleAccordion}
        />

<AccordionItem
          title="Why do CyberPay do checks on transactions?"
          answer={
            <div>
              <p>
              We are obliged by regulations from the Central Bank of Nigeria to monitor and check transactions from our merchants in line with the Nigerian laws on Money Laundering activities.
              </p>

              <div className="mt-5">
                <p>
                We also do this to proactively prevent instances of fraud and fraudulent practice and also ensure the safety of your funds as well as protecting the integrity of our networks and connections to you.
                </p>
              </div>
            </div>
          }

          index={2}
open={openIndex === 2}
toggleAccordion={toggleAccordion}
        />
      </div>
    </div>
  );
};

export default Faqs;
