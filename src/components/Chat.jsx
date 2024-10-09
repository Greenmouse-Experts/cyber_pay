import { FloatingWhatsApp } from "react-floating-whatsapp";
import whatsapp from "../assets/logo.png"
//import whatsapp from "../assets/logo-white.png"
const ChatBot = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+2349131419675"
      accountName="CyberPay"
      notification
      notificationSound
      allowEsc
        allowClickAway
        avatar={whatsapp}
    />
  );
};

export default ChatBot;