import HomePage from '../models/main/HomePages/HomePage'
import {createBrowserRouter} from "react-router-dom";
import GetTheApp from '../models/main/GetTheApp/GetTheApp';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/gettheapp",
      element: <GetTheApp />,
    },
  ]);


export default Routes;