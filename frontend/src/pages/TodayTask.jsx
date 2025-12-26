import React from "react";
import { Container, Dropdown, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaSearch, FaCalendarAlt, FaSort, FaPlusCircle } from "react-icons/fa";

import {
  BsFilterSquare,
  BsExclamationCircle,
  BsLightningCharge,
  BsArrowDownCircle,
  BsPaperclip,
  BsBell,
  BsPencil,
  BsTrash,
  BsFunnel,
  BsListTask,
  BsCheckCircle,
  BsFolder,
  BsFlag,
  BsCalendarEvent,
  BsClock
} from "react-icons/bs";


const tasksData = [
  {
    id: 1,
    title: "Fix Production Bug",
    description:
      "Investigate the urgent issue reported in production. Identify the root cause, implement a fix, and deploy it safely. Make sure to test thoroughly and notify the QA team once resolved.",
    category: "Work",
    priority: "high",
    status: "pending",
    time: "2:00 PM",
    date: "Today",
    tags: ["Bug", "Critical"],
  },
  {
    id: 2,
    title: "Design Today Task UI",
    description:
      "Create a responsive and clean UI layout for the 'Today Tasks' page. Include task cards, priority indicators, filters, and actions buttons. Ensure consistency with the existing design system.",
    category: "UI",
    priority: "medium",
    status: "pending",
    time: "6:00 PM",
    date: "Today",
    tags: ["UI", "Frontend"],
  },
  {
    id: 3,
    title: "Refactor CSS",
    description:
      "Review all existing CSS files and remove unused or redundant styles. Organize stylesheets for better maintainability. Implement consistent naming conventions and optimize for responsiveness.",
    category: "Dev",
    priority: "low",
    status: "pending",
    time: "Anytime",
    date: "Today",
    tags: ["Cleanup"],
  },
  {
    id: 4,
    title: "Team Meeting",
    description:
      "Conduct the daily standup meeting with the development team. Discuss completed tasks, current blockers, upcoming priorities, and ensure everyone is aligned on project goals.",
    category: "Meeting",
    priority: "medium",
    status: "completed",
    time: "10:00 AM",
    date: "Today",
    tags: ["Scrum"],
  },
];


const AllTask = () => {
  return (
    <Container>
      <div className="today-task-wrap">
        {/* Header */}
        <div className="today-task-header d-flex justify-content-between align-items-center mb-4">
          <h2 className="main-head">Today Task</h2>

          {/* Filter Dropdown */}
          {/* <Dropdown className="task-filter-dropdown">
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="filter-btn">
              <BsFunnel /> <span className="filter-text">All</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-end filter-menu">
              <Dropdown.Item href="#" className="active" data-filter="all">
                <BsListTask /> All
              </Dropdown.Item>
              <Dropdown.Item href="#" data-filter="high">
                <BsExclamationCircle style={{ color: "#dc2626" }} /> High
              </Dropdown.Item>
              <Dropdown.Item href="#" data-filter="medium">
                <BsLightningCharge style={{ color: "#facc15" }} /> Medium
              </Dropdown.Item>
              <Dropdown.Item href="#" data-filter="low">
                <BsArrowDownCircle style={{ color: "#22c55e" }} /> Low
              </Dropdown.Item>
              <Dropdown.Item href="#" data-filter="done">
                <BsCheckCircle style={{ color: "#1F4339" }} /> Done
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>


        <div className="top-bar-task d-flex flex-wrap justify-content-between align-items-center gap-2">

          {/* Left Controls */}
          <div className="left-controls d-flex flex-wrap align-items-center gap-2">
            {/* Search Bar with Icon */}
            <div className="search-wrapper d-flex align-items-center gap-2">
              <FaSearch className="search-icon" />
              <Form.Control type="text" placeholder="Search tasks..." className="search-bar" />
            </div>

            {/* Priority Filter */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="priority-filter">
                <BsFilterSquare /> Priority
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item data-filter="all">All</Dropdown.Item>
                <Dropdown.Item data-filter="high"><BsExclamationCircle /> High</Dropdown.Item>
                <Dropdown.Item data-filter="medium"><BsLightningCharge /> Medium</Dropdown.Item>
                <Dropdown.Item data-filter="low"><BsArrowDownCircle /> Low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Date Filter */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="date-filter">
                <FaCalendarAlt /> This Week
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Today</Dropdown.Item>
                <Dropdown.Item>This Week</Dropdown.Item>
                <Dropdown.Item>This Month</Dropdown.Item>
                <Dropdown.Item>Custom Range</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Right Controls */}
          <div className="right-controls d-flex gap-2 align-items-center flex-wrap">
            {/* Sort Dropdown */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="sort-tasks">
                <FaSort /> Sort By
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Priority</Dropdown.Item>
                <Dropdown.Item>Deadline</Dropdown.Item>
                <Dropdown.Item>Created Date</Dropdown.Item>
                <Dropdown.Item>Title</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Add Task Button */}
            <Button
              as={Link}
              to="/schedule"
              variant="primary"
              className="d-flex align-items-center gap-1"
            >
              <FaPlusCircle /> Add Task
            </Button>
          </div>

        </div>



        {/* Task Cards */}
        <div className="today-task-content">
          {tasksData.map((task) => (
            <div
              key={task.id}
              className={`task-card priority-${task.priority} status-${task.status}`}
            >
              {/* Checkbox */}
              <div className="task-check">
                <input type="checkbox" defaultChecked={task.status === "completed"} />
              </div>

              {/* Task Body */}
              <div className="task-body">
                <div className="task-header">
                  <h4 className="task-title">{task.title}</h4>
                  <span className={`task-status ${task.status}`}>
                    {task.status === "completed" ? "Done" : "Pending"}
                  </span>
                </div>

                <p className="task-desc">{task.description}</p>

                {/* Task Meta */}
                <div className="task-meta mt-3">
                  <span>
                    <BsFolder /> {task.category}
                  </span>
                  <span>
                    <BsFlag /> {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                  <span>
                    <BsCalendarEvent /> {task.date}
                  </span>
                  <span>
                    <BsClock /> {task.time}
                  </span>
                </div>

                {/* Task Tags */}
                <div className="task-tags mt-3">
                  {task.tags.map((tag, index) => (
                    <span className="tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="task-actions d-flex flex-column gap-2">
                <Button variant="light" size="sm" title="Attachment">
                  <BsPaperclip />
                </Button>
                <Button variant="light" size="sm" title="Notify">
                  <BsBell />
                </Button>
                <Button variant="light" size="sm" title="Edit">
                  <BsPencil />
                </Button>
                <Button variant="light" size="sm" title="Delete">
                  <BsTrash />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Task Button */}
        <div className="d-flex justify-content-end align-items-center mt-4">

          <Link to="/createnotes" className="create-btn mt-3 d-inline-flex align-items-center gap-2">
            <FaPlusCircle /> Create New Task
          </Link>

        </div>

      </div>
    </Container>
  );
};

export default AllTask;
