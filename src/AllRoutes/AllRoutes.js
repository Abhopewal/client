import { useRoutes } from "react-router-dom";
import CreatePost from "../Blog/Create-Blog";
import BlogLayout from "../layouts/BlogLayout.js/BlogLayout";
import MainLayout from "../layouts/MainLayout.js/MainLayout";



const AllRoutes = () => {

  const element = useRoutes([
    
    { path: "/", element: <MainLayout /> },
    {path:"blog",element:<BlogLayout/>},
    {path:"create-blog",element:<CreatePost/>}
  ]);

  return element;
};

export default AllRoutes;
