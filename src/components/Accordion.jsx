import { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ index, title, answer, open, toggleAccordion }) => {
  const { theme } = useTheme();

  useEffect(() => {
    toggleAccordion(0)
  }, []);

  return (
    <>
      <div
        className={`md:py-8 py-5 px-5 rounded-lg border border-[#0080CF] ${
          open
            ? "mb-5"
            : "bg-blueLight dark:bg-darkMood mb-5"
        }`}
        onClick={() => toggleAccordion(index)}
      >
        <button className="flex justify-between w-full items-center">
          <span
            className={`para font-normal ${
              theme === "light" ? "text-[#565656]" : "text-white"
            }`}
          >
            {title}
          </span>
          {open ? (
            <FaMinus size={10} className="text-black dark:text-white" />
          ) : (
            <FaPlus size={10} className="text-black dark:text-white" />
          )}
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={`overflow-hidden ${open ? "mb-6" : ""}`}>
          <p
            className={`leading-[30px] font-normal para ml-5 ${
              theme === "light" ? "" : "text-white"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
