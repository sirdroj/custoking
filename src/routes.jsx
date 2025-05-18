import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Body } from "./components/home/Body";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path:"",
            element:<Body />
        }
      ],
    },
  ]);