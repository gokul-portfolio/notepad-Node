import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

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
const MainLayout = lazy(() => import("./layouts/MainLayout"));

const App = () => {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>}>
      <Routes>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/" element={<MainLayout />}>

          {/* Dashboard / Main */}
          <Route index element={<Dashboard />} />
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

          {/* Team */}
          <Route path="team" element={<Team />} />

        </Route>


        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </Suspense>
  );
};

export default App;
