import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import MainLayout from "./layouts/MainLayout";
import CreateNotes from "./pages/CreateNotes";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Routes>

      {/* Pages WITHOUT Header/Footer/Sidebar */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />


      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />          
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="notes" element={<Notes />} />
        <Route path="createnates" element={<CreateNotes />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />


    </Routes>
  );
};

export default App;
