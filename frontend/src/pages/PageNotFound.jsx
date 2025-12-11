import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../assets/images/home/page-not-found.png";

const PageNotFound = () => {
    return (
        <div className="not-found-wrapper">
            <div className="not-found-content">
                <img src={img1} alt="Page Not Found" className="not-found-img" />

                <h2 className="not-found-title">Oops! Page Not Found</h2>

                <p className="not-found-text">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <NavLink to="/dashboard" className="not-found-btn">
                    Go to Dashboard
                </NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;
