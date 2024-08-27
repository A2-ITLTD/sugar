import * as React from "react"; 
import * as ReactDOM from "react-dom/client";
import {
 createBrowserRouter, 
 RouterProvider, 
} from "react-router-dom"; 
import "./index.css"; 
import Root from "./Root";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";
import Policy from "./components/Policy";
import AuthProvider from "./components/AuthProvider";
import Login from "./components/Login";
import Registration from "./components/Registration";
import NonSuppling from "./components/NonSuppling";
import SugarForm from "./components/SugarForm";

const router = createBrowserRouter([ 
 { 
 path: "/", 
 element: <Root></Root>, 
 children: [
    { path: "/",
      element: <Home></Home>
    },
    { path: "/about",
      element: <About></About>
    },
    { path: "/contact",
      element: <Contact></Contact>
    },
    { path: "/allproducts",
      element: <AllProducts></AllProducts>
    },
    { path: "/policy",
      element: <Policy></Policy>
    },
    {
      path: '/item/:id',
      element: <Products></Products>,
      loader : () => fetch('/item.json'),
    },
    { path: "/login",
      element: <Login></Login>
    },
    { path: "/registration",
      element: <Registration></Registration>
    },
    { path: "/nonsuppling",
      element: <NonSuppling></NonSuppling>
    },
    { path: "/sugarform",
      element: <SugarForm></SugarForm>
    },
  
  ]
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
  <AuthProvider>
    <RouterProvider router={router} /> 
  </AuthProvider>
 </React.StrictMode> 
); 
