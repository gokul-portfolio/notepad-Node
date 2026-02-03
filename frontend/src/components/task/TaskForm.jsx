import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
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

const TaskForm = ({
  formData,
  onChange,
  onSubmit,
  loading = false,
  submitText = "Create Task",
}) => {
  return (
    <Form onSubmit={onSubmit} encType="multipart/form-data">

      {/* TITLE & CATEGORY */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Label><BsType /> Task Title *</Form.Label>
          <Form.Control
            name="title"
            value={formData.title}
            onChange={onChange}
            placeholder="Enter task title"
          />
        </Col>

        <Col md={6}>
          <Form.Label><BsFolder /> Category</Form.Label>
          <Form.Select
            name="category"
            value={formData.category}
            onChange={onChange}
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
          onChange={onChange}
        />
      </Form.Group>

      {/* PRIORITY, STATUS, DATES */}
      <Row className="mb-3">
        <Col md={3}>
          <Form.Label><BsFlag /> Priority</Form.Label>
          <Form.Select
            name="priority"
            value={formData.priority}
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label><BsBell /> Deadline *</Form.Label>
          <Form.Control
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={onChange}
          />
        </Col>
      </Row>

      {/* ASSIGNED TO & TAGS */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Label><BsPerson /> Assign To (Admin)</Form.Label>
          <Form.Control
            name="assignedTo"
            value={formData.assignedTo}
            onChange={onChange}
            placeholder="User ID"
          />
        </Col>

        <Col md={6}>
          <Form.Label><BsTags /> Tags</Form.Label>
          <Form.Control
            name="tags"
            value={formData.tags}
            onChange={onChange}
            placeholder="react,node,api"
          />
        </Col>
      </Row>

      {/* ATTACHMENT */}
      <Form.Group className="mb-3">
        <Form.Label><BsPaperclip /> Attachment</Form.Label>
        <Form.Control
          type="file"
          name="attachment"
          onChange={onChange}
        />
      </Form.Group>

      {/* NOTIFY */}
      <Form.Check
        className="mb-3"
        type="checkbox"
        label="Notify Employee"
        name="notify"
        checked={formData.notify}
        onChange={onChange}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : submitText}
      </Button>
    </Form>
  );
};

export default TaskForm;
