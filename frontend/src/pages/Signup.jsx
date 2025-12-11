import React from 'react'

const Signup = () => {
    return (
        <section >
            <div className="container">

                <div className="form-wrap">

                    <div className="row">
                        <div className="col-lg-6 login-img  d-flex justify-content-center align-items-center">
                            <div className="login-right">
                                <h2>Create Your Account</h2>
                                <p>
                                    Join us today and unlock all features! Sign up to manage bookings, explore exclusive
                                    travel packages, track your reservations, and stay updated with the latest offers.
                                    Your information is safe, and registration is quick and secure.
                                </p>
                            </div>


                        </div>
                        <div className="col-lg-6 ">
                            <div className="login-left ">
                                <div className="login-header">

                                    <h2>Join Us Today</h2>
                                    <h1>Create Your Account</h1>
                                    <p>
                                        Sign up to explore exclusive travel packages, manage bookings, track your reservations,
                                        and stay updated with the latest offers. Registration is quick, easy, and secure.
                                    </p>
                                </div>

                                <form>
                                    {/* Full Name Field */}
                                    <div className="form-group mb-3 input-with-icon">
                                        <label htmlFor="fullname">Full Name</label>
                                        <i className="fa fa-user icon"></i>
                                        <input
                                            type="text"
                                            id="fullname"
                                            className="form-control"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="form-group mb-3 input-with-icon">
                                        <label htmlFor="email">Email</label>
                                        <i className="fa fa-envelope icon"></i>
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    {/* Password Field */}
                                    <div className="form-group mb-3 input-with-icon">
                                        <label htmlFor="password">Password</label>
                                        <i className="fa fa-lock icon"></i>
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="Enter your password"
                                        />
                                    </div>

                                    {/* Confirm Password Field */}
                                    <div className="form-group mb-3 input-with-icon">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <i className="fa fa-lock icon"></i>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            className="form-control"
                                            placeholder="Confirm your password"
                                        />
                                    </div>

                                    {/* Sign Up Button */}
                                    <button type="submit" className="login-btn w-100">
                                        <span>Sign Up</span>
                                    </button>
                                </form>

                                {/* Login Link */}
                                <p className="mt-3 text-center">
                                    Already have an account? <a href="/login" className="signup-link">Login</a>
                                </p>

                                {/* Social Signup */}
                                <div className="social-links">
                                    <div className="social-title-line">Or sign up with</div>
                                    <div className="social-icons">
                                        <a href="#" className="social-item"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" className="social-item"><i className="fab fa-instagram"></i></a>
                                        <a href="#" className="social-item"><i className="fab fa-twitter"></i></a>
                                        <a href="#" className="social-item"><i className="fab fa-google"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>


                </div>


            </div>

        </section>
    )
}

export default Signup
