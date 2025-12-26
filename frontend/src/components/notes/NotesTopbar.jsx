import React from 'react'
import { NavLink } from 'react-router-dom'

const NotesTopbar = () => {
    return (
        <>
            <div className="notes-top-sec mb-3">
                <h2 className="main-head">All Notes</h2>
                <div className="notes-actions">

                    <input
                        type="text"
                        className="notes-search"
                        placeholder="Find note"
                    />

                    <select className="notes-select">
                        <option>Module: All</option>
                        <option>Personal</option>
                        <option>Work</option>
                    </select>

                    <select className="notes-select">
                        <option>Sort by</option>
                        <option>Date</option>
                        <option>Priority</option>
                    </select>

                    <NavLink to="/createnates" className="create-btn" >
                        + Create Note
                    </NavLink>


                </div>
            </div>
        </>
    )
}

export default NotesTopbar
