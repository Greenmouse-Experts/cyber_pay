import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import about from "../../assets/images/about-header.png";

import "../../Stylesheet/about.scss";

const Story = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Our Story"
        body="At CyberPay, we're not just shaping the future of payments; we're redefining the way businesses and customers connect in the digital realm. Experience the difference – it's our story, and it's yours too."
        img="/img/story.png"
      />

      <div className="flex lg:flex-row flex-col  padding justify-between items-center lg:gap-0 gap-5 dark:text-white">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-col gap-10 lg:w-[50%] w-full"
        >
          <div>
            <h3 className="h3">Pioneering a New Era in Digital Payments</h3>
            <p className="para">
              At CyberPay, our journey is a testament to our unwavering
              commitment to transforming the landscape of digital payments. We
              don't just aim to meet industry needs; we aspire to exceed them,
              driven by a deep understanding of the challenges faced by both
              merchants and customers alike.
            </p>
          </div>
          <div>
            <h3 className="h3">A Vision Born from Industry Insight</h3>
            <p className="para">
              Our story begins with a vision fueled by empathy. We've walked in
              the shoes of countless businesses, feeling the pain points and
              witnessing the hurdles that hindered growth. This insight became
              the cornerstone of our mission - to develop solutions that not
              only address these challenges but elevate the entire payment
              experience.
            </p>
          </div>
          <div>
            <h3 className="h3">
              Innovative Solutions for Seamless Transactions
            </h3>
            <p className="para">
              We've poured our expertise into crafting a range of products and
              services that reimagines the way payments and collections are
              handled. Each solution is meticulously designed to make digital
              payments not just seamless, but remarkably convenient, smarter,
              and safer.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="lg:w-[45%] w-full"
        >
          <img
            src="/img/digital-payment.jpg"
            alt=""
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-4 padding gap-10 bg-[#FAFAF9] dark:bg-black dark:text-white ">
       
          <div className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900">
            <h3 className="h3">Seamlessness Redefined</h3>
            <p className="para">
              Our commitment to seamlessness is unwavering. Our products are
              engineered to eliminate friction from every step of the payment
              journey. From intuitive interfaces to lightning-fast transactions,
              we're setting new standards for ease and efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900">
            <h3 className="h3">Smarter, Together</h3>
            <p className="para">
              We believe in the power of smart solutions that simplify
              complexity. With CyberPay, you're not just getting a payment
              platform; you're getting a partner that helps you navigate the
              evolving world of digital finance intelligently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900">
            <h3 className="h3">Safety Above All</h3>
            <p className="para">
              Security is at the heart of everything we do. We've implemented
              cutting-edge measures to safeguard your transactions, ensuring
              your peace of mind as you grow your business in the digital age.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900">
            <h3 className="h3">Join Us on the Journey</h3>
            <p className="para">
              As we continue to innovate and adapt, we invite you to join us on
              this transformative journey. Together, we'll rewrite the rules of
              digital payments, creating a future where convenience,
              intelligence, and security converge seamlessly.
            </p>
          </div>
        
      </div>
    </div>
  );
};

export default Story;
