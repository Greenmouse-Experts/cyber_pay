import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import about from "../../assets/images/about-header.png";

import "../../Stylesheet/about.scss";
import { getPeople } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

const People = () => {
  const { theme } = useTheme();
  const { isLoading, data: people } = useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
  });
  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Our People"
        body="Our shared mission is to not only understand the intricacies of this dynamic field but to shape its evolution"
        img="/img/people-banner.png"
      />

      {isLoading && <SkeletonLoader />}
      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-4 padding gap-10 bg-[#FAFAF9] dark:bg-[#1a1a1a] ">
        {!isLoading &&
          people?.map((item) => (
            <div
              className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900"
              key={item.id}
            >
              <h3 className="h3">{item.title}</h3>
              <div className="mt-5"  dangerouslySetInnerHTML={{ __html: item?.subtitle }}/>
              {/* <p className="para">{item.subtitle}</p> */}
            </div>
          ))}
      </div>

      <div className="padding bg-[#FAFAF9] dark:bg-[#1a1a1a] dark:text-white flex justify-center items-center">
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

export default People;
