
import openaccount from "../../assets/videos/open-account.mp4"
import AccordionItem from "../../components/Accordion"

function Account() {
  return (
    <>
    <div className=" padding !pt-3">
        <h2 className="h2">My Account</h2>
        <p className="para">
        How do I open my CyberPay Account?
        </p>
      </div>
      <div className="padding !pt-5">
<video src={openaccount} controls autoPlay loop/>
      </div>

      <div className="padding">
    <AccordionItem title="Who bears the transactions charges?"/>
    <AccordionItem title="How to activate your Beginner’s Scheme on CyberPay."/>
    <AccordionItem title="Requirements for using CyberPay as a Starter Business"/>
    <AccordionItem title="Customize your payment link"/>
</div>
    </>
  )
}

export default Account