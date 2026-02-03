import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // =========================
  // AUTH
  // =========================
  const [user, setUser] = useState(null);

  // =========================
  // NOTES
  // =========================
  const [notes, setNotes] = useState([]);
  const [loadingNotes, setLoadingNotes] = useState(false);

  // =========================
  // TASKS
  // =========================
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(false);

  // =========================
  // LOAD USER ON APP START
  // =========================
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // =========================
  // LOGIN / LOGOUT
  // =========================
  const loginUser = useCallback((userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
  }, []);

  const logoutUser = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setNotes([]);
    setTasks([]);
  }, []);

  // =========================
  // NOTES API
  // =========================
  const getNotes = useCallback(async () => {
    setLoadingNotes(true);
    try {
      const res = await api.get("/notes");
      setNotes(res.data?.data || res.data || []);
    } catch {
      toast.error("Failed to load notes");
    } finally {
      setLoadingNotes(false);
    }
  }, []);

  const createNote = useCallback(async (data) => {
    try {
      const res = await api.post("/notes", data);
      const newNote = res.data?.data || res.data;
      setNotes(prev => [newNote, ...prev]);
      toast.success("Note created successfully");
      return true;
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create note");
      return false;
    }
  }, []);

  const updateNote = useCallback(async (id, data) => {
    try {
      const res = await api.put(`/notes/${id}`, data);
      const updated = res.data?.data || res.data;
      setNotes(prev =>
        prev.map(note => (note._id === id ? updated : note))
      );
      toast.success("Note updated");
      return true;
    } catch {
      toast.error("Update failed");
      return false;
    }
  }, []);

  const deleteNote = useCallback(async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes(prev => prev.filter(note => note._id !== id));
      toast.success("Note deleted");
    } catch {
      toast.error("Delete failed");
    }
  }, []);

  // =========================
  // TASKS API
  // =========================
  const getTasks = useCallback(async () => {
    setLoadingTasks(true);
    try {
      const res = await api.get("/tasks");
      setTasks(res.data?.data || res.data || []);
    } catch {
      toast.error("Failed to load tasks");
    } finally {
      setLoadingTasks(false);
    }
  }, []);

  const createTask = useCallback(async (data) => {
    try {
      const res = await api.post("/tasks", data);
      const newTask = res.data?.data || res.data;
      setTasks(prev => [newTask, ...prev]);
      toast.success("Task created successfully");
      return true;
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create task");
      return false;
    }
  }, []);

  const updateTask = useCallback(async (id, data) => {
    try {
      const res = await api.put(`/tasks/${id}`, data);
      const updated = res.data?.data || res.data;
      setTasks(prev =>
        prev.map(task => (task._id === id ? updated : task))
      );
      toast.success("Task updated");
      return true;
    } catch {
      toast.error("Update failed");
      return false;
    }
  }, []);

  const deleteTask = useCallback(async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(prev => prev.filter(task => task._id !== id));
      toast.success("Task deleted successfully");
    } catch {
      toast.error("Failed to delete task");
    }
  }, []);

  // =========================
  // CONTEXT VALUE (MEMOIZED)
  // =========================
  const value = useMemo(
    () => ({
      // auth
      user,
      loginUser,
      logoutUser,

      // notes
      notes,
      loadingNotes,
      getNotes,
      createNote,
      updateNote,
      deleteNote,

      // tasks
      tasks,
      loadingTasks,
      getTasks,
      createTask,
      updateTask,
      deleteTask,
    }),
    [
      user,
      notes,
      tasks,
      loadingNotes,
      loadingTasks,
      loginUser,
      logoutUser,
      getNotes,
      createNote,
      updateNote,
      deleteNote,
      getTasks,
      createTask,
      updateTask,
      deleteTask,
    ]
  );

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
