import AccordionItem from "../../components/Accordion";

function Dashboard() {
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
        />
        <AccordionItem
          title="How to split a payment across multiple bank accounts"
          answer="This is a feature to be added later"
        />
        <AccordionItem
          title="CyberPay Subscriptions"
          answer="This is a feature to be added later"
        />
      </div>
    </>
  );
}

export default Dashboard;
