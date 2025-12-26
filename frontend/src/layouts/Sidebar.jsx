import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BsHouse,
  BsCalendar,
  BsStickies,
  BsBoxSeam,
  BsBarChart,
  BsPeople,
  BsPersonBadge,
  BsGear,
  BsLifePreserver,
  BsCheckCircle,
  BsLightning,
  BsBoxArrowInRight,
  BsBoxArrowRight
} from "react-icons/bs";


import Logo from "../assets/images/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>

      {/* Sidebar Header */}
      <div className="sidebar-header">
        <NavLink to="/dashboard" className="sidebar-link">
          {isOpen && <img src={Logo} alt="Logo" className="img-fluid" />}
        </NavLink>

        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "«" : "»"}
        </button>
      </div>

      {/* MAIN SECTION */}
      <div className="sidebar-section">
        {isOpen && <div className="sidebar-section-title"><h4>Main</h4></div>}
        <ul>
          <li>
            <NavLink to="/dashboard" className="sidebar-link">
              <BsHouse /> {isOpen && <span>Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/schedule" className="sidebar-link">
              <BsCalendar /> {isOpen && <span>Schedule</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" className="sidebar-link">
              <BsBarChart /> {isOpen && <span>Reports</span>}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* TASK SECTION */}
      <div className="sidebar-section">
        {isOpen && <div className="sidebar-section-title"><h4>Tasks</h4></div>}
        <ul>
          <li>
            <NavLink to="/todaytasks" className="sidebar-link">
              <BsCheckCircle /> {isOpen && <span>Today</span>}
              {isOpen && <span className="badge">16</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/alltasks" className="sidebar-link">
              <BsStickies /> {isOpen && <span>All Tasks</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/highpriority" className="sidebar-link">
              <BsLightning /> {isOpen && <span>High Priority</span>}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* NOTES SECTION */}
      <div className="sidebar-section">
        {isOpen && <div className="sidebar-section-title"><h4>Notes</h4></div>}
        <ul>
          <li>
            <NavLink to="/notes" className="sidebar-link">
              <BsStickies /> {isOpen && <span>All Notes</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/createnotes" className="sidebar-link">
              <BsBoxSeam /> {isOpen && <span>Create Note</span>}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* TEAM / RECORDS */}
      <div className="sidebar-section">
        {isOpen && <div className="sidebar-section-title"><h4>Team / Records</h4></div>}
        <ul>
          <li>
            <NavLink to="/team" className="sidebar-link">
              <BsPeople /> {isOpen && <span>Team</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/clients" className="sidebar-link">
              <BsPersonBadge /> {isOpen && <span>Clients</span>}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* SETTINGS / SUPPORT */}
      <div className="sidebar-section">
        {isOpen && <div className="sidebar-section-title"><h4>Settings</h4></div>}
        <ul>

          <li>
            <NavLink to="/settings" className="sidebar-link">
              <BsGear /> {isOpen && <span>Settings</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/support" className="sidebar-link">
              <BsLifePreserver /> {isOpen && <span>Support</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/signin" className="sidebar-link">
              <BsBoxArrowInRight /> {isOpen && <span>Signin</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/signup" className="sidebar-link">
              <BsBoxArrowRight /> {isOpen && <span>Signup</span>}
            </NavLink>
          </li>

        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
