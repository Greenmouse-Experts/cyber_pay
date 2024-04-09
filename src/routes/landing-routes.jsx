import LandingLayout from "../layout/landing";
import Pricing from "../pages/landing/Pricing";
import WhyCyber from "../pages/landing/WhyCyber";
import LandingAbout from "../pages/landing/about";
import LandingHomepage from "../pages/landing/homepage";

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
          }
        ],
      },
]