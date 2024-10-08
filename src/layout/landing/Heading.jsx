import React from "react";
import { useLocation } from "react-router-dom";
import "../../Stylesheet/header.scss";
import { useQuery } from "@tanstack/react-query";
import { getBreadCrumbs } from "../../services/api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Heading = ({ head, body, img }) => {
  const { pathname } = useLocation();

  const { isLoading, data: breadcrumbs } = useQuery({
    queryKey: ["breadcrumbs"],
    queryFn: getBreadCrumbs,
  });

 

  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#042E46" highlightColor="#999">
        <Skeleton height={"25rem"} />
      </SkeletonTheme>
    );
  }
  const currentPath  = breadcrumbs && breadcrumbs?.find((item) => item.link === pathname)

 

  return (
    <section className={`header relative`}>
      <img
        src={currentPath ? currentPath.image : img}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="main_head lg:top-[8rem] top-20 items-center absolute">
        <div className="header_text">
          <h1>{currentPath?.title ? currentPath?.title : head}</h1>
          <p className="">{currentPath?.subtitle ? currentPath?.subtitle : body}</p>

          {/* <Resuablebtn link='/whycyberpay' text="View our Solutions" icon={<RxArrowRight />} /> */}
        </div>       {/* <div className="header_img">
          <img src={img} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Heading;
