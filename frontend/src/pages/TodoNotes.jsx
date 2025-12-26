import React from "react";
import { Row, Col } from "react-bootstrap";
import { todolist } from "../data/todoData";
import TodoCard from "../components/notes/TodoCard";

const TodoNotes = () => {
  return (
    <div className="today-notes-wrap">
      <div className="container">

        <div className="today-header mb-3 mb-lg-5">
          <h2 className="main-head">Today Task</h2>
        </div>

        <div className="today-notes-content">
          <Row className="g-4 d-flex justify-content-center">
            {todolist.map((todo) => (
              <Col className="flex-full" key={todo.id} xs={12} md={6}>
                <TodoCard todo={todo} />
              </Col>
            ))}
          </Row>
        </div>
      </div>

    </div>
  );
};

export default TodoNotes;
