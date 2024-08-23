import { useQuery } from "@tanstack/react-query";
import { getAdsBanner } from "../services/api";

const AdvertSection = () => {
  const { isLoading, data: ads } = useQuery({
    queryKey: ["ads"],
    queryFn: getAdsBanner,
  });

  console.log(ads);

  return (
    <>
      {ads && ads?.length > 0 && (
        <div className="padding !pb-0">
          <img
            src={ads[0]?.image}
            alt="banner"
            className="lg:h-[20rem] h-[15rem] object-center object-cover w-full"
          />
        </div>
      )}
    </>
  );
};

export default AdvertSection;
