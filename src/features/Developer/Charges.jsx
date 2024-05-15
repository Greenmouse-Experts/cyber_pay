
function Charges() {
  return (
    <>
     <div className=" padding !pt-3">
      <h2 className="h2">How much does CyberPay charge per transaction?</h2>
    </div>
    <div className="padding md:!pt-0 grid md:grid-cols-3 grid-cols-1 gap-8">
    <div className=" col-span-1 w-full leading-10 bg-[#E8F0FC] rounded-2xl p-10 dark:bg-gray-900 dark:text-white ">
          <h3 className="h3">
          Charges for card usage:
          </h3>
          <p className="mt-3 leading-8">
          &bull; Charge per transaction is 1.5% <br/>
          &bull; Fees for cards are capped at NGN 2,000 – this means no local transaction will be charged more than NGN 2000.
          </p>
        </div>

        <div className=" w-full col-span-2 leading-10 bg-[#FCEBEF] rounded-2xl p-10 dark:bg-gray-900 dark:text-white ">
          <h3 className="h3">
          Transaction Charges when paying with bank account:
          </h3>
          <p className="mt-3 leading-8">
          &bull; Charge per transaction is 1.25% + NGN 50 <br/>
          &bull; The NGN 50 is waived for transactions below NGN 2,000. This means that for transactions below NGN 2,000 the charge will be 1.25% only <br/>
          &bull; Fees are capped at NGN 2,000 – which means that NGN 2,000 is the highest amount payable in fees to CyberPay.
          </p>
        </div>
    </div>
    </>
  )
}

export default Charges