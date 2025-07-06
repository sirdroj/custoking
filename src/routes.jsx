import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Body } from "./components/home/Body";
import About from "./pages/About";
import { Home } from "./pages/Home";
import Events from "./pages/Events";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path:"",
            element:<Home />
        },
        {
          path:"about",
          element: <About />
        },
        {
          path:"events",
          element: <Events />
        }
      ],
    },
  ]);