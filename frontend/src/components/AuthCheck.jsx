import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AuthCheck = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await api.get("/auth/profile");
        setLoading(false);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/signin", { replace: true });
        } else {
          console.error("Auth check failed:", error);
        }
      }
    };

    verifyToken();
  }, [navigate]);

  // ⏳ Prevent UI flicker
  if (loading) return null; // or spinner

  return children;
};

export default AuthCheck;
