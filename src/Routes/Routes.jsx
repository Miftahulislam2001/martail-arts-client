import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Classes from "../Pages/Classes";
import Instructor from "../Pages/Instructor";
import LogIn from "../Pages/LogIn";
import Registration from "../Pages/Registration";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
            
        },
        {
            path: "/classes",
            element: <Classes></Classes>
            
        },
        {
            path: "/instructor",
            element: <Instructor></Instructor>
            
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
            
        },
        {
            path: "/registration",
            element: <Registration></Registration>
            
        },
      ]
    },
  ]);

  export default router;