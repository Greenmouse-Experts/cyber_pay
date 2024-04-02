import LandingLayout from "../layout/landing";
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
        ],
      },
]