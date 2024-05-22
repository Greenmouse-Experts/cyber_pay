import banner from "../../assets/images/privacy-policy.png";
import Heading from "../../layout/landing/Heading";
import { useTheme } from "../../ThemeContext";

function BCMS() {
  const { theme } = useTheme();
  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout"} pt-20`}>
      {/* <Heading
        img={banner}
        head="Data Privacy Policy"
        body="Data Privacy Policy: Safeguarding Your Information"
      /> */}

      <div className="padding mt-5">
        <div className="mb-12">
          <h3 className="h3">ISO 22301 Business Continuity Policy Statement</h3>
        </div>
        <div className="mb-10">
          <h4 className="h4 mb-3">Introduction</h4>
          <p className="para text-[#565656]">
            CyberPay Limited is committed to protecting the security of
            information, regardless of media type in accordance with applicable
            laws and regulations. Information is critical and a valuable asset
            for CyberPay
          </p>
        </div>
        <div className="mb-10">
          <h4 className="h4 mb-3">Scope</h4>
          <p className="para text-[#565656]">
            The Policy Statement is scoped to all CyberPay business operations,
            Management activities and supporting key services
          </p>
        </div>
        <div className="mb-10">
          <h4 className="h4 mb-3">Purpose</h4>
          <p className="para text-[#565656]">
            The Business Continuity Management System has been established to
            ensure that CyberPay continues to deliver a minimum level of service
            to our key customers in the event of any disruption.
          </p>
        </div>
        <div className="mb-10">
          <h4 className="h4 mb-3">
            The business continuity policy provides a structure through which:
          </h4>
          <p className="para text-[#565656]">
            • A Comprehensive BCMS is established, maintained, tested,
            quality-assured and promulgated; <br />• Key services, together with
            their critical processes, activities and supporting resources and
            interdependencies, are identified; <br />• Business impact analysis
            and risk assessment are applied to critical processes, activities
            and resources; <br />• Business continuity objectives are set and
            progress towards them is monitored, and <br />• Plans are developed
            to ensure continuity of those services deemed to be business
            critical at a minimum acceptable level and to achieve recovery
            within a specific time frame following a disruptive event.
          </p>
        </div>
        <div className="mb-10">
          <h4 className="h4 mb-3">CyberPay is committed to:</h4>
          <p className="para text-[#565656]">
            • Recovering key services to our customers in times of disruption:
            <br />• Make the best use of personnel and other resources at times
            when both may be scarce;
            <br />• Minimise the period of disruption to CyberPay and the
            customers we serve;
            <br />• Improve the resilience of our infrastructure to reduce the
            likelihood of disruption;
            <br />• Mitigate the operational and financial impact of any
            disruption;
            <br />• Review and revise plans to support business continuity at
            regular intervals, and
            <br />• Comply with all applicable legislation and other
            requirements related to business continuity
            <br />• Continually improve the suitability, adequacy and
            effectiveness of our Business Continuity Management System.
          </p>
        </div>
      <div className="mb-10">
        <h4 className="h4 mb-3">Policy Review</h4>
        <p className="para text-[#565656]">
          This policy statement is periodically reviewed by the Leadership Team
          to ensure that it remains relevant and appropriate to the scope of
          activities conducted by CyberPay.
        </p>
      </div>
      </div>

    </div>
  );
}

export default BCMS;
