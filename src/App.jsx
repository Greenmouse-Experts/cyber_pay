import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { landingRoutes } from "./routes/landing-routes";


const router = createBrowserRouter([...landingRoutes]);


function App() {
  return (
      <RouterProvider  router={router} />
  )
  
}

export default App
