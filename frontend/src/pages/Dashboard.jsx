import React from "react";

import {
  FaTasks,
  FaStickyNote,
  FaCalendarDay,
  FaPlusCircle,
  FaBell,
  FaExclamationCircle,
  FaLightbulb,
  FaList,
  FaCheckCircle,
  FaHourglassHalf,
  FaBookOpen,
  FaPenFancy
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import Notes from "../assets/images/home/notes.png"

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <div className="container-fluid">

        {/* TOP ROW */}
        <div className="row g-4">

          {/* WELCOME */}
          <div className="col-lg-8 d-flex">
            <div className="dashboard-card welcome-card d-flex justify-content-between align-items-center w-100">
              <div className="dashboard-welcome">
                <h3>Welcome back, Gokul</h3>
                <p>Organize your day, focus on priorities, and move one step closer to your goals.</p>

                <div className="quick-actions">
                  <span>
                    <FaTasks /> Tasks
                  </span>
                  <span>
                    <FaStickyNote /> Notes
                  </span>
                  <span>
                    <FaCalendarDay /> Today
                  </span>
                </div>

                <Link to="/createnotes" className="create-btn mt-3">
                  <FaPlusCircle /> Create New Task
                </Link>
              </div>

              <div className="icon-avatar">
                <img src={Notes} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

          {/* REMINDERS */}
          <div className="col-lg-4 d-flex">
            <div className="dashboard-card notification-card w-100">
              <h6>Reminders</h6>

              <div className="notify-item yellow">
                <FaBell />
                <p>3 tasks scheduled for today</p>
              </div>

              <div className="notify-item red">
                <FaExclamationCircle />
                <p>2 overdue tasks</p>
              </div>

              <div className="notify-item blue">
                <FaLightbulb />
                <p>Update daily notes</p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="row g-4 mt-3">

          <div className="col-md-6 col-lg-3">
            <NavLink to="/notes"
              className="w-100 text-decoration-none">
              <div className="dashboard-card stat-card">
                <FaList className=" star-icons text-success" />
                <p>Total Tasks</p>
                <h5>128</h5>
              </div>
            </NavLink>

          </div>

          <div className="col-md-6 col-lg-3">
            <NavLink to="/completednotes"
              className="w-100 text-decoration-none">
              <div className="dashboard-card stat-card">
                <FaCheckCircle className=" star-icons text-primary" />
                <p>Completed</p>
                <h5>86</h5>
              </div>
            </NavLink>

          </div>

          <div className="col-md-6 col-lg-3">

            <NavLink to="/pendingnotes"
              className="w-100 text-decoration-none">
              <div className="dashboard-card stat-card">
                <FaHourglassHalf className=" star-icons text-warning" />
                <p>Pending</p>
                <h5>42</h5>
              </div>
            </NavLink>

          </div>

          <div className="col-md-6 col-lg-3 d-flex">
            <NavLink
              to="/progressnotes"
              className="w-100 text-decoration-none"
            >
              <div className="dashboard-card stat-card stat-card--danger">
                <FaBookOpen className="stat-icon" />
                <p className="stat-title">Progress</p>
                <h5 className="stat-count">64</h5>
              </div>
            </NavLink>
          </div>


        </div>

        {/* TASKS & NOTES */}
        <div className="row g-4 mt-4">

          {/* TODAY TASKS */}
          <div className="col-lg-8">
            <div className="dashboard-card  " >
              <h6 className="mb-3">Today’s Tasks</h6>

              <ul className="task-list">
                <li>
                  <input type="checkbox" />
                  <span>Finish dashboard UI</span>
                  <small className="badge bg-warning">High</small>
                </li>

                <li>
                  <input type="checkbox" defaultChecked />
                  <span>Review notes content</span>
                  <small className="badge bg-success">Done</small>
                </li>

                <li>
                  <input type="checkbox" />
                  <span>Plan tomorrow’s tasks</span>
                  <small className="badge bg-primary">Medium</small>
                </li>
              </ul>
            </div>
          </div>

          {/* RECENT NOTES */}
          <div className="col-lg-4">
            <div className="dashboard-card ">
              <h6 className="mb-3">Recent Notes</h6>

              <div className="note-item">
                <h6>Meeting Notes</h6>
                <p>Discussed UI improvements and reminders.</p>
              </div>

              <div className="note-item">
                <h6>Ideas</h6>
                <p>Dark mode, recurring tasks, cloud sync.</p>
              </div>

              <a href="#" className="view-all">
                View all notes →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dashboard;
