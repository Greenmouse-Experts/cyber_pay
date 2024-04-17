import LandingLayout from "../layout/landing";
import Pricing from "../pages/landing/Pricing";
import WhyCyber from "../pages/landing/WhyCyber";
import LandingAbout from "../pages/landing/about";
import LandingHomepage from "../pages/landing/homepage";
import Market from "../pages/landing/Market"
import MicroPension from "../pages/landing/MicroPension"
import Ussd from "../pages/landing/UssdCollect"
import Payment from "../pages/landing/Payment"
import Login from "../pages/landing/Login";
import Register from "../pages/landing/Register";

export const landingRoutes = [
    {
        path: '/',
        element: <LandingLayout />,
        children: [
          {
            index: true,
            element: <LandingHomepage />,
          },
          {
            path: 'about',
            element: <LandingAbout />,
          },
          {
            path: 'whycyberpay',
            element: <WhyCyber/>
          },
          {
            path: 'pricing',
            element: <Pricing/>
          },
          ,
          {
            path: 'marketplace',
            element: <Market />
          }
          ,
          {
            path: 'micropension',
            element: <MicroPension />
          },
          {
            path: 'ussdcollection',
            element: <Ussd />
          },
          {
            path: 'payment',
            element: <Payment />
          }
        ],
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
]