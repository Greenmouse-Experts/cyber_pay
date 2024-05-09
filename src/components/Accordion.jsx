
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useTheme } from "../ThemeContext";


const AccordionItem = ({ title, answer,open }) => {
  const [accordionOpen, setAccordionOpen] = useState(open);
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`md:py-8 py-5  px-5 rounded-lg border border-[#0080CF] ${
          accordionOpen ? "  mb-5" : "bg-blueLight dark:bg-darkMood mb-5"
        } `}
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <button className="flex justify-between w-full items-center">
          <span
            className={`para font-normal ${theme === "light" ? "text-[#565656]" : "text-white"}  ${
              accordionOpen ? "black" : "black"
            }`}
          >
            {title}
          </span>
          {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <FaPlus  size={10} color={accordionOpen ? "black" : "black"} />
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className={`overflow-hidden ${
            accordionOpen ? "mb-6" : ""
          }`}
        >
         <p className={`leading-[30px]  font-normal para  ${theme === "light" ? "" : "text-white"}  `}> {answer}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
