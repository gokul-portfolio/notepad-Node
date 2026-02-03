import { useEffect, useState, useContext, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import TaskCard from "../components/task/TaskCard";
import TaskTopbar from "../components/task/TaskTopbar";

const Task = () => {
  const navigate = useNavigate();

  // ✅ FROM CONTEXT
  const {
    tasks,
    loadingTasks,
    getTasks,
    deleteTask,
  } = useContext(UserContext);

  // FILTER STATES (UI only)
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("all");

  // FETCH TASKS ON LOAD
  useEffect(() => {
    getTasks();
  }, []);

  const handleEdit = (task) => {
    navigate(`/tasks/edit/${task._id}`);
  };

  // FILTER LOGIC (optimized)
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchSearch =
        task.title.toLowerCase().includes(search.toLowerCase());
      const matchPriority =
        priority === "all" || task.priority === priority;
      return matchSearch && matchPriority;
    });
  }, [tasks, search, priority]);

  return (
    <Container>
      <div className="today-task-wrap">

        {/* HEADER */}
        <div className="today-task-header mb-2">
          <h2 className="main-head">All Tasks</h2>
        </div>

        {/* TOP BAR */}
        <TaskTopbar
          search={search}
          setSearch={setSearch}
          priority={priority}
          setPriority={setPriority}
        />

        {/* TASK LIST */}
        <div className="today-task-content mt-5">
          {loadingTasks ? (
            <p>Loading tasks...</p>
          ) : filteredTasks.length === 0 ? (
            <p>No tasks found</p>
          ) : (
            filteredTasks.map(task => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEdit}
                onDelete={() => deleteTask(task._id)}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default Task;
