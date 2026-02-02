import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthCheck from "./components/AuthCheck";
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

const Schedule = lazy(() => import("./pages/Schedule"));
const AllTask = lazy(() => import("./pages/AllTask"));
const TodayTask = lazy(() => import("./pages/TodoNotes"));
const HighPriority = lazy(() => import("./pages/HighPriorityTask"));

const Team = lazy(() => import("./pages/Team"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));




const App = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      {/* Toast – render once */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
        theme="light"
      />

      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            Loading...
          </div>
        }
      >
        <Routes>

          {/* Root redirect */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />

          {/* Public routes */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔐 Protected routes */}
          <Route
            element={
              <ProtectedRoute>
                <AuthCheck>
                  <MainLayout />
                </AuthCheck>
              </ProtectedRoute>
            }
          >
            {/* Dashboard */}
            <Route path="dashboard" element={<Dashboard />} />

            {/* Notes */}
            <Route path="notes" element={<Notes />} />
            <Route path="notes/create" element={<CreateNotes />} />
            <Route path="notes/edit/:id" element={<EditNotes />} />

            <Route path="tasks/edit/:id" element={<EditTask />} />

            {/* Tasks */}
            <Route path="schedule" element={<Schedule />} />
            <Route path="todaytasks" element={<TodayTask />} />
            <Route path="alltasks" element={<AllTask />} />
            <Route path="highpriority" element={<HighPriority />} />

            {/* Team */}
            <Route path="team" element={<Team />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Suspense>
    </>
  );
};

export default App;
