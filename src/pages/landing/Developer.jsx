import Heading from "../../layout/landing/Heading";
import banner from "../../assets/images/developer-banner.png";

import { useTheme } from "../../ThemeContext";
import "../../Stylesheet/developer.scss";
import { useState } from "react";
import General from "../../features/Developer/General";
import Getstarted from "../../features/Developer/Getstarted";
import Setting from "../../features/Developer/Setting";
import Account from "../../features/Developer/Account";
import Payment from "../../features/Developer/Payment";
import Dashboard from "../../features/Developer/Dashboard";
import Withdrawal from "../../features/Developer/Withdrawal";
import Charges from "../../features/Developer/Charges";
import Management from "../../features/Developer/Management";
import Security from "../../features/Developer/Security";
import { IoMdArrowRoundForward } from "react-icons/io";

const Developer = () => {
  const { theme } = useTheme();
  const [tab, setTab] = useState(2);
  const items = [
    {
      title: "Getting Started",
      index: 2,
    },
    {
      title: "Setting Up",
      index: 3,
    },
    {
      title: "Errors",
      index: 1,
    },
    {
      title: "Payment",
      index: 5,
    },
    {
      title: "Settlement",
      index: 7,
    },
  ];

  console.log(tab);
  return (
    <div
      className={`pension ${theme === "light" ? "" : "darkabout text-white"}`}
    >
      <Heading
        img="/img/developer-banner.png"
        head="Developer API"
        body="At CyberPay, we have put structures in place to ensure continuous high transaction success rate."
      />
      <div className="developer flex lg:flex-row flex-col  w-full px-[3%] py-10 relative">
        <div className="developer_tab lg:w-[20%] lg:flex hidden bg-[#E8F0FC] dark:bg-gray-950  top-10 left-10 h-fit ">
        <h3 className=" h3 border-b-2 border-black dark:border-white mb-5 w-full">Categories</h3>
          <p
            className={`${
              tab === 2 && "active !font-semibold"
            }  flex items-center gap-2  `}
            onClick={() => setTab(2)}
          >
            <span>
              <IoMdArrowRoundForward />
            </span>
            Getting Started
          </p>
          <p
            className={`${
              tab === 3 && "active !font-semibold"
            }  flex items-center gap-2 `}
            onClick={() => setTab(3)}
          >
             <span>
              <IoMdArrowRoundForward />
            </span>
            Setting Up
          </p>
          <p
            className={`${
              tab === 1 && "active !font-semibold"
            }  flex items-center gap-2 `}
            onClick={() => setTab(1)}
          >
             <span>
              <IoMdArrowRoundForward />
            </span>
            Errors
          </p>

          <p
            className={`${
              tab === 5 && "active !font-semibold"
            }  flex items-center gap-2 `}
            onClick={() => setTab(5)}
          >
             <span>
              <IoMdArrowRoundForward />
            </span>
            Payment
          </p>

          <p
            className={`${
              tab === 7 && "active !font-semibold"
            } flex items-center gap-2`}
            onClick={() => setTab(7)}
          >
             <span>
              <IoMdArrowRoundForward />
            </span>
            Settlement
          </p>
        </div>
        <div className="lg:hidden block w-full mb-10">
          <h3 className=" h3 border-b-2 border-black mb-5">Categories</h3>
          <select
            className="w-full h-14 text-black text-lg bg-[#F3F9FB] rounded-lg px-3"
            value={tab}
            onChange={(e) => setTab(parseInt(e.target.value))}
          >
            {items.map((item) => (
              <option key={item.index} value={item.index}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:w-[80%] w-full px-10">
          {tab === 2 && <Getstarted theme={theme} />}
          {tab === 3 && <Setting />}
          {tab === 1 && <General theme={theme} />}
          {/* {tab === 4 && <Account/>} */}
          {tab === 5 && <Payment />}
          {/* {tab === 6 && <Dashboard/>} */}
          {tab === 7 && <Withdrawal />}
          {/* {tab === 8 && <Charges/>} */}
          {/* {tab === 9 && <Management/>} */}
          {/* {tab === 10 && <Security/>} */}
        </div>
      </div>
    </div>
  );
};

export default Developer;

// overflow-y-scroll h-screen styled-scroll
