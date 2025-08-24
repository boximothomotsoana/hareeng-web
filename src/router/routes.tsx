import { lazy } from "react";

import MasterLayout from "@/layouts/MasterLayout";
import AirportServices from "@/pages/aboutUs/AirportServices";
import Careers from "@/pages/aboutUs/Careers";
import Cities from "@/pages/aboutUs/CitiesWeServe";
import ForCommunities from "@/pages/aboutUs/Forcommunities";
import ForInvestors from "@/pages/aboutUs/ForInvestors";
import Updates from "@/pages/aboutUs/Updates";
import WhoWeAre from "@/pages/aboutUs/WhoWeAre";
import BecomeCourierPage from "@/pages/BecomeCourierPage";
import BecomeDeliveryDriver from "@/pages/BecomeDeliveryDriver";
import BecomeDriver from "@/pages/BecomeDriver";
import BecomeScooterDriver from "@/pages/BecomeScooterDriver";
import ComingSoon from "@/pages/ComingSoon";
import Eats from "@/pages/Eats";
import EmergencyReport from "@/pages/EmergencyReport";
import FAQ from "@/pages/FAQ";
import CookiePreferences from "@/pages/legal/CookiePreferences";
import DataProtection from "@/pages/legal/DataProtection";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsOfUse from "@/pages/legal/TermsOfUse";
import RegisterFleet from "@/pages/RegisterFleet";
import RegisterRestaurant from "@/pages/RegisterRestaurant";
import ReportIssue from "@/pages/ReportIssue";
import ReportVehicle from "@/pages/ReportVehicle";
import Restaurants from "@/pages/Restaurants";
import RiderSafety from "@/pages/RiderSafety";
import Rides from "@/pages/Rides";
import Scooters from "@/pages/Scooters";
import ScooterSafety from "@/pages/ScooterSafety";
import Page404 from "@/pages/Status/Page404";
import ContactUs from "@/pages/ContactUs";
import CityRequest from "@/pages/CityRequest";
import { type AppRouteObject } from "@/router/interface";
// Lazy load the routes to improve performance
const Home = lazy(() => import("@/pages/Home"));

const routes: AppRouteObject[] = [
  {
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
    element: <MasterLayout />,
    path: "/",
  },
  {
    element: <BecomeCourierPage />,
    path: "partners/courier-registration",
  },
  {
    element: <RegisterRestaurant />,
    path: "partners/restaurant-registration",
  },
  {
    element: <RegisterFleet />,
    path: "partners/fleet-registration",
  },
  {
    element: <RiderSafety />,
    path: "safety/rider-safety",
  },
  {
    element: <ScooterSafety />,
    path: "safety/scooter-safety",
  },
  {
    element: <BecomeDriver />,
    path: "driver/vehicle-driver-signup",
  },
  {
    element: <BecomeScooterDriver />,
    path: "driver/scooter-driver-signup",
  },
  {
    element: <ReportVehicle />,
    path: "support/report-vehicle",
  },
  {
    element: <FAQ />,
    path: "support/faq",
  },
  {
    element: <EmergencyReport />,
    path: "support/emergency-report",
  },
  {
    element: <ReportIssue />,
    path: "support/report-issue",
  },
  {
    element: <BecomeDeliveryDriver />,
    path: "driver/delivery-signup",
  },
  {
    element: <Rides />,
    path: "pages/catch-rides",
  },
  {
    element: <Scooters />,
    path: "pages/find-scooters",
  },
  {
    element: <Restaurants />,
    path: "pages/restaurants",
  },
  {
    element: <Eats />,
    path: "pages/eats",
  },
  {
    element: <WhoWeAre />,
    path: "pages/about-us/who-we-are",
  },
  {
    element: <Careers />,
    path: "pages/about-us/careers",
  },
  {
    element: <Updates />,
    path: "pages/about-us/updates",
  },
  {
    element: <ForInvestors />,
    path: "pages/about-us/for-investors",
  },
  {
    element: <ForCommunities />,
    path: "pages/about-us/for-communities",
  },
  {
    element: <Cities />,
    path: "pages/about-us/cities-we-serve",
  },
  {
    element: <AirportServices />,
    path: "pages/about-us/airport-services",
  },
  {
    element: <TermsOfUse />,
    path: "pages/legal/terms-of-use",
  },
  {
    element: <PrivacyPolicy />,
    path: "pages/legal/privacy-policy",
  },
  {
    element: <CookiePreferences />,
    path: "pages/legal/cookie-preferences",
  },
  {
    element: <DataProtection />,
    path: "pages/legal/data-protection",
  },
  {
    element: <ComingSoon />,
    path: "coming-soon",
  },
  {
    element: <Page404 />,
    path: "/*",
  },
  {
    element: <ContactUs />,
    path: "/contact-us",
  },
  {
    element: <CityRequest />,
    path: "/pages/city-request",
  },
];

export default routes;
