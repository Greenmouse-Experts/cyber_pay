import "../../Stylesheet/pension.scss";
import { useTheme } from "../../ThemeContext";
import Heading from "../../layout/landing/Heading";
import LoanBanner from "../../assets/images/loan-banner.png";

function LoanRepayment() {
  const { theme } = useTheme();

  return (
    <div className={`pension solution ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img="/img/loan-repayment.png"
        head="Loan Repayment Made Simple"
        body="Welcome to a world of hassle-free loan repayment. Our Loan Repayment Solution empowers businesses to effortlessly manage their customers’ debt repayment schedules"
      />
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
          className="flex flex-col gap-10 lg:w-[50%] w-full"
        >
          <div>
            <h3 className="h3">Empowering Businesses, Enhancing Revenue</h3>
            <p className="para">
              Our solution is designed to ensure your revenue remains secure. It
              stipulates that customers pay a designated portion of their debts
              within a predetermined timeframe, providing a win-win scenario for
              both businesses and their valued customers.
            </p>
          </div>
          <div>
            <h3 className="h3">Customer-Centric Flexibility</h3>
            <p className="para">
              We understand that financial obligations can be challenging.
              That’s why our solution offers customer-friendly flexible
              instalment payments. This feature grants customers the ease and
              adaptability they need to navigate their debt repayment journey,
              lightening the burden of deductions.
            </p>
          </div>
          <div>
            <h3 className="h3">Efficiency and Expansion</h3>
            <p className="para">
              For businesses, it’s all about efficiency and growth. Our Loan
              Repayment Solution streamlines payment automation, saving you time
              and resources. With direct debit activation and status monitoring,
              you’re in control. This efficiency not only saves you money but
              also contributes to revenue augmentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanRepayment;
