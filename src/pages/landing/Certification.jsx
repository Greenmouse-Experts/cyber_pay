import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import about from "../../assets/images/about-header.png";

import "../../Stylesheet/about.scss";

const Certification = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Our Certifications"
        body="We offer cutting-edge solutions to meet the e-payment requirements of our diverse clientele"
        img="/img/certificate.png"
      />

      <div className=" bg-[#FAFAF9]  dark:bg-black padding ">
        <h4 className="h4 text-center mb-10">
          CyberPay is compliant to global regulatory standards to build the highest
          level of trust assurance with its stakeholders
        </h4>
        <div className="flex sm:flex-row flex-col gap-10 justify-center items-center ">
          <img src="/img/cert-1.png" alt="" className="w-36 h-36" />
          <img src="/img/cert-2.png" alt="" className="w-36 h-36" />
          <img src="/img/cert-3.png" alt="" className="w-36 h-36" />
        </div>
      </div>

      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-4 padding gap-10 bg-[#FAFAF9] dark:bg-black">
        <div
          className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="h3">Payment Terminal Service Provider</h3>
          <p className="para mt-3">
            We are duly licensed by the Central Bank of Nigeria as a Payment
            Terminal Service Provider. Our portfolio includes operational and
            support services, encompassing the sale, provisioning, deployment,
            management, and support of POS terminal solutions, and extending
            these services to retail merchants of all categories on behalf of
            Merchant Acquirer Banks.
          </p>
        </div>
        <div
          className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h3 className="h3">Payment Terminal Application Developer</h3>
          <p className="para mt-3">
            As a certified Payment Terminal Application Developer and Payment
            Aggregator, backed by a dedicated Research and Development Lab, we
            employ a well-established rapid software development approach. This
            method ensures active collaboration with clients and stakeholders,
            guaranteeing the realization of all project objectives.
          </p>
        </div>
        <div
          className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h3 className="h3">Payment Solution Service Provider</h3>
          <p className="para mt-3">
            We offer cutting-edge solutions to meet the e-payment requirements
            of our diverse clientele. Whether you’re a small-scale merchant
            seeking straightforward payment options or a large corporation with
            unique demands, our extensive range of e-payment solutions ensures
            we have you well-equipped to propel your business forward.
          </p>
        </div>
        <div
          className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="h3">Payment Integration Service</h3>
          <p className="para mt-3">
            We collaborate with banks, merchants, and various stakeholders to
            seamlessly integrate PoS terminals with business systems. Leveraging
            our deep industry expertise, we consistently deliver payment system
            integration projects punctually, within budget, and in accordance
            with the agreed scope. This adaptability enables us to cater to a
            broad spectrum of customers, ranging from small and medium-sized
            enterprises to large corporations.
          </p>
        </div>

        <div
          className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="h3">Customer Service Support</h3>
          <p className="para mt-3">
            We offer comprehensive support services for all categories of
            merchants, from the initial activation of PoS terminals throughout
            their lifecycle, on behalf of merchant acquirer banks. Our
            nationwide field support team is available around the clock, seven
            days a week, to provide assistance and guarantee uninterrupted
            operation of all PoS terminals.
          </p>
        </div>
        <div
          className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h3 className="h3">Tactical Advisory Services</h3>
          <p className="para mt-3">
            Whether you’re a merchant seeking to enhance your retail payment
            technology or a Merchant Acquirer exploring innovative strategies in
            electronic payments, our seasoned tactical advisory team is ready to
            collaborate with you to achieve your business objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certification;
