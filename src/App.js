import React from 'react';
import  ProductList  from './features/Product-list/ProductList';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path: "/signup",
    element: (<SignupPage></SignupPage>),
  },
]);

function App() {
  return (
    <div className="App">
      

       <RouterProvider router={router} />

        
    </div>
  );
}

export default App;
