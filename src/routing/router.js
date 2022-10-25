import { createBrowserRouter } from "react-router-dom";
import CoursePage from "../component/CoursePage/CoursePage";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <CoursePage></CoursePage>,
        loader : () => fetch('http://localhost:5000/course')
      },
    ],
  },
]);
export default router;
