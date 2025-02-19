import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import Dashboard from './pages/DashBoard.jsx';
import Login from './pages/Login/register.jsx';
import Signin from './pages/signin/Signin.jsx';
import Dashboard1 from './pages/posts/dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      {path : "/dashboard", element: <Dashboard></Dashboard>},
      {path:"/register",element:<Login></Login>},
      {path:"/signin",element:<Signin></Signin>},
      {path:"/posts",element:<Dashboard1></Dashboard1>}

    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
