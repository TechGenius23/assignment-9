import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/component/Root';
import Slider from './assets/component/Slider';
import Estates from './assets/component/Estates';
import Ourproject from './assets/component/Ourproject';
import Review from './assets/component/Review';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "",
        element: <Slider></Slider>
      },
      {
        path: "/",
        element: <Estates></Estates>
      },
      {
        path: "/",
        element: <Ourproject></Ourproject>
      },
      {
        path: "",
        element: <Review></Review>
      },

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
