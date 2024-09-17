import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import solution from "../../assets/images/solution.png";
import { getDisbursement } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

const Disbursement = () => {
  const { theme } = useTheme();

  const { isLoading, data: disburse } = useQuery({
    queryKey: ["disburse"],
    queryFn: getDisbursement,
  });

  console.log(disburse)

  const content = disburse && JSON.parse(disburse.setContent)

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/disburstment-banner.png"
        head="Disbursement Solution"
        body="When it comes to automating your payroll, we don’t believe in hidden charges or unnecessary delays. "
      />
        {isLoading && <SkeletonLoader />}
        {!isLoading && disburse && (

      <div className="padding grid lg:grid-cols-2 grid-cols-1 justify-between lg:gap-16 gap-10 items-center">
        {
          content.map((item, i) =>(
        <div className="bg-white xl:h-[24rem] lg:h-[30rem] card-shadow dark:bg-bluePrimary dark:text-white rounded-md px-14 py-8 flex flex-col items-center  w-full" key={i}>

        
          <div className=" bg-white border-2 border-[#F40C3B] p-4 rounded-full w-32 h-32 scale-90">
            {" "}
            <img src={item?.image} alt="location" className=" scale-90" />
          </div>
          <div className=" flex flex-col gap-3 mt-3">
            <h3 className="text-3xl font-semibold text-center mb-1">
              {item.title}
            </h3>
            <div    dangerouslySetInnerHTML={{ __html: item?.description }}>
            </div>
          </div>
        </div>

          ))
        }

      </div>
        )}

     
      <div className=" bg-[#FAFAF9] dark:bg-gray-900 dark:text-white padding text-center flex flex-col justify-center items-center mt-10 pb-20">
        <h2 className="h2">{disburse?.setTitle}</h2>
        <div className="para mt-5 xl:w-[70%] w-full text-center" dangerouslySetInnerHTML={{ __html: disburse?.setDescription }}>

        </div>
      
      </div>
    </div>
  );
};

export default Disbursement;
