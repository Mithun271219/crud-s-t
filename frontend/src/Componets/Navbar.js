import React from "react";
import { NavLink } from 'react-router-dom';
import Access from "./Auth/Access";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">CRUD</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/createstudent">Create-Students</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/studentslist">Students List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactus">Contact US</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Access />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;