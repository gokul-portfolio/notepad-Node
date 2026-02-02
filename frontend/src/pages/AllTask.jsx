import React, { useEffect, useState } from "react";
import { Container, Dropdown, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";
import TaskCard from "../components/task/TaskCard";
import { useNavigate } from "react-router-dom";
import {
  BsFilterSquare,
  BsExclamationCircle,
  BsLightningCharge,
  BsArrowDownCircle,
} from "react-icons/bs";

import {
  FaPlusCircle,
  FaSearch,
  FaCalendarAlt,
  FaSort,
} from "react-icons/fa";

const AllTask = () => {




  const navigate = useNavigate();

  const handleEdit = (task) => {
    navigate(`/tasks/edit/${task._id}`);
  };

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("all");


  const handleDelete = (taskId) => {
    toast.info(
      ({ closeToast }) => (
        <div>
          <p style={{ marginBottom: "10px" }}>
            Are you sure you want to delete this task?
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              size="sm"
              variant="danger"
              onClick={async () => {
                try {
                  await api.delete(`/tasks/${taskId}`);

                  setTasks((prev) =>
                    prev.filter((t) => t._id !== taskId)
                  );

                  toast.success("Task deleted successfully");
                } catch (error) {
                  toast.error(
                    error.response?.data?.message ||
                    "Failed to delete task"
                  );
                }

                closeToast();
              }}
            >
              Yes
            </Button>

            <Button
              size="sm"
              variant="secondary"
              onClick={closeToast}
            >
              No
            </Button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
  };


  // 🔹 FETCH TASKS FROM BACKEND
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await api.get("/tasks");
        setTasks(data);
      } catch (error) {
        toast.error("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // 🔹 FILTER LOGIC
  const filteredTasks = tasks.filter((task) => {
    const matchSearch =
      task.title.toLowerCase().includes(search.toLowerCase());

    const matchPriority =
      priority === "all" || task.priority === priority;

    return matchSearch && matchPriority;
  });

  return (
    <Container>
      <div className="today-task-wrap">

        {/* HEADER */}
        <div className="today-task-header d-flex justify-content-between align-items-center mb-1">
          <h2 className="main-head">All Tasks</h2>
        </div>

        {/* TOP BAR */}
        <div className="top-bar-task d-flex flex-wrap justify-content-between align-items-center gap-2">

          {/* LEFT */}
          <div className="left-controls d-flex flex-wrap align-items-center gap-2">

            {/* SEARCH */}
            <div className="search-wrapper d-flex align-items-center gap-2">
              <FaSearch />
              <Form.Control
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* PRIORITY FILTER */}
            <Dropdown>
              <Dropdown.Toggle variant="light">
                <BsFilterSquare /> Priority
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setPriority("all")}>
                  All
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPriority("High")}>
                  <BsExclamationCircle /> High
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPriority("Medium")}>
                  <BsLightningCharge /> Medium
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPriority("Low")}>
                  <BsArrowDownCircle /> Low
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* DATE FILTER UI (later backend logic) */}
            <Dropdown>
              <Dropdown.Toggle variant="light">
                <FaCalendarAlt /> This Week
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Today</Dropdown.Item>
                <Dropdown.Item>This Week</Dropdown.Item>
                <Dropdown.Item>This Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* RIGHT */}
          <div className="right-controls d-flex gap-2 align-items-center flex-wrap">
            <Dropdown>
              <Dropdown.Toggle variant="light">
                <FaSort /> Sort By
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Priority</Dropdown.Item>
                <Dropdown.Item>Deadline</Dropdown.Item>
                <Dropdown.Item>Created Date</Dropdown.Item>
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

        {/* TASK LIST */}
        <div className="today-task-content mt-5">
          {loading ? (
            <p>Loading tasks...</p>
          ) : filteredTasks.length === 0 ? (
            <p>No tasks found</p>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default AllTask;
