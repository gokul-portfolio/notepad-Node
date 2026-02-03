import React, { useState } from "react";
import { useContext } from "react";
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

import { UserContext } from "../context/UserContext";



import Logo from "../assets/images/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const { logoutUser } = useContext(UserContext);


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
            <NavLink to="/createtasks" className="sidebar-link">
              <BsStickies /> {isOpen && <span>Create Task</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className="sidebar-link">
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

      {/* SETTINGS / SUPPORT */}
      <div className="sidebar-section">
        {isOpen && <div className="sidebar-section-title"><h4>Settings</h4></div>}
        <ul>


          <li>

            <NavLink onClick={() => {
              logoutUser();
              window.location.href = "/signin";

            }}
              className="logout-icon sidebar-link">

              <BsBoxArrowRight /> {isOpen && <span>Logout</span>}

            </NavLink>

          </li>

        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
