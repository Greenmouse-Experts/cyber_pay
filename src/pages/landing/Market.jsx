import React from "react";
import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/solution.png";
import market from "../../assets/images/market.png";
import { useQuery } from "@tanstack/react-query";
import { getMarket } from "../../services/api";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

const Market = () => {
  const { theme } = useTheme();

  const { isLoading, data: market } = useQuery({
    queryKey: ["market"],
    queryFn: getMarket,
  });


  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      
      <Heading
       img="/img/market-banner.png"
        head="CyberPay Marketplace"
        body="Discover a world of endless possibilities at your fingertips!"
      />
       { isLoading && <SkeletonLoader />}

   { market && !isLoading &&  <div className="market padding">
        <div
       
          className="market_img"
        >
          <img src={market?.setImage} alt=""  className="md:max-h-[30rem] max-h-[20rem] rounded-2xl"/>
        </div>
        <div
         
          className="market_text"
          dangerouslySetInnerHTML={{ __html: market?.setDescription }}
        >
         
        </div>
      </div>}
    </div>
  );
};

export default Market;
