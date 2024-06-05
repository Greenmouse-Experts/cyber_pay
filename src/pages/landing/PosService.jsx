
import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";

const PosService = () => {
  const { theme } = useTheme();

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/pos-banner.png"
        head="POS Service"
        body="Elevate your business with our versatile Point Of Sale (POS) systems offering unmatched flexibility, swift setup and customization"
      />
      <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
        <div
          className="lg:w-[40%] w-full "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="/img/pos-1.webp"
            alt=""
            className="w-full rounded-2xl h-[20rem]"
          />
        </div>
        <div
          className="flex flex-col gap-5 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">Terminal Procurement</h2>
          <p className="para">
            We assist businesses of various types in procuring state-of-the-art
            payment terminals, providing them with a competitive advantage in
            conducting transactions. As partners with leading terminal
            manufacturers, we ensure a continuous supply of payment terminals
            for your business, irrespective of its scale.
          </p>
        </div>
      </div>
      <div className="padding flex lg:flex-row flex-col-reverse justify-between lg:gap-20 gap-10 items-center">
        <div
          className="flex flex-col gap-5 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">A Terminal for every Need</h2>
          <p className="para">
            We carry a broad range of portable, fast and reliable PoS terminals
            certified by the Nigeria Inter-Bank Settlement System (NIBSS),
            ranging from HorizonPay, PAX, NewLand, Tianyu, SZZT, Urovo, Trendit,
            Positivo Android and Linux Terminals.
          </p>
        </div>
        <div
          className="lg:w-[40%] w-full "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src="/img/pos-2.jpg"
            alt=""
            className="w-full rounded-2xl h-[20rem]"
          />
        </div>
      </div>
      <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
        <div
          className="lg:w-[40%] w-full "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="/img/consultancy.jpg"
            alt=""
            className="w-full rounded-2xl h-[20rem]"
          />
        </div>
        <div
          className="flex flex-col gap-5 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">Consultancy</h2>
          <p className="para">
            Our dedicated team of consultants is readily available to assist you
            in identifying the ideal payment solution for your business. Your
            success is our priority, and we are deeply committed to
            understanding your needs in order to provide recommendations that
            result in positive customer experiences.
          </p>
        </div>
      </div>

      <div className="padding flex lg:flex-row flex-col-reverse justify-between lg:gap-20 gap-10 items-center">
        <div
          className="flex flex-col gap-5 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">Software Customization</h2>
          <p className="para">
            With a deep understanding of your business and staying abreast of
            the latest terminal technologies, we can craft customized software
            applications to suit your unique payment needs. No matter how
            distinct your operations are, we can create software that caters to
            your business objectives.
          </p>
        </div>
        <div
          className="lg:w-[40%] w-full "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src="/img/software.png"
            alt=""
            className="w-full rounded-2xl h-[20rem]"
          />
        </div>
      </div>

      <div className=" grid lg:grid-cols-2 grid-cols-1 padding gap-10 bg-[#FAFAF9] dark:bg-black dark:text-white ">
        <div className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900 dark:text-white "   data-aos="fade-up"
          data-aos-duration="1000">
          <h3 className="h3">POS: In-store card acceptance made easy</h3>
          <p className="para">
            Our POS (Point of Sale) terminals enable businesses to accept card
            payments in-store, providing a convenient and secure payment option
            for customers. With our advanced technology and easy-to-use
            interface, businesses can streamline their payment process and
            improve their bottom line.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900 dark:text-white"    data-aos="fade-up"
          data-aos-duration="1400">
          <h3 className="h3">Payments accepted, anywhere, anytime</h3>
          <p className="para">
            Elevate your business with our versatile Point Of Sale (POS) systems
            offering unmatched flexibility, swift setup and customization. Your
            customers experience seamless transactions, as our POS transforms
            every interaction into a smooth, secure payment experience.
            Anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PosService;
