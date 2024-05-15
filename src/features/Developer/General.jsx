import thinking from "../../assets/images/thinking.png";
import subscribe from "../../assets/images/subscribe.png";
function General({theme}) {

  return (
    <>
      <div className="developer_what padding !pt-3">
        <h2>What is CyberPay?</h2>
        <p>
          CyberPay is a payment processing service that allows merchants,
          acquire and gateway provider process payments and collections on their
          platform via web, mobile or any user interface.
        </p>
      </div>
      <div className={`${theme === "light" ? "bg-[#E8F0FC] " : "bg-black"} flex md:flex-row flex-col justify-between items-center  padding`}>
        <div className="md:w-[60%] w-full">
          <h3 className="h3 mb-4">
            What kind of companies/ businesses are eligible to use CyberPay?
          </h3>
          <p className="para text-[#565656]  dark:text-white">
            CyberPay welcomes all companies and businesses, from the large
            international conglomerates to the small scale and fast-growing
            businesses. We have solutions that cater for all classes of business
            regardless of industry, year of existence, business model and size.
          </p>
        </div>
        <div className="md:w-[30%] w-full">
          <img src={thinking} alt="thinking" />
        </div>
      </div>
      <div className={`developer_error ${theme === "light" ? "bg-[#FAFAF9] " : "bg-black"} dark:bg-gray-900 dark:text-white  padding`}>
        <h3 className="h3">Common Transaction Errors</h3>
        <p className="para  dark:!text-white">
          At CyberPay, we have put structures in place to ensure continuous high
          transaction success rate. We are guaranteeing that your customers will
          have smooth and seamless payment experience without transaction
          failures.
        </p>
        <p className="para dark:!text-white">
          However, regardless of the structures and plans, there are instances
          when a transaction fails due to various errors which cannot be
          avoided. We have listed some of the instances below as a guide to why
          or how a transaction failure occurs.
        </p>

        <div className=" mt-16">
          {/* 1 */}
          <div className="grid-wrapper grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="md:col-span-1 text-left">
              <h3 className="h3">NOT_ENROLLED_NO_ERROR_DETAILS:</h3>
              <p className="para">
                The card is not enrolled for 3DS authentication. Kindly ask the
                customer to contact their bank.
              </p>
            </div>
            <div className="md:col-span-2 ">
              <h3 className="h3">Sorry, that Card AVS failed!:</h3>
              <p className="para">
                This occurs when a customer enters a billing address different
                from the one on their card statement. The Address Verification
                System check is put in place to help prevent unauthorized use of
                cards and to also minimize charge-back occurrences for
                merchants. Kindly advise the customer to use the correct billing
                address as used on their card.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="grid-wrapper grid md:grid-cols-3 grid-cols-1 gap-6 !text-black">
            <div className="">
              <h3 className="h3">Suspected Fraud:</h3>
              <p className="para">
                The transaction did not check out, so bank placed a temporary
                hold. Kindly ask the customer to contact their bank.
              </p>
            </div>
            <div className="">
              <h3 className="h3">Transaction Error:</h3>
              <p className="para">
                There was an error processing the transaction. The customer
                should please try again.
              </p>
            </div>
            <div className="">
              <h3 className="h3">Transaction not Permitted to Cardholder:</h3>
              <p className="para">
                The customer’s card issuer has declined the transaction as the
                card cannot be used for this type of transaction. The customer
                should use an alternate card or contact their bank.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="grid-wrapper grid md:grid-cols-3 grid-cols-1 gap-6">
            <div className="">
              <h3 className="h3">Transaction Failed:</h3>
              <p className="para">
                The payment was declined, and no reason was given.
              </p>
            </div>
            <div className="">
              <h3 className="h3">FAILURE: DECLINED:</h3>
              <p className="para">
                The transaction was declined by the customer&#39;s bank.
              </p>
            </div>
            <div className="">
              <h3 className="h3">
                Could not resolve transaction after 5 tries:
              </h3>
              <p className="para">
                Internal attempts made to verify the state of transactions
                failed after 5 trials.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="grid-wrapper grid md:grid-cols-10 gap-6">
            <div className=" md:col-span-4">
              <h3 className="h3">The issuer or Switch Inoperative:</h3>
              <p className="para">
                This usually turns up when there is an error with the bank such
                as downtime. The cause is usually temporal. Please inform your
                customers to try again after some time.
              </p>
            </div>
            <div className=" md:col-span-4">
              <h3 className="h3">Pick Up Card:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                and requested that your customer’s card be retained (the card
                has been reported lost or stolen). The customer should use an
                alternate card.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="h3">Cannot retrieve account number from card:</h3>
              <p className="para">
                No primary account associated with the card.
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="grid-wrapper grid md:grid-cols-9 gap-6">
            <div className=" md:col-span-5">
              <h3 className="h3">Do Not Honour:</h3>
              <p className="para">
                The customer’s bank has declined the transaction as the card
                number has failed a security check, or the funds have been
                frozen or depleted. The customer should use an alternate card.
              </p>
            </div>
            <div className="md:col-span-4">
              <h3 className="h3">
                Account number, phone number validation failed. Received invalid
                response from remote entity:
              </h3>
              <p className="para">
                This is an error from the customer’s bank (Usually temporary).
              </p>
            </div>
          </div>
          {/* 6 */}
          <div className="grid-wrapper grid md:grid-cols-10 gap-6">
            <div className=" md:col-span-4">
              <h3 className="h3">
                Could not resolve transaction after 5 tries:
              </h3>
              <p className="para">
                Internal attempts made to verify the state of transactions
                failed after 5 trials.
              </p>
            </div>
            <div className=" md:col-span-4">
              <h3 className="h3">CARD_NOT_REGISTERED_ON_TOKEN_PLATFORM:</h3>
              <p className="para">
                The card has not been enrolled for Safe Token at the bank.
                Kindly ask the customer to contact their bank.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="h3">No Message:</h3>
              <p className="para">
                No error message was received from the bank.
              </p>
            </div>
          </div>

          {/* 7 */}
          <div className="grid-wrapper grid md:grid-cols-9 gap-6">
            <div className=" md:col-span-5">
              <h3 className="h3">AUTHENTICATION_FAILED:</h3>
              <p className="para">
                3D secure authentication was attempted on the card, but the
                customer’s bank did not authenticate the transaction. Please
                advise your customer to contact their bank.
              </p>
            </div>
            <div className="md:col-span-4">
              <h3 className="h3">Could not verify this payment:</h3>
              <p className="para">
                For International card transactions, Card details supplied on
                the Bank 3D-Secure page do not match with what the bank has on
                file. Kindly advise the customer to contact their bank.
              </p>
            </div>
          </div>
          {/* 8 */}

          <div
            className={`grid-wrapper grid md:grid-cols-12 col-1 grid-rows-1 gap-6`}
          >
            <div className={`md:col-span-4`}>
              <h3 className="h3">FAILURE: UNSPECIFIED_FAILURE:</h3>
              <p className="para">
                This error is normally returned directly from the issuer for
                unknown reasons. Kindly ask the customer to contact their bank.
              </p>
            </div>
            <div className={`md:col-span-8`}>
              <h3 className="h3">
                Having issues? Please call Customer Care on 09076555420,
                09070033941:
              </h3>
              <p className="para">
                This is a temporary issue customer sometimes experience while
                trying to pay with GT Bank. Most times, this is usually fixed
                when the customer tries again after a while.
              </p>
            </div>
          </div>
          {/* 9 */}
          <div
            className={`grid-wrapper grid md:grid-cols-10 col-1 grid-rows-1 gap-6`}
          >
            <div className={`md:col-span-4`}>
              <h3 className="h3">Invalid Card Verification Code!:</h3>
              <p className="para">
                The CVV provided is invalid. Kindly ask the customer to input
                the correct CVV of the Card. The CVV is the three-digit number
                written on the back of the card.
              </p>
            </div>
            <div className={`md:col-span-6`}>
              <h3 className="h3">Invalid transaction:</h3>
              <p className="para">
                The bank has declined the transaction because of an invalid
                format or field. This indicates the card details were incorrect.
                Check card data entered and try again. Please ensure that there
                are no spaces or special characters (#, &, $) in the card
                number.
              </p>
            </div>
          </div>

          {/* 10 */}
          <div
            className={`grid-wrapper grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6`}
          >
            <div className={``}>
              <h3 className="h3">Error:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                as there is a problem with the card number. The customer should
                contact their bank. The customer should use an alternate card.
              </p>
            </div>
            <div className={``}>
              <h3 className="h3">Pick Up Card, Special:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                and requested that your customer’s card be retained. (card
                reported lost or stolen) The customer should use an alternate
                card.
              </p>
            </div>
          </div>
          {/* 11 */}
          <div
            className={`grid-wrapper grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6`}
          >
            <div className={``}>
              <h3 className="h3">Request In Progress:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has indicated there is a
                problem with the card number. The customer should contact their
                bank. The customer should use an alternate card.
              </p>
            </div>
            <div className={``}>
              <h3 className="h3">Invalid Transaction:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                because of an invalid format or field. Check the transaction
                information and try processing the transaction again.
              </p>
            </div>
          </div>

          {/* 12 */}
          <div
            className={`grid-wrapper grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6`}
          >
            <div className={``}>
              <h3 className="h3">No Issuer:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) does not exist. Check the card
                information and try processing the transaction again.
              </p>
            </div>
            <div className={``}>
              <h3 className="h3">Re-enter the Last Transaction:</h3>
              <p className="para">
                The transaction has not been processed and the customer should
                attempt to process the transaction again.
              </p>
            </div>
          </div>
          {/* 13 */}
          <div
            className={`grid-wrapper grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6`}
          >
            <div className={``}>
              <h3 className="h3">No Action Taken:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has indicated there is a
                problem with the card number. The customer should contact their
                bank. The customer should use an alternate card.
              </p>
            </div>
            <div className={``}>
              <h3 className="h3">Suspected Malfunction</h3>
              <p className="para">
                The customer’s bank (Card Issuer) cannot be contacted during the
                transaction. The customer should check the card information and
                try processing the transaction again.
              </p>
            </div>
          </div>
          {/* 14 */}
          <div className="grid-wrapper grid md:grid-cols-4 grid-cols-1 gap-6">
            <div className="md:col-span-1 text-left">
              <h3 className="h3">Unacceptable Transaction Fee:</h3>
              <p className="para">An unspecified error has occurred.</p>
            </div>
            <div className="md:col-span-3 ">
              <h3 className="h3">Bank Not Supported By Switch:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                as it does not allow transactions originating through
                mail/telephone, fax, email or Internet orders. This error is
                associated with customers attempting to use a Discover Card. The
                customer should use an alternate card.
              </p>
            </div>
          </div>

          {/* 15 */}
          <div
            className={`grid-wrapper grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6`}
          >
            <div className={``}>
              <h3 className="h3">Format Error:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) does not recognize the
                transaction details. The customer should check the transaction
                information and try processing the transaction again.
              </p>
            </div>
            <div className={``}>
              <h3 className="h3">Unable to Locate Record On File:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) does not recognize the card
                details. The customer should check the card information and try
                processing the transaction again.
              </p>
            </div>
          </div>
          {/* 16 */}
          <div
            className={`grid-wrapper grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6`}
          >
            <div className={``}>
              <h3 className="h3">Expired Card, Capture:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                as Card has expired or the date is incorrect. Check the expiry
                date in the transaction and try processing the transaction
                again.
              </p>
            </div>
            <div className={``}>
              <h3 className="h3">Suspected Fraud, Retain Card:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                as there is a suspected fraud on this Card number.
              </p>
            </div>
          </div>

          {/* 17 */}
          <div
            className={`grid-wrapper grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6`}
          >
            <div className={``}>
              <h3 className="h3">
                Card Acceptor, Contact Acquirer, Retain Card:
              </h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                and requested that the customer’s card be retained (card
                reported lost or stolen). The customer should use an alternate
                card.
              </p>
            </div>
            <div className={``}>
              <h3 className="h3">
                Contact Acquirer Security Department, Retain Card:
              </h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                and requested that your customer’s card be retained. (card
                reported lost or stolen) The customer should use an
                alternatecard.
              </p>
            </div>
          </div>

          {/* 18 */}
          <div
            className={`grid-wrapper grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-6`}
          >
            <div className={``}>
              <h3 className="h3">Restricted Card, Retain Card:</h3>
              <p className="para">
                The customer’s bank (Card Issuer) has declined the transaction
                and requested that the customer’s card be retained. (card
                reported lost or stolen) The customer should use an alternate
                card.
              </p>
            </div>
            <div className={``}>
              <h3 className="h3">No Credit Account:</h3>
              <p className="para">
                The customer’s bank has declined the transaction as the Card
                number used is not a account. The customer should use an
                alternate card.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2F9BD6] flex md:flex-row flex-col justify-between items-center padding">
        <div className="text-white md:w-[55%] w-full">
          <h3 className="h3">
            How do I unsubscribe from CyberPay as Merchant?
          </h3>
          <p className="mt-5 leading-8">
            You can close your business on CyberPay at any time. To do this, log
            into your CyberPay Dashboard, go to “Settings”. <br />
            [1] then click on the Business tab. <br />
            [2], scroll all the way down, and click on “Close this business”.
            <br />
            [3]. Here’re a few things you should know about closing a business
            on CyberPay:
          </p>
          <p className="mt-5 leading-8">
            &mdash; Only a business owner can close a business. <br />
            &mdash; When you close a business, all other users on the business
            will receive an email informing them that the business has been
            closed. <br />
            &mdash; You can only close a business if your business has no
            pending disputes. <br />
            &mdash; If after you close your business, a dispute is logged
            against your business, the business account will be re-opened, and
            you&#39;ll be notified of the dispute.
          </p>
        </div>

        <div className="md:w-[30%] md:block hidden">
          <img src={subscribe} className="w-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default General;
