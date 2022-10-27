import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import CorseParses from "../component/CorseParses/CorseParses";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import CoursePage from "../component/CoursePage/CoursePage";
import Error from "../component/Errorpage/Error";
import FAQ from "../component/FAQ/FAQ";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Main from "../Layout/Main";
import PrivetRouting from "./PrivetRouting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <Error></Error>,
    children: [
      {
        path: "/",
        element: <CoursePage></CoursePage>,
        loader : () => fetch('https://server-tanzilmia.vercel.app/course')
      },
      {
        path : '/blog',
        element :<Blog></Blog>
      },
      {
        path : '/faq',
        element : <FAQ></FAQ>
      },
      {
        path : '/details/:course_name',
        element : <CourseDetails></CourseDetails>,
        loader : ({params}) => fetch(`https://server-tanzilmia.vercel.app/details/${params.course_name}`)
      },
      {
        path : '/parces/:course_name',
        element : <PrivetRouting><CorseParses></CorseParses></PrivetRouting>,
        loader : ({params}) => fetch(`https://server-tanzilmia.vercel.app/details/${params.course_name}`)
      },
      {
        path: '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      }
    ],
  },
]);
export default router;
