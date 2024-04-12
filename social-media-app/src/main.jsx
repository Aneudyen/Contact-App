import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./routes/root";
import Contact,{loader as contactLoader,} from "./routes/contact";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import EditContact from "./routes/edit";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  children: [

  {
    path: "contacts/:contactId",
    element: <Contact />,
    loader: contactLoader,
  },
],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
