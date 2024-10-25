import LayoutApp from "../components/Layouts/LayoutApp";
import Layout from "../components/Layouts/LayoutDefault";
import SettingLayout from "../components/Layouts/SettingLayout";
import BookTable from "../pages/BookTable";
import DashBoard from "../pages/DashBoard";
import DetailFood from "../pages/DetailFood";
import ForgetPassword from "../pages/ForgetPassword";
import History from "../pages/History";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Notification from "../pages/Notification";
import ProductManager from "../pages/Setting/ProductManager";
import UpdateInformation from "../pages/Setting/UpdateInformation";
import SignUp from "../pages/SignUp";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login title="Welcome Back .!" content="Skip the lag ?"/>,
      },
      {
        path: "/sign-up",
        element: <SignUp title="Roll the Carpet .!" content="Skip the lag ?" />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword title="No Worries .!!" content="Take me back .!" />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutApp/>,
    children: [
        {
            path: "/menu",
            element: <Menu />
        },
        {
            path: "/detail-food",
            element: <DetailFood />
        },
        {
            path: "/dashboard",
            element: <DashBoard />
        },
        {
            path: "/notification",
            element: <Notification />
        },
        {
            path: "/history",
            element: <History />
        },
        {
            path: "/setting",
            element: <SettingLayout />,
            children: [
                {
                    path: "/setting/update-information",
                    element: <UpdateInformation/>,
                },
                {
                    path: "/setting/product-manager",
                    element: <ProductManager/>
                },
            ]
        },
    ]
  },
  {
    path: "/book-table",
    element: <BookTable/>
  }
];
