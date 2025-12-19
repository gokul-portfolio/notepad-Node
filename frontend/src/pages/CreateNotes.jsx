import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import {
  BsType,
  BsJournalText,
  BsFolder,
  BsFlag,
  BsTags,
  BsBell,
  BsPalette,
  BsEye
} from "react-icons/bs";

const CreateNotes = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "Low",
    status: "Active",
    visibility: "Private",
    tags: "",
    reminder: "",
    color: "#ffffff",
    description: ""
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Note title is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("✅ Form Submitted:", formData);
    alert("Note saved successfully!");
  };

  return (
    <div className="inner-application">
      <Container className="application-wrap">

        <div className="application-header mb-4">
          <h3>Create New Note</h3>
        </div>

        <Form className="application-form" onSubmit={handleSubmit}>
          <Row className="g-3">

            {/* TITLE */}
            <Col md={6}>
              <Form.Label>NOTE TITLE *</Form.Label>
              <div className="input-icon">
                <BsType />
                <Form.Control
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter note title"
                  isInvalid={!!errors.title}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Col>

            {/* CATEGORY */}
            <Col md={6}>
              <Form.Label>CATEGORY *</Form.Label>
              <div className="input-icon">
                <BsFolder />
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  isInvalid={!!errors.category}
                >
                  <option value="">Select category</option>
                  <option>Personal</option>
                  <option>Work</option>
                  <option>Study</option>
                  <option>Ideas</option>
                </Form.Select>
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Col>

            {/* PRIORITY */}
            <Col md={4}>
              <Form.Label>PRIORITY</Form.Label>
              <Form.Select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Form.Select>
            </Col>

            {/* STATUS */}
            <Col md={4}>
              <Form.Label>STATUS</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Active</option>
                <option>Completed</option>
                <option>Archived</option>
              </Form.Select>
            </Col>

            {/* VISIBILITY */}
            <Col md={4}>
              <Form.Label>VISIBILITY</Form.Label>
              <Form.Select
                name="visibility"
                value={formData.visibility}
                onChange={handleChange}
              >
                <option>Private</option>
                <option>Public</option>
              </Form.Select>
            </Col>

            {/* TAGS */}
            <Col md={6}>
              <Form.Label>TAGS</Form.Label>
              <Form.Control
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="react, meeting, office"
              />
            </Col>

            {/* REMINDER */}
            <Col md={6}>
              <Form.Label>REMINDER</Form.Label>
              <Form.Control
                type="datetime-local"
                name="reminder"
                value={formData.reminder}
                onChange={handleChange}
              />
            </Col>

            {/* COLOR */}
            <Col md={6}>
              <Form.Label>NOTE COLOR</Form.Label>
              <Form.Control
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </Col>

            {/* DESCRIPTION */}
            <Col xs={12}>
              <Form.Label>NOTE DESCRIPTION *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
                isInvalid={!!errors.description}
                placeholder="Write your note here..."
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Col>

            {/* ACTION BUTTONS */}
            <Col xs={12} className="text-center mt-4">
              <Button type="submit" className="btn-primary px-5 py-2 rounded-pill me-3">
                Save Note
              </Button>
              <Button variant="secondary" className="px-5 py-2 rounded-pill">
                Cancel
              </Button>
            </Col>

          </Row>
        </Form>

      </Container>
    </div>
  );
};

export default CreateNotes;
