import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { landingRoutes } from "./routes/landing-routes";
import ScrollToTop from "./components/scroll-to-top";

const router = createBrowserRouter([...landingRoutes]);

function App() {
  return <RouterProvider router={router} />
}

export default App
