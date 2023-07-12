import About from "../pages/About";
import React from "react";
import Home from "../pages/Home";
import ShowAll from "../pages/ShowAll";
import Login from "../pages/Login";


export const routes = [
  {path: '/about', element: <About/>},
  {path: '/', element: <Home/>},
  {path: '/login', element: <Login/>},
  {path: '/allTasks', element: <ShowAll/>},
]