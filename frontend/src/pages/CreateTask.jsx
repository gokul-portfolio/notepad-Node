import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import TaskForm from "../components/task/TaskForm";

const CreateTask = () => {
  const navigate = useNavigate();
  const { createTask } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Others",
    priority: "Medium",
    status: "Pending",
    startDate: "",
    deadline: "",
    assignedTo: "",
    tags: "",
    notify: false,
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]:
        type === "file"
          ? files[0]
          : type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!formData.deadline) {
      toast.error("Deadline is required");
      return;
    }

    // multipart/form-data
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== "") {
        data.append(key, formData[key]);
      }
    });

    setLoading(true);
    const success = await createTask(data);
    setLoading(false);

    if (success) {
      navigate("/tasks");
    }
  };

  return (
    <div className="schedule-inner">
      <Container>
        <h2 className="main-head mb-4">Create Task</h2>

        <div className="form-wrap rounded">
          <TaskForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitText="Create Task"
          />
        </div>
      </Container>
    </div>
  );
};

export default CreateTask;
