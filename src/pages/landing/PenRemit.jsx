import React from "react";
import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/solution.png";
import market from "../../assets/images/market.png";

const PenRemit = () => {
  const { theme } = useTheme();

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/pension-banner.png"
        head="Pensions with Peace of Mind"
        body="Welcome to CyberPay’s comprehensive pension solutions. We understand that your financial future is non-negotiable, and we’re here to make sure it’s secure, seamless, and hassle-free"
      />
      <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
        <div
          className="lg:w-[40%] w-full "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src="/img/pension-1.png" alt="" className="w-full rounded-2xl" />
        </div>
        <div
          className="flex flex-col gap-8 lg:w-[60%] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="h2">Pension Solutions for Everyone.</h2>
          <p className="para">
            Our suite of pension solutions, including Micro Pension and Pension
            Remit, is designed to cater to your unique needs. Whether you’re an
            individual in the informal sector seeking retirement security or an
            employer looking to streamline pension contributions, CyberPay has
            you covered.
          </p>
        </div>
      </div>

      <div className=" bg-[#FAFAF9] dark:bg-gray-900 dark:text-white padding flex flex-col mt-10"  data-aos="fade-up"
          data-aos-duration="1000">
        <h2 className="h2">Micro Pensions: Inclusivity at its core</h2>
        <p className="para mt-5">
          We’re transforming the future of retirement for self-employed
          individuals and those in the informal sector across Nigeria. Our Micro
          Pension Plan is designed specifically to provide retirement benefits
          for those often overlooked by traditional pension schemes.
        </p>
        <p className="para mt-3">
          If you’re in the informal sector, this plan is your ticket to
          financial security in your golden years. Thanks to the Pension Reform
          Act, 2014, even if you work in an organization with less than three
          employees or you’re self-employed, you have the right to participate
          in the Contributory Pension Scheme. We’re here to guide you through
          this journey.
        </p>
      </div>

      <div className=" bg-[#FAFAF9] dark:bg-gray-900 dark:text-white padding flex flex-col"  data-aos="fade-up"
          data-aos-duration="1000">
        <h2 className="h2">PenRemit: Effortless Remittance Management</h2>
        <p className="para mt-5">
          PenRemit is the cutting-edge web-based remittance schedule management
          platform by CyberPay. We’ve redefined the way employers manage their
          employees’ Pension Contributions, making it organized, timely, and
          hassle-free.
        </p>
        <p className="para mt-3">
          PenRemit takes the complexity out of pension remittance. It simplifies
          the process of uploading schedules to Pension Fund Administrators
          (PFA) and ensures prompt payments to Pension Fund Custodians (PFC).
          With PenRemit, everything is automated, and everyone is in the loop.
        </p>
      </div>
    </div>
  );
};

export default PenRemit;
