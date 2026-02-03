import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import {
  BsType,
  BsJournalText,
  BsFolder,
  BsTags,
  BsPerson,
  BsCalendar,
} from "react-icons/bs";

const ScheduleForm = ({
  formData,
  onChange,
  onSubmit,
  loading = false,
  submitText = "Create Task",
  isAdmin = false,
  designations = [],
  members = [],
}) => {
  return (
    <Form onSubmit={onSubmit}>
      {/* TITLE */}
      <Form.Group className="mb-3">
        <Form.Label>
          <BsType /> Title
        </Form.Label>
        <Form.Control
          name="title"
          value={formData.title || ""}
          onChange={onChange}
          placeholder="Enter task title"
          required
        />
      </Form.Group>

      {/* DESCRIPTION */}
      <Form.Group className="mb-3">
        <Form.Label>
          <BsJournalText /> Description
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="description"
          value={formData.description || ""}
          onChange={onChange}
          placeholder="Enter task description"
        />
      </Form.Group>

      {/* CATEGORY & PRIORITY */}
      <Row className="mb-3">
      

        <Col md={6}>
          <Form.Label>Priority</Form.Label>
          <Form.Select
            name="priority"
            value={formData.priority || "Medium"}
            onChange={onChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Form.Select>
        </Col>
      </Row>

      {/* DATES */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Label>
            <BsCalendar /> Start Date
          </Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate || ""}
            onChange={onChange}
          />
        </Col>

        <Col md={6}>
          <Form.Label>
            <BsCalendar /> Deadline
          </Form.Label>
          <Form.Control
            type="date"
            name="deadline"
            value={formData.deadline || ""}
            onChange={onChange}
            required
          />
        </Col>
      </Row>

      {/* 🔥 ADMIN ONLY */}
      {isAdmin && (
        <>
          {/* DESIGNATION */}
          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Select
              name="designation"
              value={formData.designation || ""}
              onChange={onChange}
              disabled={!designations.length}
            >
              <option value="">Select Designation</option>
              {designations.map((des) => (
                <option key={des} value={des}>
                  {des}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {/* ASSIGN TO */}
          <Form.Group className="mb-3">
            <Form.Label>
              <BsPerson /> Assign To
            </Form.Label>
            <Form.Select
              name="assignedTo"
              value={formData.assignedTo || ""}
              onChange={onChange}
              disabled={!formData.designation}
            >
              <option value="">Select Member</option>
              {members.map((member) => (
                <option key={member._id} value={member._id}>
                  {member.name}
                </option>
              ))}
            </Form.Select>

            {!formData.designation && (
              <small className="text-muted">
                Please select a designation first
              </small>
            )}
          </Form.Group>

          {/* TAGS */}
          <Form.Group className="mb-3">
            <Form.Label>
              <BsTags /> Tags
            </Form.Label>
            <Form.Control
              name="tags"
              value={formData.tags || ""}
              onChange={onChange}
              placeholder="react,node,api"
            />
          </Form.Group>
        </>
      )}

      {/* NORMAL USER */}
      {!isAdmin && (
        <Form.Group className="mb-3">
          <Form.Label>
            <BsTags /> Tags
          </Form.Label>
          <Form.Control
            name="tags"
            value={formData.tags || ""}
            onChange={onChange}
            placeholder="react,node"
          />
        </Form.Group>
      )}

      {/* SUBMIT */}
      <div className="text-end">
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner size="sm" /> Please wait...
            </>
          ) : (
            submitText
          )}
        </Button>
      </div>
    </Form>
  );
};

export default ScheduleForm;
