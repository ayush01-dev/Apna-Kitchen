import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx"; //defalult import
import {Footer} from "./components/Footer.jsx"; //named import
import Body from "./components/Body"; //we can import like this also 
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Profile from "./components/Profile.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Utils/Redux/store.js";

import {lazy,Suspense} from "react";
import MenuLoader from "./components/MenuLoader.jsx";
import Cart from "./components/Cart.jsx";
// import grocery from "./components/grocery.jsx";

 const Grocery = lazy(()=> import("./components/Grocery.jsx"));

/*createBrowserRouter -> is helps us to create routing
  RouterProvider -> is provides to root div to render according to path we set*/
const AppLayout = ()=>{

    return(
         <Provider store={store}>
        <React.Fragment>
        <Header/>

            <Outlet/>

        <Footer/>
        </React.Fragment>
        </Provider>
    );
};


//Creating a router config to set path for each page(nested routes)
const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        //if we load "/" this path then <AppLayout/> will render 
        //if error in "/" this path then <Error/> will render

        children:[   //children is created means they will all go to the <Outlet/> and render according to route set for them.

            {

                path: "/",
                element: <Body/>
            },
            {

                path: "/about",
                element: <About/>,
                children:[

                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
        
            {
        
                path: "/contact",
                element: <Contact/>
            },

            {

                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },

            {

                path:"/grocery",
                element:<Suspense fallback={<MenuLoader/>}>

                         <Grocery/>
                        </Suspense>  
            }
        ]
    },

]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);