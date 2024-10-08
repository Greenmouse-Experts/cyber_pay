
import { useQuery } from "@tanstack/react-query";
import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import { getPaymentLink } from "../../services/api";
import SkeletonLoader from "../../components/loader/SkeletonLoader";


const PaymentLink = () => {
  const { theme } = useTheme();
  const data = [
    {
      num: 1,
      body: "Dial the USSD code *5988# on your mobile device",
    },
    {
      num: 2,
      body: "Select payment action from listed options eg. subscription, bills e.t.c",
    },
    {
      num: 3,
      body: "Enter the desired amount you wish to pay and continue ",
    },
    {
      num: 4,
      body: "Select your desired bank you wish to be debited from",
    },
    {
      num: 5,
      body: "Enter your protected transaction pin to authorize your payment",
    },
    {
      num: 6,
      body: "Receive payment receipt after confirmed transaction. ",
    },
  ];

  const { isLoading, data: payment } = useQuery({
    queryKey: ["paymentLink"],
    queryFn: getPaymentLink,
  });

  return (
    <div className={`pension ussd ${theme === "light" ? "" : "darkabout"} pb-20`}>
      <Heading
        img="/img/online-payment-banner.png"
        head="Online Sales with Payment Link"
        body="Welcome to a new era of online sales. With our Payment Links, small businesses without dedicated websites can now easily receive payments online. "
      />
  { isLoading && <SkeletonLoader />}
  { payment && !isLoading && 
      <div className="seam">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="seam_text"
          dangerouslySetInnerHTML={{ __html: payment?.setDescription }}
        >
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="seam_img">
          <img
            src={payment?.setImage}
            alt=""
            className="rounded-2xl md:h-[20rem]"
          />
        </div>
      </div>
}
      <div className="procedure padding bg-sky-950 mb-20">
        <h2 className="h2 text-center text-white mb-5 ">
          Three simple steps to success:
        </h2>

        <div className="flex lg:flex-row flex-col items-center gap-8">
          <div className="bg-white p-6 rounded-2xl dark:bg-gray-900 dark:text-white">
            <h3 className="h3 mb-3">Generate a Link</h3>
            <p className="para">
              Create a specific link for the product or service you’re selling.
              It’s as simple as a few clicks and absolutely no coding is
              involved.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl dark:bg-gray-900 dark:text-white">
            <h3 className="h3 mb-3">Share the Link</h3>
            <p className="para">
              Distribute the link to your customers through any online platform.
              Whether it’s email, social media, or messaging apps, the choice is
              yours.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl dark:bg-gray-900 dark:text-white">
            <h3 className="h3 mb-3">Start accepting payments</h3>
            <p className="para">
              Your business immediately starts to grow as more people are able
              to pay you easily. It’s that straightforward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentLink;
