import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AuthCheck = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await api.get("/auth/profile"); 
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/signin");
      }
    };

    verifyToken();
  }, [navigate]);

  return children;
};

export default AuthCheck;
