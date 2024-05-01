import AccordionItem from "../../components/Accordion"


function Withdrawal() {
  return (
    <>
    <div className=" padding !pt-3">
      <h2 className="h2">How does Payout work on CyberPay?</h2>
      <p className="para mt-3">
      Both Beginner and Consolidated Businesses are to be settled within the standard regulated settlement schedule of T+1. This implies that settlements are made into specified accounts after 24 hours of the transactions.
      </p>
      <p className="para mt-8">
      This is the default settlement plan and settlements due on weekends and during holidays are made on the next working day.
      </p>
      <p className="para mt-8">
      However, we have settlement plans that allows access to Payout earlier than 24 hours but this is only available to Consolidated businesses.
      </p>
    </div>

    
    
    <div className="padding">
      <AccordionItem title="Can I accept payment in USD?" answer="This is currently not available on CyberPay.

"/>
      <AccordionItem title="Changing your payout bank account" answer="Requires demo screen" />
      <AccordionItem title="Minimum payout amount" answer="" />
      <AccordionItem title="What is the lifetime collections limit for CyberPay Starter Businesses?" answer={
        <div>
            <p>CyberPay consolidated businesses do not have any limit on the amount they can collect but Beginner’s Businesses are limited as follows:</p>
            <p className="mt-5">Two million Naira (N2,000,000) limit: This limit is applicable to Beginner Businesses who have activated their business by providing only their government-issued ID and BVN.</p>
        </div>
      } />
      <AccordionItem title="How much does CyberPay charge for sending Payouts to my bank account?" answer={
          <div>
          <p>CyberPay does not charge for settling your transactions into your preferred/selected bank account if the settlement plan is within the default schedule of T+1.</p>
          <p className="mt-5">However, should you require faster access to your payout, we will charge you a fee for moving/transferring settled funds from your wallet into any bank account.</p>
      </div>
      }/>
    </div>
    </>
  )
}

export default Withdrawal