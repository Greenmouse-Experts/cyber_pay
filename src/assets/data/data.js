export const errors = [
    {
      title: "NOT_ENROLLED_NO_ERROR_DETAILS:",
      answer: "The card is not enrolled for 3DS authentication. Kindly ask the customer to contact their bank.",
    },
    {
      title: "Sorry, that Card AVS failed!",
      answer: "This occurs when a customer enters a billing address different from the one on their card statement. The Address Verification System check is put in place to help prevent unauthorized use of cards and to also minimize charge-back occurrences for merchants. Kindly advise the customer to use the correct billing address as used on their card.",
    },
    {
      title: "Suspected Fraud:",
      answer: "The transaction did not check out, so bank placed a temporary hold. Kindly ask the customer to contact their bank.",
    },
    {
      title: "Transaction Error:",
      answer: "There was an error processing the transaction. The customer should please try again.",
    },
    {
      title: "Transaction not Permitted to Cardholder:",
      answer: "The customer’s card issuer has declined the transaction as the card cannot be used for this type of transaction. The customer should use an alternate card or contact their bank.",
    },
    {
      title: "Transaction Failed:",
      answer: "The payment was declined, and no reason was given.",
    },
    {
      title: "FAILURE: DECLINED:",
      answer: "The transaction was declined by the customer's bank.",
    },
    {
      title: "Could not resolve transaction after 5 tries:",
      answer: "Internal attempts made to verify the state of transactions failed after 5 trials.",
    },
    {
      title: "The issuer or Switch Inoperative:",
      answer: "This usually turns up when there is an error with the bank such as downtime. The cause is usually temporal. Please inform your customers to try again after some time.",
    },
    {
      title: "Pick Up Card:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction and requested that your customer’s card be retained (the card has been reported lost or stolen). The customer should use an alternate card.",
    },
    {
      title: "Cannot retrieve account number from card:",
      answer: "No primary account associated with the card.",
    },
    {
      title: "Do Not Honour:",
      answer: "The customer’s bank has declined the transaction as the card number has failed a security check, or the funds have been frozen or depleted. The customer should use an alternate card.",
    },
    {
      title: "Account number, phone number validation failed. Received invalid response from remote entity:",
      answer: "This is an error from the customer’s bank (Usually temporary).",
    },
    {
      title: "CARD_NOT_REGISTERED_ON_TOKEN_PLATFORM:",
      answer: "The card has not been enrolled for Safe Token at the bank. Kindly ask the customer to contact their bank.",
    },
    {
      title: "No Message:",
      answer: "No error message was received from the bank.",
    },
    {
      title: "AUTHENTICATION_FAILED:",
      answer: "3D secure authentication was attempted on the card, but the customer’s bank did not authenticate the transaction. Please advise your customer to contact their bank.",
    },
    {
      title: "Could not verify this payment:",
      answer: "For International card transactions, Card details supplied on the Bank 3D-Secure page do not match with what the bank has on file. Kindly advise the customer to contact their bank.",
    },
    {
      title: "FAILURE: UNSPECIFIED_FAILURE:",
      answer: "This error is normally returned directly from the issuer for unknown reasons. Kindly ask the customer to contact their bank.",
    },
    {
      title: "Invalid Card Verification Code!:",
      answer: "The CVV provided is invalid. Kindly ask the customer to input the correct CVV of the Card. The CVV is the three-digit number written on the back of the card.",
    },
    {
      title: "Invalid transaction:",
      answer: "The bank has declined the transaction because of an invalid format or field. This indicates the card details were incorrect. Check card data entered and try again. Please ensure that there are no spaces or special characters (#, &, $) in the card number.",
    },
    {
      title: "Error:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction as there is a problem with the card number. The customer should contact their bank. The customer should use an alternate card.",
    },
    {
      title: "Pick Up Card, Special:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction and requested that your customer’s card be retained. (card reported lost or stolen) The customer should use an alternate card.",
    },
    {
      title: "Request In Progress:",
      answer: "The customer’s bank (Card Issuer) has indicated there is a problem with the card number. The customer should contact their bank. The customer should use an alternate card.",
    },
    {
      title: "Invalid Transaction:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction because of an invalid format or field. Check the transaction information and try processing the transaction again.",
    },
    {
      title: "No Issuer:",
      answer: "The customer’s bank (Card Issuer) does not exist. Check the card information and try processing the transaction again.",
    },
    {
      title: "Re-enter the Last Transaction:",
      answer: "The transaction has not been processed and the customer should attempt to process the transaction again.",
    },
    {
      title: "No Action Taken:",
      answer: "The customer’s bank (Card Issuer) has indicated there is a problem with the card number. The customer should contact their bank. The customer should use an alternate card.",
    },
    {
      title: "Suspected Malfunction",
      answer: "The customer’s bank (Card Issuer) cannot be contacted during the transaction. The customer should check the card information and try processing the transaction again.",
    },
    {
      title: "Unacceptable Transaction Fee:",
      answer: "An unspecified error has occurred.",
    },
    {
      title: "Bank Not Supported By Switch:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction as it does not allow transactions originating through mail/telephone, fax, email or Internet orders. This error is associated with customers attempting to use a Discover Card. The customer should use an alternate card.",
    },
    {
      title: "Format Error:",
      answer: "The customer’s bank (Card Issuer) does not recognize the transaction details. The customer should check the transaction information and try processing the transaction again.",
    },
    {
      title: "Unable to Locate Record On File:",
      answer: "The customer’s bank (Card Issuer) does not recognize the card details. The customer should check the card information and try processing the transaction again.",
    },
    {
      title: "Expired Card, Capture:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction as Card has expired or the date is incorrect. Check the expiry date in the transaction and try processing the transaction again.",
    },
    {
      title: "Suspected Fraud, Retain Card:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction as there is a suspected fraud on this Card number.",
    },
    {
      title: "Card Acceptor, Contact Acquirer, Retain Card:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction and requested that the customer’s card be retained (card reported lost or stolen). The customer should use an alternate card.",
    },
    {
      title: "Contact Acquirer Security Department, Retain Card:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction and requested that your customer’s card be retained. (card reported lost or stolen) The customer should use an alternatecard.",
    },
    {
      title: "Restricted Card, Retain Card:",
      answer: "The customer’s bank (Card Issuer) has declined the transaction and requested that the customer’s card be retained. (card reported lost or stolen) The customer should use an alternate card.",
    },
    {
      title: "No Credit Account:",
      answer: "The customer’s bank has declined the transaction as the Card number used is not a account. The customer should use an alternate card.",
    },
  ];