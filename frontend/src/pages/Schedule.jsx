import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";
import { UserContext } from "../context/UserContext";
import ScheduleForm from "../components/schedule/ScheduleForm";

const CreateTask = () => {
  const navigate = useNavigate();
  const { createTask, user } = useContext(UserContext);

  // 🔐 Safety
  if (!user) return null;
  if (user.role !== "admin") return null;

  const [loading, setLoading] = useState(false);

  // 🔹 API driven data
  const [designations, setDesignations] = useState([]);
  const [members, setMembers] = useState([]);

  // ✅ FULL formData (TaskForm expects this)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Others",
    priority: "Medium",
    status: "Pending",
    startDate: "",
    deadline: "",
    designation: "",
    assignedTo: "",
    tags: "",
    notify: false,
    attachment: null,
  });

  // 🔹 Load designations from API
  useEffect(() => {
    const fetchDesignations = async () => {
      try {
        const res = await api.get("/users/designations");
        setDesignations(res.data);
      } catch (err) {
        toast.error("Failed to load designations");
      }
    };

    fetchDesignations();
  }, []);

  // 🔹 Load users when designation changes
  useEffect(() => {
    if (!formData.designation) {
      setMembers([]);
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await api.get(
          `/users?designation=${formData.designation}`
        );
        setMembers(res.data);
      } catch (err) {
        toast.error("Failed to load users");
      }
    };

    fetchUsers();
  }, [formData.designation]);

  // 🔹 Change handler
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "file"
          ? files[0]
          : type === "checkbox"
          ? checked
          : value,
      // 🔥 designation change → reset assigned user
      ...(name === "designation" && { assignedTo: "" }),
    }));
  };

  // 🔹 Submit
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

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        data.append(key, value);
      }
    });

    setLoading(true);
    const success = await createTask(data);
    setLoading(false);

    if (success) {
      toast.success("Task created successfully");
      navigate("/tasks");
    }
  };

  return (
    <div className="schedule-inner">
      <Container>
        <h2 className="main-head mb-4">Schedule Task</h2>

        <div className="form-wrap rounded">
          {/* ❌ ScheduleForm → ✅ TaskForm */}
          <ScheduleForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitText="Schedule Task"
            isAdmin={true}
            designations={designations}
            members={members}
          />
        </div>
      </Container>
    </div>
  );
};

export default CreateTask;
