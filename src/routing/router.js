import { createBrowserRouter } from "react-router-dom";
import Blog from "../component/Blog/Blog";
import CorseParses from "../component/CorseParses/CorseParses";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import CoursePage from "../component/CoursePage/CoursePage";
import FAQ from "../component/FAQ/FAQ";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element : <CorseParses></CorseParses>,
        loader : ({params}) => fetch(`https://server-tanzilmia.vercel.app/details/${params.course_name}`)
      },
    ],
  },
]);
export default router;
