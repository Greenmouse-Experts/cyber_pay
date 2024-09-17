import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import LoanBanner from "../../assets/images/loan-banner.png";
import { getDirectDebit } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import SkeletonLoader from "../../components/loader/SkeletonLoader";

function LoanRepayment() {
  const { theme } = useTheme();

  const { isLoading, data: debit } = useQuery({
    queryKey: ["directDebit"],
    queryFn: getDirectDebit,
  });

  
  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/direct-banner.png"
        head="Direct Debit"
        body="Welcome to a world of hassle-free loan repayment. Our Loan Repayment Solution empowers businesses to effortlessly manage their customers’ debt repayment schedules"
      />

      {isLoading && <SkeletonLoader />}
      {!isLoading && debit && (
        <div className="flex lg:flex-row flex-col  padding justify-between items-center lg:gap-0 gap-5">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:w-[45%] w-full"
          >
            <img
              src="/img/loan-repayment.jpg"
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col gap-4 lg:w-[50%] w-full"
           dangerouslySetInnerHTML={{ __html: debit?.setDescription }}
          
          >
            
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanRepayment;
