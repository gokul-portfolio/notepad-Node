import React, { useState } from "react";
import api from "../api/axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    designation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 Frontend validation
    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword ||
      !form.designation
    ) {
      toast.warning("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await api.post("/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
        designation: form.designation, // ✅ added
      });

      toast.success("Signup successful 🎉");

      setTimeout(() => {
        window.location.href = "/signin";
      }, 1500);

    } catch (err) {
      const code = err.response?.data?.code;

      if (code === "USER_EXISTS") {
        toast.error("User already exists");
      } else if (code === "MISSING_FIELDS") {
        toast.warning("Please fill all fields");
      } else {
        toast.error(err.response?.data?.message || "Signup failed");
      }
    }
  };

  return (
    <section>
      <div className="container">
        <div className="form-wrap">
          <div className="row">

            <div className="col-lg-6 login-img d-flex justify-content-center align-items-center">
              <div className="login-right">
                <h2>Create Your Account</h2>
                <p>
                  Join us today and unlock all features!
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="login-left">
                <div className="login-header">
                  <h2>Join Us Today</h2>
                  <h1>Create Your Account</h1>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="form-group mb-3 input-with-icon">
                    <label htmlFor="name">Full Name</label>
                    <i className="fa fa-user icon"></i>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="form-group mb-3 input-with-icon">
                    <label htmlFor="email">Email</label>
                    <i className="fa fa-envelope icon"></i>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Designation */}
                  <div className="form-group mb-3 input-with-icon">
                    <label htmlFor="designation">Designation</label>
                    <i className="fa fa-briefcase icon"></i>
                    <select
                      id="designation"
                      className="form-control"
                      value={form.designation}
                      onChange={handleChange}
                    >
                      <option value="">Select designation</option>
                      <option value="Developer">Developer</option>
                      <option value="Designer">Designer</option>
                      <option value="digitalmarketing">Digital Marketing</option>
                     
                    </select>
                  </div>

                  {/* Password */}
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

                  {/* Confirm Password */}
                  <div className="form-group mb-3 input-with-icon">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <i className="fa fa-lock icon"></i>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="login-btn w-100">
                    <span>Sign Up</span>
                  </button>
                </form>

                <p className="mt-3 text-center">
                  Already have an account?{" "}
                  <a href="/signin" className="signup-link">
                    Login
                  </a>
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
