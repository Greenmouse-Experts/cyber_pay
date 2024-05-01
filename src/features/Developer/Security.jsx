import AccordionItem from "../../components/Accordion";

function Security() {
  return (
    <>
      <div className=" padding !pt-3">
        <h2 className="h2">Why is CyberPay secure?</h2>
        <p className="para mt-4">
          CyberPay is compliant with all local and international standards for
          processing, exchange and storage of electronic transactions.
        </p>
        <p className="para mt-6">
          CyberPay is PCIDSS compliant and also process transactions based on
          tokens provided by Mastercard Secure Code, Verified by Visa and Verve
          Safetoken.
        </p>
      </div>

      <div className="padding">
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
        />
      </div>
    </>
  );
}

export default Security;
