import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  BsType,
  BsJournalText,
  BsFolder,
  BsTags,
  BsPaperclip,
} from "react-icons/bs";

const CreateNotes = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    attachment: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Note Data:", formData);
    // Here you can send data to API or backend
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
                <Form.Group controlId="title">
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
                <Form.Group controlId="category">
                  <Form.Label>
                    <BsFolder className="me-2" /> Category
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category (optional)"
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
                rows={5}
                placeholder="Write your note here..."
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Tags */}
            <Form.Group controlId="tags" className="mb-3">
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

            {/* Attachment */}
            <Form.Group controlId="attachment" className="mb-3">
              <Form.Label>
                <BsPaperclip className="me-2" /> Attachment
              </Form.Label>
              <Form.Control
                type="file"
                name="attachment"
                onChange={handleChange}
              />
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
