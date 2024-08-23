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
    }
  
  ]
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 
