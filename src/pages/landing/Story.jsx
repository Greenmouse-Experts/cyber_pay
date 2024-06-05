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
              At CyberPay, we are more than just a payment platform; we are
              revolutionaries in the financial landscape of Nigeria and beyond.
              We don't just aim to meet industry needs, we aspire to exceed
              them, driven by a deep understanding of the challenges faced by
              both merchants and customers alike.
            </p>

            <p className="para xl:mt-5 mt-3">
              Our journey began with a vision to simplify payments for everyone,
              everywhere. We recognized the vast gap in efficient payment
              solutions and committed ourselves to bridging it with innovative
              technology and unparalleled customer support
            </p>

            <p className="para xl:mt-5 mt-3">
              Today, CyberPay stands as a beacon of excellence, offering
              seamless transactions that empower businesses and delight
              consumers.
            </p>

            <p className="para xl:mt-5 mt-3">
              Our dedication to customer satisfaction is the cornerstone of our
              operations, ensuring that every interaction is not just a
              transaction, but a step towards a more connected and financially
              inclusive world. Join us on this remarkable journey as we continue
              to break barriers and redefine the essence of payments, one
              transaction at a time.
            </p>
          </div>
          {/* <div>
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
          </div> */}
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="lg:w-[45%] w-full"
        >
          <img src="/img/story-img.jpg" alt="" className="w-full rounded-2xl" />
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
            We believe in the power of smart solutions that simplify complexity.
            With CyberPay, you're not just getting a payment platform; you're
            getting a partner that helps you navigate the evolving world of
            digital finance intelligently.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900">
          <h3 className="h3">Safety Above All</h3>
          <p className="para">
            Security is at the heart of everything we do. We've implemented
            cutting-edge measures to safeguard your transactions, ensuring your
            peace of mind as you grow your business in the digital age.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900">
          <h3 className="h3">Join Us on the Journey</h3>
          <p className="para">
            As we continue to innovate and adapt, we invite you to join us on
            this transformative journey. Together, we'll rewrite the rules of
            digital payments, creating a future where convenience, intelligence,
            and security converge seamlessly.
          </p>
        </div>
      </div>

      <div className="padding bg-[#FAFAF9] dark:bg-black dark:text-white flex justify-center items-center">
        <p
          className="para font-medium lg:w-[70%] w-full text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Join us on this journey of exploration, where technology isn't just a
          tool; it's a force for change. Together, we'll shape the future and
          redefine what's possible. Because at CyberPay, our people are at the
          heart of every innovation, and your success is our greatest
          achievement.
        </p>
      </div>
    </div>
  );
};

export default Story;
