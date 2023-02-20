import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import OurServicesPage  from './pages/OurServicesPage'
import ContactUsPage from './pages/ContactUsPage'
import AboutUsPage from "./pages/AboutUsPage";
import HowitWorksPage from "./pages/HowitWorksPage";
import ResourcesPage from './pages/ResourcesPage'
import TestimonialsPage from './pages/TestimonialsPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ourservices",
    element: <OurServicesPage />,
  },
  {
    path: "/contactus",
    element: <ContactUsPage />,
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />,
  },
  {
    path: "/howitworks",
    element: <HowitWorksPage />,
  },
  {
    path: "/resources",
    element: <ResourcesPage />,
  },
  {
    path: "/testimonials",
    element: <TestimonialsPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);