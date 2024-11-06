import Layout1 from "../components/Layouts/Layout1";
import Layout2 from "../components/Layouts/Layout2";
import Layout3 from "../components/Layouts/Layout3";
import Layout4 from "../components/Layouts/Layout4";
import Layout5 from "../components/Layouts/Layout5";
import SettingLayout from "../components/Layouts/SettingLayout";
import AddFood from "../pages/AddFood";
import BookTable from "../pages/BookTable";
import DashBoard from "../pages/DashBoard";
import DetailFood from "../pages/DetailFood";
import EditFood from "../pages/EditFood";
import ForgetPassword from "../pages/ForgetPassword";
import History from "../pages/History";
import Home from "../pages/Home";
import InformationToDelivery from "../pages/InformationToDelivery";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import NotFound from "../pages/NotFound";
import Notification from "../pages/Notification";
import ProductManager from "../pages/Setting/ProductManager";
import UpdateInformation from "../pages/Setting/UpdateInformation";
import SignUp from "../pages/SignUp";

export const routes = [
  {
    path: "/",
    element: <Layout1 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login title="Welcome Back .!" content="Skip the lag ?" />,
      },
      {
        path: "/sign-up",
        element: <SignUp title="Roll the Carpet .!" content="Skip the lag ?" />,
      },
      {
        path: "/forget-password",
        element: (
          <ForgetPassword title="No Worries .!!" content="Take me back .!" />
        ),
      },
    ],
  },
  {
    path: "/book-table",
    element: <BookTable />,
  },
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/detail-food",
        element: <DetailFood />,
      },
      {
        path: "/information-to-delivery",
        element: <InformationToDelivery />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout3 />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout4 />,
    children: [
      {
        path: "/setting",
        element: <SettingLayout />,
        children: [
          {
            path: "/setting/update-information",
            element: <UpdateInformation />,
          },
          {
            path: "/setting/product-manager",
            element: <ProductManager />,
          },
          {
            path: "/setting/product-manager/add-new-food",
            element: <AddFood />,
          },
          {
            path: "/setting/product-manager/edit-food/:id",
            element: <EditFood />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <Layout5 />,
    children: [
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  }
];
