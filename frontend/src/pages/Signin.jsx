import React, { useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";
import { FaRegSmile } from "react-icons/fa";
const Signin = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      // 🔐 save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // ✅ success toast
      toast.success("Login successful ");

      // redirect after small delay (UX better)
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);

    } catch (error) {
      // ❌ error toast
      toast.error(
        error.response?.data?.message || "Login failed "
      );
    }
  };


  return (
    <>
      <section>
        <div className="container">
          <div className="form-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="login-left ">
                  <div className="login-header">
                    <h2>Welcome to</h2>
                    <h1>Note Zipper</h1>
                    <p>
                      Organize your tasks, track progress, and collaborate with your team — all in one place.
                    </p>
                  </div>

                  {/* 🔥 FORM CONNECTED */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3 input-with-icon">
                      <label htmlFor="email">Username</label>
                      <i className="fa fa-user icon"></i>
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Enter your username"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-3 input-with-icon">
                      <label htmlFor="password">Password</label>
                      <i className="fa fa-lock icon"></i>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="login-btn w-100">
                      Login
                    </button>
                  </form>

                  <p className="mt-3 text-center">
                    Don’t have an account?{" "}
                    <a href="/signup" className="signup-link">
                      Sign Up
                    </a>
                  </p>

                  <div className="social-links">
                    <div className="social-title-line"> <strong className="me-3 ms-3">Just saying… </strong> </div>

                    <p className="auth-info-text">
                      Your tasks miss you. Come back soon   <FaRegSmile />
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-lg-7 login-img d-flex justify-content-center align-items-center">
                <div className="login-right">
                  <h2>Welcome Back</h2>
                  <p>
                    Please sign in to continue. Access your account, manage your
                    information, and stay connected with your latest updates.
                    Your login is secure and protected at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
