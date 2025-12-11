import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";

import NotesPage from "../pages/NotesPage";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";

export default function AppRoutes() {
    return (
        <Routes>

            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<Signin />} />

            {/* Private Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="notes" element={<NotesPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="settings" element={<SettingsPage />} />
            </Route>

        </Routes>
    );
}
