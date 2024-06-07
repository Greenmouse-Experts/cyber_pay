import settingup from "../../assets/videos/settingup.mp4"

function Setting() {
  return (
    <>
      <div className="  !pt-3">
        <h2 className="h2">Setting Up CyberPay</h2>
        <p className="para">
          Setting up CyberPay is a straightforward and efficient process
          designed to provide businesses with enhanced payment solutions. Our
          platform offers a range of features and benefits, including secure
          transactions, customizable payment options, and streamlined
          integration with existing systems.
        </p>
      </div>
      <div className="">
<video src={settingup} controls autoPlay loop/>
      </div>
    </>
  );
}

export default Setting;
