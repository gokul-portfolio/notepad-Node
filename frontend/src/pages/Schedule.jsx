import React, { useState } from "react";
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

const CreateNotes = () => {
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      category: "",
      priority: "medium",
      tags: "",
      startDate: "",
      deadline: "",
      status: "pending",
      assignedTo: "",
      notify: false,
      attachment: null,
    });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Data:", formData);
    // Here you can send data to API or backend
  };

  return (
    <div className="schedule-inner">
      <Container>
        <div className="schedule-wrap mb-4">
          <h2 className="main-head">Schedule Task</h2>
        </div>

        <div className="form-wrap  rounded ">
          <Form onSubmit={handleSubmit}>
            {/* Title & Category */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="title">
                  <Form.Label>
                    <BsType className="me-2" /> Task Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter task title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="category">
                  <Form.Label>
                    <BsFolder className="me-2" /> Category
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Description */}
            <Form.Group controlId="description" className="mb-3">
              <Form.Label>
                <BsJournalText className="me-2" /> Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Task description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Priority, Status, Start & Deadline */}
            <Row className="mb-3">
              <Col md={3}>
                <Form.Group controlId="priority">
                  <Form.Label>
                    <BsFlag className="me-2" /> Priority
                  </Form.Label>
                  <Form.Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId="status">
                  <Form.Label>
                    <BsEye className="me-2" /> Status
                  </Form.Label>
                  <Form.Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId="startDate">
                  <Form.Label>
                    <BsCalendar className="me-2" /> Start Date
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group controlId="deadline">
                  <Form.Label>
                    <BsBell className="me-2" /> Deadline
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Assigned Member & Tags */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="assignedTo">
                  <Form.Label>
                    <BsPerson className="me-2" /> Assign To
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Employee name"
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="tags">
                  <Form.Label>
                    <BsTags className="me-2" /> Tags
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add tags (comma separated)"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Notify Employee & Attachment */}
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="attachment">
                  <Form.Label>
                    <BsPaperclip className="me-2" /> Attachment
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="attachment"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="notify">
                  <Form.Check
                    type="checkbox"
                    label="Notify Employee"
                    name="notify"
                    checked={formData.notify}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button type="submit" className="form-btn">
              Create Task
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CreateNotes;
