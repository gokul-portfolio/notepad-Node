import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import {
    BsType,
    BsJournalText,
    BsFolder,
    BsTags,
    BsPaperclip,
} from "react-icons/bs";

const NoteForm = ({ initialData, onSubmit, submitText = "Save Note" }) => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
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
                            placeholder="Enter note title"
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
                    placeholder="Write your note here..."
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
                    placeholder="Add tags (comma separated)"
                    value={formData.tags}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* Attachment (UI only) */}
            <Form.Group className="mb-3">
                <Form.Label>
                    <BsPaperclip className="me-2" /> Attachment
                </Form.Label>
                <Form.Control type="file" disabled />
                <small className="text-muted">
                    Attachment upload coming soon
                </small>
            </Form.Group>

            <Button type="submit" className="form-btn">
                {submitText}
            </Button>
        </Form>
    );
};

export default NoteForm;
