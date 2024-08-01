import React from "react";
import ForgetPassword from "../pages/auth/forget-password";
import SignUp from "../pages/auth/sign-up";
import Dashboard from "../pages/main/dashboard";
import UserDetail from "../pages/main/details/user_Detail";
import Notification from "../pages/notification";
import DocPreview from "../pages/main/preview";
import Profile from "../pages/main/profile";
import Pricing from "../pages/pricing";
import Home from "../pages/home";
import ResetPassword from "../pages/auth/forget-password/reset-password";
import AboutUs from "../pages/about-us/AboutUs";
import Memories from "../pages/memories";
import CareersPage from "../pages/career-page";
import ContactUs from "../pages/contact-us";
import AccessibilityReport from "../pages/accessibility-report";
import MissionVision from "../pages/mission-vision";
import ConcernReport from "../pages/report-concern";

const publicRoutesList = [
  { path: "/", element: <Home /> },
  { path: "/forget_password", element: <ForgetPassword /> },
  { path: "/sign_up", element: <SignUp /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: `/user_details/:id`, element: <UserDetail /> },
  { path: `/notification`, element: <Notification /> },
  { path: `/preview/:id`, element: <DocPreview /> },
  { path: `/profile`, element: <Profile /> },
  { path: `/pricing`, element: <Pricing /> },
  { path: `/reset-password`, element: <ResetPassword /> },
  { path: `/about-us`, element: <AboutUs /> },
  { path: `/memories`, element: <Memories /> },
  { path: `/careers`, element: <CareersPage /> },
  { path: `/contact-us`, element: <ContactUs /> },
  { path: `/accessibility-report`, element: <AccessibilityReport /> },
  { path: `/mission-vision`, element: <MissionVision /> },
  { path: `/concern-report`, element: <ConcernReport /> },
];

const privateRoutesList = [
  // {path:"/*", element : <Home />}
];

export { publicRoutesList, privateRoutesList };
