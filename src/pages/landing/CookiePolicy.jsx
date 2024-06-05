import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import banner from "../../assets/images/cookie-policy.png";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PolicyFooter from "../../components/PolicyFooter";

function CookiePolicy() {
  const { theme } = useTheme();
  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/-banner.png"
        head="Cookies Policy"
        body=" You can manage your cookie preferences or opt-out at any time through your browser settings."
      />

      <div className="padding">
        <div className="mb-12">
          <h3 className="h3 mb-5">
            Understanding Our Cookies Policy and Your Choices
          </h3>
          <p className="para text-[#565656]">
            This Cookies Policy (Policy) explains how we use cookies and the
            choices you have. Except as otherwise stated in this Policy, our
            Privacy Policy will apply to our processing of data that we collect
            via cookies. You can access our Privacy Policy via this link By
            using our website (by clicking, navigating or scrolling), you are
            consenting to our use of cookies in accordance with this Policy. If
            you do not agree to our use of cookies, you can prevent the
            installation of cookies through the settings of your browser or not
            use our website at all. However, if you disable the use of cookies,
            this might cause some parts of this website not to function properly
            for you and it may impact your user experience on this site.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="h3 mb-5">What are Cookies?</h3>
          <p className="para text-[#565656] dark:text-white">
            Cookies are messages or small files that are placed on your web
            browser when you visit an internet site. Cookies are useful and do a
            lot of different things, including allowing a website to recognize a
            user’s device, improving online experience etc.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="h3 mb-5">How and Why do we Use Cookies?</h3>
          <p className="para text-[#565656]">
            We use cookies when you access our websites and our online products
            and services to make the site work better and to help us understand
            how you use our site. Cookies enable us to offer tailored products
            and to understand the information we receive about you, including
            information about your use of other websites and apps, whether or
            not you have an account with us. Cookies help us provide, protect
            and improve our products and services, by personalizing, tailoring
            and measuring the services and products we provide for satisfactory
            and safe experience. We also use them to help authentication of
            user, assess performance and functionality of our online products
            and services, and analytical research.
          </p>
        </div>
      </div>

      <div className="bg-[#2F9BD6] padding flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center mt-5">
        <h3 className="h3 md:w-[55%] w-full text-white leading-10">
          CyberPay offers effortless setup and provides customers with a range
          of convenient and secure payment options.
        </h3>
      </div>
    </div>
  );
}

export default CookiePolicy;
