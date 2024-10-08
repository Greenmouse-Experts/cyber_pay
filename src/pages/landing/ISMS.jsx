import { NavLink } from "react-router-dom";
import banner from "../../assets/images/privacy-policy.png";
import Header from "../../layout/landing/Heading";
import { useTheme } from "../../ThemeContext";
import { GoDotFill } from "react-icons/go";


function ISMS() {
  const { theme } = useTheme();
  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout"}`}>
      <Header
        img="/img/isms-banner.png"
        head="ISMS ISO 27001:2022"
        body="ISO 27001 Information Security Policy Statement"
      />

      <div className="padding mt-5 xl:!px-[20%]">
        <div className="mb-12">
          <h3 className="h3 mb-5">
            ISO 27001 Information Security Policy Statement
          </h3>
          <p className="para text-[#565656] mb-10">
            CyberPay Limited is committed to protecting the security of
            information, regardless of media type in accordance with applicable
            laws and regulations. Information is critical and a valuable asset
            for CyberPay
          </p>
          <p className="para text-[#565656] mb-10">
            The objective of information security is to reduce the risk to
            CyberPay by protecting information, information systems and
            communications that deliver information, from failures of integrity,
            confidentiality, and availability, whether information is in
            storage, processing, or transmission.
          </p>
          <div className="mb-10">
            <h3 className="h3">
              The management of CyberPay is committed to ensuring:
            </h3>
            <div className="why_text">
               <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> 
                All CyberPay’s information security policy, standards,
                guidelines, and practices shall be coordinated through the
                Information Security team, and that these shall also be
                consistent with the company’s approach in developing,
                implementing, and managing information systems security.
              </p>
               <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> 
                All CyberPay Staff shall undergo information security training
                which will be propagated using different methods at regular
                intervals to enhance competence and awareness across board.
              </p>
               <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> 
                That CyberPay complies to all legal and other applicable
                requirements to which the company subscribes to including ISO
                27001 Standard.
              </p>
               <p className="para flex items-center gap-2"><span><GoDotFill size={14}  /></span> 
                That ISMS objectives are set, and adequate resources are
                provided to achieve them.
              </p>
            </div>
          </div>
          <p className="para text-[#565656] mb-10">
            CyberPay Management acknowledges the need for continual improvement
            and has introduced various methods to ensure that effectiveness and
            continual improvement of the processes are achieved.
          </p>

          <p className="para text-[#565656] mb-10">
            CyberPay Management shall ensure that the review of the Information
            Security Policy and related documents are performed at least on an
            annual basis or when significant changes occur to ensure
            suitability, adequacy, and effectiveness of the ISMS framework.
          </p>

          <p className="para text-[#565656] mb-10">
            All CyberPay personnel who have access to information assets are
            expected to comply with the acceptable use policy in the use of
            information created, stored, transmitted, or disposed of in the
            course of their job duties, regardless of the medium in which that
            information is maintained.
          </p>
          <p className="para text-[#565656] mb-10">
            For questions related to this Policy or Information Security contact
            the Information Security Team{" "}
            <span>
              <NavLink to="mailto:isms@cyberspace.net.ng">
                isms@cyberspace.net.ng
              </NavLink>
            </span>
          </p>
        </div>
      </div>

      {/* <div className="bg-[#2F9BD6] padding flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center mt-5">
        <h3 className="h3 md:w-[55%] w-full text-white leading-10">
          CyberPay offers effortless setup and provides customers with a range
          of convenient and secure payment options.
        </h3>
      </div> */}
    </div>
  );
}

export default ISMS;
