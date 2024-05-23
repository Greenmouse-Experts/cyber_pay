import Heading from "../../layout/landing/Heading";
import banner from "../../assets/images/privacy-policy.png";
import { useTheme } from "../../ThemeContext";
import PolicyFooter from "../../components/PolicyFooter";

function DataPolicy() {
  const { theme } = useTheme();
  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout"}`}>
      <Heading
        img={banner}
        head="Data Privacy Policy"
        body="Data Privacy Policy: Safeguarding Your Information"
      />

      <div className="padding mt-5 xl:!px-[20%]">
        <div className="mb-12">
          <h3 className="h3 mb-5">
            Data Privacy & Protection Policy at CyberPay Limited: Safeguarding
            Personal Data
          </h3>
          <p className="para text-[#565656] mb-10">
            As part of our operations, CyberPay Limited (“CyberPay” or “the
            Company”) collects and processes certain types of information (such
            as name, telephone numbers, address, etc.) of individuals that makes
            them easily identifiable. These individuals include current, past
            and prospective employees, merchants, suppliers/vendors, customers
            of merchants and other individuals whom CyberPay communicates or
            deals with, jointly and/or severally (“Data Subjects”).
          </p>
          <p className="para text-[#565656] mb-10">
            Maintaining the Data Subject’s trust and confidence requires that
            Data Subjects do not suffer negative consequences/effects as a
            result of providing CyberPay with their Personal Data. To this end,
            CyberPay is firmly committed to complying with applicable data
            protection laws, regulations, rules and principles to ensure
            security of Personal Data handled by the Company. This Data Privacy
            & Protection Policy (“Policy”) describes the minimum standards that
            must be strictly adhered to regarding the collection, use and
            disclosure of Personal Data and indicates that CyberPay is dedicated
            to processing the Personal Data it receives or processes with
            absolute confidentiality and security.
          </p>

          <p className="para text-[#565656] mb-10">
            This Policy applies to all forms of systems, operations and
            processes within the CyberPay environment that involve the
            collection, storage, use, transmission and disposal of Personal
            Data.
          </p>

          <p className="para text-[#565656] mb-10">
            Failure to comply with the data protection rules and guiding
            principles set out in the Nigeria Data Protection Regulation, 2019
            (NDPR) as well as those set out in this Policy is a material
            violation of CyberPay’s policies and may result in disciplinary
            action as required, including suspension or termination of
            employment or business relationship.
          </p>
        </div>
      </div>


        <PolicyFooter />
     
    </div>
  );
}

export default DataPolicy;
