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


const Developer = () => {
  const { theme } = useTheme();
  const [tab, setTab] = useState(1);
  return (
    <div className={`pension ${theme === "light" ? "" : "darkabout text-white"}`}>
      <Heading
        img={banner}
        head="Developer Api"
        body="At CyberPay, we have put structures in place to ensure continuous high transaction success rate."
      />
      <div className="developer ">
        <div className="padding developer_wrapper">
          <div className="developer_tab">
            
            <p className={`${tab === 1 && "active bg-[#dd0a35]"} min-w-28 h-[4.5rem] `} onClick={() => setTab(1)}>
              General
            </p>
            <p className={`${tab === 2 && "active bg-[#dd0a35]"} min-w-28 h-[4.5rem] `} onClick={() => setTab(2)}>
              Getting Started
            </p>
            <p className={`${tab === 3 && "active bg-[#dd0a35]"} min-w-28 h-[4.5rem] `} onClick={() => setTab(3)}>
              Setting Up
            </p>
            <p className={`${tab === 4 && "active bg-[#dd0a35]"} min-w-28 h-[4.5rem] `} onClick={() => setTab(4)}>
              Account
            </p>
            <p className={`${tab === 5 && "active bg-[#dd0a35]"} min-w-28 h-[4.5rem] `} onClick={() => setTab(5)}>
              Payment
            </p>
            <p className={`${tab === 6 && "active"} min-w-28 h-[4.5rem] `} onClick={() => setTab(6)}>
              Dashboard
            </p>
            <p className={`${tab === 7 && "active"} min-w-28 h-[4.5rem] `} onClick={() => setTab(7)}>
              Withdrawal
            </p>
            <p className={`${tab === 8 && "active"} min-w-28 h-[4.5rem] `} onClick={() => setTab(8)}>
              Charges
            </p>
            <p className={`${tab === 9 && "active"} min-w-28 h-[4.5rem] `} onClick={() => setTab(9)}>
              Management
            </p>
            <p
              className={`${tab === 10 && "active"} min-w-28 h-[4.5rem] `}
              onClick={() => setTab(10)}
            >
              Security
            </p>
          </div>
        </div>


       {tab === 1 && <General theme={theme}/>}
       {tab === 2 && <Getstarted  theme={theme}/>}
       {tab === 3 && <Setting/>}
       {tab === 4 && <Account/>}
       {tab === 5 && <Payment/>}
       {tab === 6 && <Dashboard/>}
       {tab === 7 && <Withdrawal/>}
       {tab === 8 && <Charges/>}
       {tab === 9 && <Management/>}
       {tab === 10 && <Security/>}
      </div>
    </div>
  );
};

export default Developer;
