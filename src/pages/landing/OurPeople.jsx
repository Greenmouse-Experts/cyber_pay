import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import about from "../../assets/images/about-header.png";

import "../../Stylesheet/about.scss";

const People = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Our People"
        body="Our shared mission is to not only understand the intricacies of this dynamic field but to shape its evolution"
        img="/img/our-people.png"
      />

      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-4 padding gap-10 bg-[#FAFAF9] ">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="h3">Catalysts of Innovation</h3>
          <p className="para">
            At CyberPay, our team is more than just a collection of
            professionals; we are a passionate group of individuals deeply
            committed to harnessing world-changing technology. Our shared
            mission is to not only understand the intricacies of this dynamic
            field but to shape its evolution. Innovation is in our DNA, and we
            thrive on pushing boundaries. We don't just adapt to change; we
            drive it.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="h3">Masters of Customization</h3>
          <p className="para">
            With years of experience under our belts, we excel in the art of
            customization. We understand that every business is unique, and so
            are its challenges. That's why we specialize in tailoring and
            deploying products and solutions that are not just off-the-shelf but
            finely tuned to add exceptional value to our partners' businesses.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="h3">Navigators of Transformation</h3>
          <p className="para">
            In the ever-evolving tech landscape, we don't just keep pace; we
            lead the way. Our team of visionaries understands that the future is
            created through bold steps, and we're here to guide our partners on
            that transformative journey.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="h3">Partners in Innovation</h3>
          <p className="para">
            When you choose CyberPay, you're not just selecting a service
            provider; you're entering into a partnership with individuals who
            are as passionate about your success as you are. Our people are the
            driving force behind our commitment to delivering excellence,
            innovation, and lasting value.
          </p>
        </div>
      </div>

      <div className="padding bg-[#FAFAF9]">
        <p className="para font-medium">
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
