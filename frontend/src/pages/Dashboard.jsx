import React, { useEffect } from "react";
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
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import NotesImg from "../assets/images/home/notes.png";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const {
    user,
    tasks,
    notes,
    getTasks,
    getNotes,
  } = useContext(UserContext);

  // 🔥 Load dashboard data
  useEffect(() => {
    if (user) {
      getTasks();
      getNotes();
    }
  }, [user, getTasks, getNotes]);

  /* =====================
     CALCULATIONS
  ===================== */
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === "completed").length;
  const pendingTasks = tasks.filter(t => t.status === "pending").length;
  const todayTasks = tasks.filter(t => t.isToday).slice(0, 3);

  const recentNotes = notes.slice(0, 2);

  return (
    <section className="dashboard-section">
      <div className="container-fluid">

        {/* TOP ROW */}
        <div className="row g-4">

          {/* WELCOME */}
          <div className="col-lg-8 d-flex">
            <div className="dashboard-card welcome-card d-flex justify-content-between align-items-center w-100">
              <div className="dashboard-welcome">
                <h3 className="main-header">Welcome back, {user?.name || "User"}</h3>
                <p>
                  Organize your day, focus on priorities, and move one step closer to your goals.
                </p>

                <div className="quick-actions">
                  <span><FaTasks /> Tasks</span>
                  <span><FaStickyNote /> Notes</span>
                  <span><FaCalendarDay /> Today</span>
                </div>

                <Link to="/createnotes" className="create-btn mt-3 me-2">
                  <FaPlusCircle /> Create New Notes
                </Link>
                <Link to="/createtasks" className="create-btn mt-3">
                  <FaPlusCircle /> Create New Task
                </Link>
              </div>

              <div className="icon-avatar">
                <img src={NotesImg} className="img-fluid" alt="notes" />
              </div>
            </div>
          </div>

          {/* REMINDERS */}
          <div className="col-lg-4 d-flex">
            <div className="dashboard-card notification-card w-100">
              <h6>Reminders</h6>

              <div className="notify-item yellow">
                <FaBell />
                <p>{todayTasks.length} tasks scheduled for today</p>
              </div>

              <div className="notify-item red">
                <FaExclamationCircle />
                <p>{pendingTasks} pending tasks</p>
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

          <div className="col-md-6 col-lg-3 d-flex">
            <NavLink to="/tasks" className="w-100 text-decoration-none">
              <div className="dashboard-card stat-card">
                <FaList className="star-icons text-success" />
                <p>Total Tasks</p>
                <h5>{totalTasks}</h5>
              </div>
            </NavLink>
          </div>

          <div className="col-md-6 col-lg-3 d-flex" >
            <NavLink to="/completedtasks" className="w-100 text-decoration-none">
              <div className="dashboard-card stat-card">
                <FaCheckCircle className="star-icons text-primary" />
                <p>Completed</p>
                <h5>{completedTasks}</h5>
              </div>
            </NavLink>
          </div>

          <div className="col-md-6 col-lg-3 d-flex">
            <NavLink to="/pendingtasks" className="w-100 text-decoration-none">
              <div className="dashboard-card stat-card">
                <FaHourglassHalf className="star-icons text-warning" />
                <p>Pending</p>
                <h5>{pendingTasks}</h5>
              </div>
            </NavLink>
          </div>

          <div className="col-md-6 col-lg-3 d-flex">
            <NavLink to="/notes" className="w-100 text-decoration-none">
              <div className="dashboard-card stat-card stat-card--danger">
                <FaBookOpen className="stat-icon" />
                <p className="stat-title">Notes</p>
                <h5 className="stat-count">{notes.length}</h5>
              </div>
            </NavLink>
          </div>

        </div>

        {/* TASKS & NOTES */}
        <div className="row g-4 mt-4">

          {/* TODAY TASKS */}
          <div className="col-lg-8">
            <div className="dashboard-card">
              <h6 className="mb-3">Today’s Tasks</h6>

              <ul className="task-list">
                {todayTasks.length ? (
                  todayTasks.map(task => (
                    <li key={task._id}>
                      <input type="checkbox" checked={task.status === "completed"} readOnly />
                      <span>{task.title}</span>
                      <small className="badge bg-warning">
                        {task.priority}
                      </small>
                    </li>
                  ))
                ) : (
                  <p>No tasks for today</p>
                )}
              </ul>
            </div>
          </div>

          {/* RECENT NOTES */}
          <div className="col-lg-4">
            <div className="dashboard-card">
              <h6 className="mb-3">Recent Notes</h6>

              {recentNotes.length ? (
                recentNotes.map(note => (
                  <div className="note-item" key={note._id}>
                    <h6>{note.title}</h6>
                    <p>{note.description.slice(0, 60)}...</p>
                  </div>
                ))
              ) : (
                <p>No recent notes</p>
              )}

              <Link to="/notes" className="view-all">
                View all notes →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dashboard;
