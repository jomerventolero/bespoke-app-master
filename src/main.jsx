import React from "react"
import ReactDOM from "react-dom/client"
import App from './App'
import OurServicesPage  from './pages/OurServicesPage'
import ContactUsPage from './pages/ContactUsPage'
import AboutUsPage from "./pages/AboutUsPage"
import HowitWorksPage from "./pages/HowitWorksPage"
import ResourcesPage from './pages/ResourcesPage'
import TestimonialsPage from './pages/TestimonialsPage'
import JobsPage from "./pages/JobsPage"
import ErrorPage from "./pages/ErrorPage"
import ApplicantDetails from './components/ApplicantDetails'
import APICall from './components/APICall'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import WhyDoFreightPage from "./pages/WhyDoFreightPage"
import WhyShouldYouPage from "./pages/WhyShouldYouPage"

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
  },
  {
    path: "/jobs",
    element: <JobsPage />
  },
  {
    path: "/whydofreightforwardingcompaniesusebposervices",
    element: <WhyDoFreightPage />
  },
  {
    path: "/whyshouldyouchoosetohireabespokestaff",
    element: <WhyShouldYouPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
  {
    path: "/applicant",
    element: <ApplicantDetails />
  },
  {
    path: "/api",
    element: <APICall />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
