import React from "react";
import { NavLink } from "react-router-dom";

const NotesTopbar = ({
    search,
    setSearch,
    category,
    setCategory,
    sortBy,
    setSortBy,
}) => {
    return (
        <div className="notes-top-sec mb-3">
            <h2 className="main-head">All Notes</h2>

            <div className="notes-actions">
                {/* Search */}
                <input
                    type="text"
                    className="notes-search"
                    placeholder="Find note"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Module Filter */}
                <select
                    className="notes-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">Category: All</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Others">Others</option>
                </select>

                {/* Sort */}
                <select
                    className="notes-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="">Sort by</option>
                    <option value="Date">Date</option>
                    <option value="Priority">Priority</option>
                </select>

                {/* Create */}
                <NavLink to="/create" className="create-btn">
                    + Create Note
                </NavLink>
            </div>
        </div>
    );
};

export default NotesTopbar;
