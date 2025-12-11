import React, { useState } from "react";
import {
  BsCheckCircle,
  BsLightning,
  BsHouse,
  BsCalendar,
  BsStickies,
  BsBoxSeam,
  BsBarChart,
  BsPeople,
  BsPersonBadge,
  BsGear,
  BsLifePreserver
} from "react-icons/bs";

import Logo from '../assets/images/logo.png'


import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>


      {/* Header */}
      <div className="sidebar-header">

        <NavLink to="/dashboard" className="sidebar-link">
          {isOpen && <img src={Logo} classNameimg-fluid />}
        </NavLink>


        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "«" : "»"}
        </button>
      </div>


      <div className="sidebar-section">
        <ul>

          <li>
            <NavLink to="/tasks" className="sidebar-link">
              <BsCheckCircle />
              {isOpen && <span>Tasks</span>}
              {isOpen && <span className="badge">16</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/activities" className="sidebar-link">
              <BsLightning />
              {isOpen && <span>Activities</span>}
            </NavLink>
          </li>

        </ul>
      </div>


      {/* MAIN SECTION TITLE */}
      {isOpen && <div className="sidebar-section title">
        <h4>Main</h4></div>}

      {/* MAIN SECTION LINKS */}
      <div className="sidebar-section">
        <ul>

          <li>
            <NavLink to="/dashboard" className="sidebar-link">
              <BsHouse />
              {isOpen && <span>Dashboard</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/schedule" className="sidebar-link">
              <BsCalendar />
              {isOpen && <span>Schedule</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/notes" className="sidebar-link">
              <BsStickies />
              {isOpen && <span>Notes</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className="sidebar-link">
              <BsBoxSeam />
              {isOpen && <span>Products</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/reports" className="sidebar-link">
              <BsBarChart />
              {isOpen && <span>Reports</span>}
            </NavLink>
          </li>

        </ul>
      </div>


      {/* RECORDS */}
      {isOpen && <div className="sidebar-section title">
        <h4>RECORDS</h4></div>}
      <div className="sidebar-section">
        <ul>

          <li>
            <NavLink to="/team" className="sidebar-link">
              <BsPeople />
              {isOpen && <span>Team</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/clients" className="sidebar-link">
              <BsPersonBadge />
              {isOpen && <span>Clients</span>}
            </NavLink>
          </li>

        </ul>
      </div>


      {/* SETTINGS */}
      <div className="sidebar-section">
        <ul>

          <li>
            <NavLink to="/settings" className="sidebar-link">
              <BsGear />
              {isOpen && <span>Settings</span>}
            </NavLink>
          </li>

          <li>
            <NavLink to="/support" className="sidebar-link">
              <BsLifePreserver />
              {isOpen && <span>Support</span>}
            </NavLink>
          </li>

        </ul>
      </div>


    </div>
  );
};

export default Sidebar;
