import { useContext, useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

import TaskCard from "../components/task/TaskCard";
import TaskTopbar from "../components/task/TaskTopbar";

const HighPriority = () => {
  
  const { tasks, loadingTasks, getTasks } = useContext(UserContext);

  const [search, setSearch] = useState("");

  // fetch tasks once
  useEffect(() => {
    getTasks();
  }, []);

  // 🔥 ONLY HIGH PRIORITY
  const highPriorityTasks = useMemo(() => {
    return tasks.filter(task =>
      task.priority === "High" &&
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  return (
    <Container>
      <div className="today-task-wrap">

        {/* HEADER */}
        <div className="today-task-header mb-3">
          <h2 className="main-head">High Priority Tasks</h2>
        </div>

        {/* TOP BAR (NO priority dropdown needed here) */}
        <TaskTopbar
          search={search}
          setSearch={setSearch}
          showPriorityFilter={false}
        />

        {/* TASK LIST */}
        <div className="today-task-content mt-4">
          {loadingTasks ? (
            <p>Loading tasks...</p>
          ) : highPriorityTasks.length === 0 ? (
            <p className="text-center">No high priority tasks found.</p>
          ) : (
            highPriorityTasks.map(task => (
              <TaskCard key={task._id} task={task} />
            ))
          )}
        </div>

      </div>
    </Container>
  );
};

export default HighPriority;
