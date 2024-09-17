import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import about from "../../assets/images/about-header.png";

import "../../Stylesheet/about.scss";
import { useQuery } from "@tanstack/react-query";
import { getStory } from "../../services/api";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

const Story = () => {
  const { theme } = useTheme();

  const { isLoading, data: story } = useQuery({
    queryKey: ["story"],
    queryFn: getStory,
  });

  // console.log(story);
  // if (isLoading ) {
  //   return <div><Skeleton height={'10rem'} count={5} /></div>;
  // }
  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Our Story"
        body="At CyberPay, we're not just shaping the future of payments; we're redefining the way businesses and customers connect in the digital realm. Experience the difference – it's our story, and it's yours too."
        img="/img/story.png"
      />

      {/* <div className="flex lg:flex-row flex-col  padding justify-between items-start lg:gap-0 gap-5 dark:text-white">
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
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="lg:w-[45%] flex flex-col gap-10  w-full"
        >
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
      </div> */}

      { isLoading && <SkeletonLoader />}
      <div className=" grid grid-cols-2 padding gap-10 bg-[#FAFAF9] dark:bg-[#1a1a1a] ">
        { story && !isLoading &&
          story?.map((item) => (
            <div
              className="bg-white p-6 rounded-2xl shadow-sm dark:bg-gray-900 h-fit w-full"
              key={item.id}
            >
              <h3 className="h3">{item.title}</h3>
              <div className="mt-5 dark:text-white"  dangerouslySetInnerHTML={{ __html: item?.subtitle }}/>
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

export default Story;
