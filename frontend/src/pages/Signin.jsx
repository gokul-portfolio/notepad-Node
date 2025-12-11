import React from 'react'
const Signin = () => {
    return (
        <>
            <section >
                <div className="container">

                    <div className="form-wrap">

                        <div className="row">
                            <div className="col-lg-5">
                                <div className="login-left ">
                                    <div className="login-header">
                                        <h2>Welcome to</h2>
                                        <h1>Lorem, ipsum.</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae provident atque dignissimos culpa, nobis rerum.</p>
                                    </div>

                                    <form>
                                        <div className="form-group mb-3 input-with-icon">
                                            <label htmlFor="username">Username</label>
                                            <i className="fa fa-user icon"></i>
                                            <input
                                                type="text"
                                                id="username"
                                                className="form-control"
                                                placeholder="Enter your username"
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
                                            />
                                        </div>

                                        <button type="submit" className="login-btn w-100">
                                            Login
                                        </button>
                                    </form>

                                    <p className="mt-3 text-center">
                                        Don’t have an account? <a href="/signup" className="signup-link">Sign Up</a>
                                    </p>

                                    <div className="social-links">
                                        <div className="social-title-line">Or connect with</div>

                                        <div className="social-icons">
                                            <a href="#" className="social-item"><i className="bi bi-facebook"></i></a>
                                            <a href="#" className="social-item"><i className="bi bi-instagram"></i></a>
                                            <a href="#" className="social-item"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#" className="social-item"><i className="bi bi-google"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7  login-img d-flex justify-content-center align-items-center">
                                <div className="login-right">
                                    <h2>Welcome Back</h2>
                                    <p>
                                        Please sign in to continue. Access your account, manage your information,
                                        and stay connected with your latest updates. Your login is secure and
                                        protected at all times.
                                    </p>
                                </div>

                            </div>

                        </div>


                    </div>


                </div>

            </section>
        </>
    )
}

export default Signin
