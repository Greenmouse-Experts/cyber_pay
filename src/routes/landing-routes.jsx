import LandingLayout from "../layout/landing";
import Pricing from "../pages/landing/Pricing";
import WhyCyber from "../pages/landing/WhyCyber";
import LandingAbout from "../pages/landing/about";
import LandingHomepage from "../pages/landing/homepage";
import Market from "../pages/landing/Market";
import MicroPension from "../pages/landing/MicroPension";
import Ussd from "../pages/landing/UssdCollect";
import Payment from "../pages/landing/Payment";
import Login from "../pages/landing/Login";
import Register from "../pages/landing/Register";
import Developer from "../pages/landing/Developer";
import CookiePolicy from "../pages/landing/CookiePolicy";
import DataPolicy from "../pages/landing/DataPolicy";
import TermsAndCondition from "../pages/landing/TermsAndCondition";
import WhistleBlower from "../pages/landing/WhistleBlower";

export const landingRoutes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingHomepage />,
      },
      {
        path: "about",
        element: <LandingAbout />,
      },
      {
        path: "whycyberpay",
        element: <WhyCyber />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "marketplace",
        element: <Market />,
      },
      {
        path: "micropension",
        element: <MicroPension />,
      },
      {
        path: "ussdcollection",
        element: <Ussd />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "developer",
        element: <Developer />,
      },
      {
        path: "cookies-policy",
        element: <CookiePolicy />,
      },
      {
        path: "privacy-policy",
        element: <DataPolicy />,
      },
      {
        path: "terms-conditions",
        element: <TermsAndCondition />,
      },
      {
        path: "whistle-blower",
        element: <WhistleBlower />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
