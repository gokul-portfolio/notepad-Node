import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  BsType,
  BsJournalText,
  BsFolder,
  BsFlag,
  BsTags,
  BsBell,
  BsCalendar,
  BsEye,
  BsPerson,
  BsPaperclip,
} from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

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

  // -----------------------------
  // FETCH TASK
  // -----------------------------
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await api.get(`/tasks/${id}`);

        setFormData({
          title: data.title || "",
          description: data.description || "",
          category: data.category || "Others",
          priority: data.priority || "Medium",
          status: data.status || "Pending",
          startDate: data.startDate ? data.startDate.split("T")[0] : "",
          deadline: data.deadline ? data.deadline.split("T")[0] : "",
          assignedTo: data.assignedTo?._id || "",
          tags: data.tags?.join(",") || "",
          notify: Boolean(data.notify),
          attachment: null,
        });
      } catch (err) {
        toast.error("Failed to load task");
        navigate("/alltasks");
      } finally {
        setFetching(false);
      }
    };

    fetchTask();
  }, [id, navigate]);

  // -----------------------------
  // HANDLE CHANGE
  // -----------------------------
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  // -----------------------------
  // UPDATE TASK
  // -----------------------------
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
    data.append("title", formData.title.trim());
    data.append("description", formData.description.trim());
    data.append("category", formData.category);
    data.append("priority", formData.priority);
    data.append("status", formData.status);
    data.append("deadline", formData.deadline);
    data.append("notify", String(formData.notify));

    if (formData.startDate) {
      data.append("startDate", formData.startDate);
    }

    if (formData.tags.trim()) {
      data.append("tags", formData.tags);
    }

    if (formData.assignedTo.trim()) {
      data.append("assignedTo", formData.assignedTo);
    }

    if (formData.attachment) {
      data.append("attachment", formData.attachment);
    }

    try {
      setLoading(true);
      await api.put(`/tasks/${id}`, data);
      toast.success("Task updated successfully");
      navigate("/alltasks");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <p style={{ textAlign: "center" }}>Loading task...</p>;
  }

  return (
    <div className="schedule-inner">
      <Container>
        <h2 className="main-head mb-4">Edit Task</h2>

        <div className="form-wrap rounded">
          <Form onSubmit={handleSubmit} encType="multipart/form-data">

            {/* TITLE & CATEGORY */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Label><BsType /> Task Title *</Form.Label>
                <Form.Control
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Col>

              <Col md={6}>
                <Form.Label><BsFolder /> Category</Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Others">Others</option>
                </Form.Select>
              </Col>
            </Row>

            {/* DESCRIPTION */}
            <Form.Group className="mb-3">
              <Form.Label><BsJournalText /> Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* PRIORITY / STATUS / DATES */}
            <Row className="mb-3">
              <Col md={3}>
                <Form.Label><BsFlag /> Priority</Form.Label>
                <Form.Select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Form.Select>
              </Col>

              <Col md={3}>
                <Form.Label><BsEye /> Status</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </Form.Select>
              </Col>

              <Col md={3}>
                <Form.Label><BsCalendar /> Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </Col>

              <Col md={3}>
                <Form.Label><BsBell /> Deadline *</Form.Label>
                <Form.Control
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            {/* ASSIGNED + TAGS */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Label><BsPerson /> Assign To (Admin)</Form.Label>
                <Form.Control
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                />
              </Col>

              <Col md={6}>
                <Form.Label><BsTags /> Tags</Form.Label>
                <Form.Control
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            {/* ATTACHMENT */}
            <Form.Group className="mb-3">
              <Form.Label><BsPaperclip /> Replace Attachment</Form.Label>
              <Form.Control
                type="file"
                name="attachment"
                onChange={handleChange}
              />
            </Form.Group>

            {/* NOTIFY */}
            <Form.Check
              className="mb-3"
              type="checkbox"
              label="Notify Employee"
              name="notify"
              checked={formData.notify}
              onChange={handleChange}
            />

            <Button type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Task"}
            </Button>

          </Form>
        </div>
      </Container>
    </div>
  );
};

export default EditTask;
