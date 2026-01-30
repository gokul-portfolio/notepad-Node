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
const TodayNotes = lazy(() => import("./pages/TodoNotes"));
const CompletedNotes = lazy(() => import("./pages/CompletedNotes"));
const PendingNotes = lazy(() => import("./pages/PendingNotes"));
const ProgressNotes = lazy(() => import("./pages/ProgressNotes"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Reports = lazy(() => import("./pages/Reports"));
const AllTask = lazy(() => import("./pages/AllTask"));
const HighPriority = lazy(() => import("./pages/HighPriorityTask"));
const TodayTask = lazy(() => import("./pages/TodayTask"));
const Team = lazy(() => import("./pages/Team"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const EditNotes = lazy(() => import("./pages/EditNotes"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));

const App = () => {
  return (
    <>

      {/* Toast container – only once */}
      < ToastContainer
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

          {/* Root decision */}
          <Route
            path="/"
            element={
              localStorage.getItem("token") ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/signin" />
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
            {/* Dashboard / Main */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="reports" element={<Reports />} />

            {/* Notes Pages */}
            <Route path="notes" element={<Notes />} />
            <Route path="createnotes" element={<CreateNotes />} />
            <Route path="todaynotes" element={<TodayNotes />} />
            <Route path="completednotes" element={<CompletedNotes />} />
            <Route path="pendingnotes" element={<PendingNotes />} />
            <Route path="progressnotes" element={<ProgressNotes />} />

            {/* Task Pages */}
            <Route path="todaytasks" element={<TodayTask />} />
            <Route path="alltasks" element={<AllTask />} />
            <Route path="highpriority" element={<HighPriority />} />


            <Route path="/notes/edit/:id" element={<EditNotes />} />



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
