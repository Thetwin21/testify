import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/";
import Profile from "./pages/profile";

import NotFound from "./pages/Error/NotFound";
import Activities from "./pages/Activities";
import Earnings from "./pages/Earnings";
import Verification from "./pages/Verification";
import Settings from "./pages/Settings";
import AdminAuth from "./features/Admin/AdminAuth";
import AuthUser from "./pages/auth/AuthUser";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthUser />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminAuth />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
