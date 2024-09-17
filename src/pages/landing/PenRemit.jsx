import React from "react";
import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/solution.png";
import market from "../../assets/images/market.png";
import { useQuery } from "@tanstack/react-query";
import { getPenRemit } from "../../services/api";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

const PenRemit = () => {
  const { theme } = useTheme();

  const { isLoading, data: penremit } = useQuery({
    queryKey: ["penRemit"],
    queryFn: getPenRemit,
  });
  const content = penremit && JSON.parse(penremit.setContent);

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/penremit-banner.png"
        head="Pensions with Peace of Mind"
        body="Welcome to CyberPay’s comprehensive pension solutions. We understand that your financial future is non-negotiable, and we’re here to make sure it’s secure, seamless, and hassle-free"
      />
      {isLoading && <SkeletonLoader />}
      {!isLoading && penremit && (
        <div className="padding flex lg:flex-row flex-col justify-between lg:gap-20 gap-10 items-center">
          <div
            className="lg:w-[40%] w-full "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={penremit?.setImage}
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
          <div
            className="flex flex-col lg:w-[60%] w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
            dangerouslySetInnerHTML={{ __html: penremit?.setDescription }}
          ></div>
        </div>
      )}

      {!isLoading &&
        content &&
        content.map((item, i) => (
          <div
            className=" bg-[#FAFAF9] dark:bg-gray-900 dark:text-white padding flex flex-col mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
            key={i}
          >
            <h2 className="h2">{item?.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: item?.description }}></div>
          </div>
        ))}
    </div>
  );
};

export default PenRemit;
