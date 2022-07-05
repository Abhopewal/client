import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.js/MainLayout";



const AllRoutes = () => {

  const element = useRoutes([
    
    { path: "/", element: <MainLayout /> },
  ]);

  return element;
};

export default AllRoutes;
