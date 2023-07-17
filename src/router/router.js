import About from "../pages/About";
import React from "react";
import Home from "../pages/Home";
import ShowAll from "../pages/ShowAll";
import AccountInfo from "../pages/AccountInfo";


export const routes = [
  {path: '/about', element: <About/>},
  {path: '/', element: <Home/>},
  {path: '/allTasks', element: <ShowAll/>},
  {path: '/im', element: <AccountInfo/>},
]