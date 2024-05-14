import Heading from "../../layout/landing/Heading";
import { useTheme } from "../../ThemeContext";
import "../../Stylesheet/developer.scss";
import AccordionItem from "../../components/Accordion";



const Faqs = () => {
  const { theme } = useTheme();
  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/faq.png"
        head="FAQs"
        body="Our frequently asked questions"
      />
      


      <div className="mt-20 padding">
          <AccordionItem
            title="What is CyberPay?"
            answer="CyberPay is a Vibrant Fintech company with young and innovative minds that 
            offers all your payment process solutions from Transfer solutions, Payment 
            gateway, USSD, SMS binding, P.O.S, MicroPen, Disbursement, Collections etc."
          />
          <AccordionItem
            title="Can I use my Bank account to make payments?"
            answer="Yes, you can use your bank account to make payments through CyberPay. 
            You can also use our USSD solutions for payments of bills, airtime, card 
           payment solutions, Bank transfer, etc "
          />
          <AccordionItem
            title="I made a successful payment but haven't received the expected Value of what 
            I payed for . What should I do?"
            answer=" If you've made a successful payment but haven't received the service as 
            expected, please reach out to CyberPay's customer support for assistance, or 
            send an email to support@cyberpay.net.ng or contact us on this WhatsApp 
            number or you can also talk to Bomboi our chat box"
          />
          <AccordionItem
            title="I made a payment that was not successful, but I have been debited. How can 
            I resolve it ?"
            answer=" If you've been debited but the payment was not successful, check your 
            transaction history on CyberPay or contact their support team for clarification."
          />
          <AccordionItem
            title="Does CyberPay work on both Web and Mobile platforms?
            "
            answer=" Yes, CyberPay works on both web and mobile devices."
          />
          <AccordionItem
            title="Can I see my transaction reports on CyberPay"
            answer="Yes, you can access transaction reports through your CyberPay account.
            "
          />
          <AccordionItem
            title="Do you offer transaction volume discounts?"
            answer="For information on transaction volume discounts, please refer to CyberPay's 
            official documentation or contact their support team."
          />
          <AccordionItem
            title="Can I integrate CyberPay with my eCommerce platform?            "
            answer="Yes, you can integrate CyberPay with your eCommerce platform for seamless 
            payment processing.
            "
          />
          <AccordionItem
            title="What are Chargebacks? How do I get a chargeback if I am debited but the 
            service is not delivered?
            "
            answer="Chargebacks occur when a customer disputes a transaction. To request a 
            chargeback, follow the process outlined by CyberPay's support team."
          />
          <AccordionItem
            title="How secure is CyberPay? What is PCIDSS, and how does it relate to my 
            payment security?"
            answer="CyberPay prioritizes security and follows industry standards such as Payment 
            Card Industry Data Security Standard (PCIDSS) to protect your transactions."
          />
          <AccordionItem
            title="Can I identify fraudulent transactions on my account as a Merchant?"
            answer="Yes, as a merchant, you can monitor your account for any suspicious or 
            fraudulent activity."
          />
          <AccordionItem
            title="How long does it take for me to receive my money as a Merchant?
            "
            answer="The time it takes for funds to reach your account depends on various factors. 
            For specific details
            "
          />
          <AccordionItem
            title="What should I do if my POS system is not working correctly?"
            answer="If you encounter issues with your POS system, the first step is to contact our POS 
            support provider for assistance They can help diagnose the problem and provide 
            guidance on resolving it"
          />
          <AccordionItem
            title="Can POS support help with software updates and upgrades?"
            answer="Yes, POS support teams can assist with software updates and upgrades, 
            including providing instructions for installation and troubleshooting any issues 
            that may arise during the process."
          />
          <AccordionItem
            title="What should I do if I need additional POS hardware or software?"
            answer="If you need to expand your POS system or add new features, you can contact 
            your us to discuss your requirements. We can recommend suitable hardware or 
            software solutions and assist with setup and integration"
          />
          <AccordionItem
            title="How do I contact POS support for assistance?"
            answer="You can get assistance through phone support, email support, and live chat, we 
            also offer on-site support for more complex issues."
          />
        
         
        </div>
    </div>
  );
};

export default Faqs;
