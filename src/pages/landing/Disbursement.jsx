import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/solution.png";

const Disbursement = () => {
  const { theme } = useTheme();

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/disburstment-banner.png"
        head="Disbursement Solution"
        body="When it comes to automating your payroll, we don’t believe in hidden charges or unnecessary delays. "
      />
      <div className="padding grid lg:grid-cols-2 grid-cols-1 justify-between lg:gap-16 gap-10 items-center">
        <div className="bg-white xl:h-[24rem] lg:h-[30rem] card-shadow dark:bg-bluePrimary dark:text-white rounded-md px-14 py-8 flex flex-col items-center  w-full">
          <div className=" bg-white border-2 border-[#F40C3B] p-4 rounded-full w-32 h-32 scale-90">
            {" "}
            <img src="/icons/dist-1.gif" alt="location" className=" scale-90" />
          </div>
          <div className=" flex flex-col gap-3 mt-3">
            <h3 className="text-3xl font-semibold text-center mb-1">
              Simplify payments for your business{" "}
            </h3>
            <p>
              Our Disbursement Solution is your ultimate partner for all your
              business payment requirements. Whether you’re settling payments
              with suppliers, customers, or partners, we streamline the process
              for you.{" "}
            </p>
          </div>
        </div>

        <div className="bg-white xl:h-[24rem] lg:h-[30rem] card-shadow dark:bg-bluePrimary dark:text-white rounded-md px-14 py-8 flex flex-col items-center  w-full">
          <div className=" bg-white border-2 border-[#F40C3B] p-4 rounded-full w-32 h-32 scale-90">
            {" "}
            <img src="/icons/dist-2.gif" alt="location" className=" scale-90" />
          </div>
          <div className=" flex flex-col gap-3 mt-3">
            <h3 className="text-3xl font-semibold text-center mb-1">
              Efficiency at your fingertips
            </h3>
            <p>
              Let’s settle your payments with the utmost convenience and
              cost-effectiveness. Join the businesses for whom this is not just
              a dream but a reality. We handle your payments seamlessly, so you
              can focus on what truly matters.
            </p>
          </div>
        </div>

        <div className="bg-white xl:h-[24rem] lg:h-[30rem] card-shadow dark:bg-bluePrimary dark:text-white rounded-md px-14 py-8 flex flex-col items-center  w-full">
          <div className=" bg-white border-2 border-[#F40C3B] p-4 rounded-full w-32 h-32 scale-90">
            {" "}
            <img src="/icons/dist-3.gif" alt="location" className=" scale-90" />
          </div>
          <div className=" flex flex-col gap-3 mt-3">
            <h3 className="text-3xl font-semibold text-center mb-1">
              Payroll, perfected
            </h3>
            <p>
              When it comes to automating your payroll, we don’t believe in
              hidden charges or unnecessary delays. We’re here to ensure a
              hassle-free process, allowing you to empower your employees
              without worry.
            </p>
          </div>
        </div>

        <div className="bg-white xl:h-[24rem] lg:h-[30rem] card-shadow dark:bg-bluePrimary dark:text-white rounded-md px-14 py-8 flex flex-col items-center  w-full">
          <div className=" bg-white border-2 border-[#F40C3B] p-4 rounded-full w-32 h-32 scale-90">
            {" "}
            <img src="/icons/dist-4.gif" alt="location" className=" scale-90" />
          </div>
          <div className=" flex flex-col gap-3 mt-3">
            <h3 className="text-3xl font-semibold text-center mb-1">
              Customized Payment Workflows
            </h3>
            <p>
              We understand that every situation is unique. That’s why we
              empower you to craft tailored payment workflows. Seamlessly
              integrate our API endpoints, and you’ll swiftly manage the
              collection, transmission, and authentication of payments.
            </p>
          </div>
        </div>
        {/* <div
          className="lg:w-[40%] w-full "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src="/img/disbursement-1.png" alt="" className="w-full" />
        </div>
        <div
          className="flex flex-col gap-8 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">Simplify payments for your business</h2>
          <p className="para">
            Our Disbursement Solution is your ultimate partner for all your
            business payment requirements. Whether you’re settling payments with
            suppliers, customers, or partners, we streamline the process for
            you.
          </p>
        </div> */}
      </div>
      {/* <div className="padding flex lg:flex-row flex-col-reverse justify-between lg:gap-20 gap-10 items-center">
        <div
          className="flex flex-col gap-8 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">Efficiency at your fingertips</h2>
          <p className="para">
            Let’s settle your payments with the utmost convenience and
            cost-effectiveness. Join the businesses for whom this is not just a
            dream but a reality. We handle your payments seamlessly, so you can
            focus on what truly matters.
          </p>
        </div>
        <div
          className="lg:w-[40%] w-full "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src="/img/disbursement-2.png" alt="" className="w-full" />
        </div>
      </div>
      <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
        <div
          className="lg:w-[40%] w-full "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src="/img/disbursement-3.png" alt="" className="w-full" />
        </div>
        <div
          className="flex flex-col gap-8 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">Payroll, perfected</h2>
          <p className="para">
            When it comes to automating your payroll, we don’t believe in hidden
            charges or unnecessary delays. We’re here to ensure a hassle-free
            process, allowing you to empower your employees without worry.
          </p>
        </div>
      </div>

      <div className="padding flex lg:flex-row flex-col-reverse justify-between lg:gap-20 gap-10 items-center">
        <div
          className="flex flex-col gap-8 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">Customized Payment Workflows</h2>
          <p className="para">
            We understand that every situation is unique. That’s why we empower
            you to craft tailored payment workflows. Seamlessly integrate our
            API endpoints, and you’ll swiftly manage the collection,
            transmission, and authentication of payments.
          </p>
        </div>
        <div
          className="lg:w-[40%] w-full "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src="/img/disbursement-4.png" alt="" className="w-full" />
        </div>
      </div> */}
      {/* <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
        <div
          className="lg:w-[40%] w-full "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src="/img/disbursement-5.png" alt="" className="w-full" />
        </div>
        <div
          className="flex flex-col gap-8 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">Features aplenty</h2>
          <p className="para">
            This solution brings a wealth of features to your fingertips. From
            one-time transfers to recurring transfers, payment authentication to
            bulk transfers, we have it all. Plus, you’ll enjoy the support of a
            team that’s always ready to assist.
          </p>
        </div>
      </div> */}
      <div className=" bg-[#FAFAF9] dark:bg-gray-900 dark:text-white padding text-center flex flex-col justify-center items-center mt-10 pb-20">
        <h2 className="h2">Experience Payment Intelligence</h2>
        <p className="para mt-5 xl:w-[70%] w-full text-center">
          Discover the intelligent way to manage your payments with CyberPay.
          It’s more than a solution; it’s a partnership that streamlines your
          financial processes, so you can reach new heights. Discover the future
          of payments with CyberPay today.
        </p>
      </div>
    </div>
  );
};

export default Disbursement;
