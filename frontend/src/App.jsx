import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthCheck from "./components/AuthCheck";
import AdminRoute from "./routes/AdminRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy-loaded pages
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const Notes = lazy(() => import("./pages/Notes"));
const CreateNotes = lazy(() => import("./pages/CreateNotes"));
const EditNotes = lazy(() => import("./pages/EditNotes"));
const EditTask = lazy(() => import("./pages/EditTask"));

const CreateTasks = lazy(() => import("./pages/CreateTask"));
const Tasks = lazy(() => import("./pages/Task"));
const HighPriority = lazy(() => import("./pages/HighPriorityTask"));
const Team = lazy(() => import("./pages/Team"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Unauthorized = lazy(() => import("./pages/Unauthorized"));
const Schedule = lazy(() => import("./pages/Schedule"));

const App = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>

          {/* Root */}
          <Route
            path="/"
            element={
              isLoggedIn
                ? <Navigate to="/dashboard" replace />
                : <Navigate to="/signin" replace />
            }
          />

          {/* Public */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* 🔐 AUTHENTICATED */}
          <Route
            element={
              <ProtectedRoute>
                <AuthCheck>
                  <MainLayout />
                </AuthCheck>
              </ProtectedRoute>
            }
          >
            {/* Common */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="notes" element={<Notes />} />
            <Route path="createnotes" element={<CreateNotes />} />
            <Route path="notes/edit/:id" element={<EditNotes />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="createtasks" element={<CreateTasks />} />
            <Route path="tasks/edit/:id" element={<EditTask />} />
            <Route path="highpriority" element={<HighPriority />} />
            <Route path="team" element={<Team />} />

            {/* 👮 ADMIN ONLY */}
            <Route element={<AdminRoute />}>
              <Route path="schedule" element={<Schedule />} />
            </Route>

          </Route>

          {/* 404 */}
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Suspense>
    </>
  );
};

export default App;
