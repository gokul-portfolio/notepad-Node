import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  BsType,
  BsJournalText,
  BsFolder,
  BsTags,
  BsPaperclip,
} from "react-icons/bs";
import api from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateNotes = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    attachment: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      toast.error("Title and description are required");
      return;
    }

    try {
      await api.post("/notes", {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        tags: formData.tags,
      });

      toast.success("Note created successfully");

      // redirect to notes list
      navigate("/notes");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create note"
      );
    }
  };

  return (
    <div className="notes-inner">
      <Container>
        <div className="notes-wrap mb-4">
          <h2 className="main-head">Create Note</h2>
        </div>

        <div className="form-wrap rounded">
          <Form onSubmit={handleSubmit}>
            {/* Title & Category */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    <BsType className="me-2" /> Note Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter note title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    <BsFolder className="me-2" /> Category
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Others">Others</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            {/* Description */}
            <Form.Group className="mb-3">
              <Form.Label>
                <BsJournalText className="me-2" /> Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your note here..."
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Tags */}
            <Form.Group className="mb-3">
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

            {/* Attachment (UI only for now) */}
            <Form.Group className="mb-3">
              <Form.Label>
                <BsPaperclip className="me-2" /> Attachment
              </Form.Label>
              <Form.Control type="file" disabled />
              <small className="text-muted">
                Attachment upload coming soon
              </small>
            </Form.Group>

            {/* Submit */}
            <Button type="submit" className="form-btn">
              Save Note
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CreateNotes;
