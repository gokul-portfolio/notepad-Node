import React from "react";
import { Container, Dropdown, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { tasksData } from "../data/taskData"
import TaskCard from "../components/task/TaskCard";


// React Icons
import {
  BsPaperclip,
  BsBell,
  BsPencil,
  BsTrash,
  BsFunnel,
  BsListTask,
  BsExclamationCircle,
  BsLightningCharge,
  BsArrowDownCircle,
  BsCheckCircle,
  BsFolder,
  BsFlag,
  BsCalendarEvent,
  BsClock,
  BsFilterSquare
} from "react-icons/bs";

import {
  FaPlusCircle,
  FaSearch,
  FaCalendarAlt,
  FaSort
} from "react-icons/fa";

const AllTask = () => {
  return (
    <Container>
      <div className="today-task-wrap">

        {/* Header */}
        <div className="today-task-header d-flex justify-content-between align-items-center mb-1">
          <h2 className="main-head">All Task</h2>
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
        <div className="today-task-content mt-5">
          {tasksData.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">

          <Link to="/createnotes" className="create-btn mt-3 d-inline-flex align-items-center gap-2">
            <FaPlusCircle /> Create New Task
          </Link>

        </div>

      </div>
    </Container>
  )
}

export default AllTask