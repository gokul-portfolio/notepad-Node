import React from "react";
import { Container, Dropdown, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { tasksData } from "../data/taskData"
import { FaSearch, FaCalendarAlt, FaSort, FaPlusCircle } from "react-icons/fa";
import {
  BsFilterSquare,
  BsExclamationCircle,
} from "react-icons/bs";

import TaskCard from "../components/task/TaskCard";

const HighPriority = () => {

  const highPriorityTasks = tasksData.filter(task => task.priority === "high");

  return (
    <Container>
      <div className="today-task-wrap">
        {/* Header */}
        <div className="today-task-header d-flex justify-content-between align-items-center mb-4">
          <h2 className="main-head ">
            High Priority Tasks
          </h2>
        </div>

        <div className="top-bar-task d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div className="left-controls d-flex flex-wrap align-items-center gap-2">
            <div className="search-wrapper d-flex align-items-center gap-2">
              <FaSearch className="search-icon" />
              <Form.Control type="text" placeholder="Search tasks..." className="search-bar" />
            </div>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="priority-filter">
                <BsFilterSquare /> Priority
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item data-filter="all">All</Dropdown.Item>
                <Dropdown.Item data-filter="high">
                  <BsExclamationCircle /> High
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

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
        <div className="today-task-content mt-3">
          {highPriorityTasks.length > 0 ? (
            highPriorityTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <p className="text-center mt-4">No high priority tasks found.</p>
          )}
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

export default HighPriority;
