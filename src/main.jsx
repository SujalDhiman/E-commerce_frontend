import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./store";
import {  createBrowserRouter, RouterProvider,createHashRouter } from "react-router-dom";
import Contextprovider from "./Components/context/Contextprovider";
import Signup from './Components/signup_signin/SignUp';
import Sign_in from './Components/signup_signin/Sign_in';
import Cart from './Components/cart/Cart';
import Buynow from './Components/buynow/Buynow';
import Maincomp from './Components/home/Maincomp';
import authStore from './Components/RTK_Setup/store';
import MobileComponentPage from './Components/compos/MobileComponentPage';
const container = document.getElementById('root');
const root = createRoot(container); 


const router=createHashRouter(
  [{
    path:'/',
    element:<App />,
    children:[
      {
          path:"",
          element:<Maincomp />
      },

      {
        path:"signup",
        element:<Signup/>
      },
    {
        path:"login",
        element:<Sign_in/>
    },
    {
        path:"getproductsone/:id",
        element:<Cart/>
    },
    {
        path:"buynow",
        element:<Buynow/>
    },
    {
        path:"getMobileData",
        element:<MobileComponentPage/>
    }
    ]
  }]
)






root.render(
  <Contextprovider>
    <Provider store={authStore}>
    {/* <Provider store={store}> */}
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    {/* </Provider> */}
    </Provider>
  </Contextprovider>
);
