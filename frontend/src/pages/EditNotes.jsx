import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";

const EditNotes = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // note id from URL

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
  });

  // 🔹 Fetch note details (prefill)
  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      const res = await api.get(`/notes/${id}`);
      const note = res.data;

      setFormData({
        title: note.title || "",
        description: note.description || "",
        category: note.category || "",
        tags: note.tags ? note.tags.join(", ") : "",
      });
    } catch (error) {
      toast.error("Failed to load note");
      navigate("/notes");
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🔹 Update note
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      toast.error("Title and description are required");
      return;
    }

    try {
      await api.put(`/notes/${id}`, {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        tags: formData.tags,
      });

      toast.success("Note updated successfully");
      navigate("/notes");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update note"
      );
    }
  };

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading note...</p>;
  }

  return (
    <div className="notes-inner">
      <Container>
        <div className="notes-wrap mb-4">
          <h2 className="main-head">Edit Note</h2>
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
                name="tags"
                value={formData.tags}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Attachment (future) */}
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
              Update Note
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default EditNotes;
