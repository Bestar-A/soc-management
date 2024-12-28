import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside id="admin-sidebar" className="admin-sidebar">
      <ul className="admin-sidebar-nav" id="admin-sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link " to="/admindashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-pencil-square"></i>
            <span>Get Inspire</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="components-nav"
            className="nav-content collapse "
            data-bs-parent="#admin-sidebar-nav"
          >
            <li>
              <Link to='/adminarticleeditor'>
                <i className="bi bi-pencil"></i>
                <span>Article Editor</span>
              </Link>
            </li>
            <li>
              <a href="components-accordion.html">
                <i className="bi bi-list-check"></i>
                <span>Sequance</span>
              </a>
            </li>
            <li>
              <a href="components-badges.html">
                <i className="bi bi-bookmark-heart"></i>
                <span>Is Home</span>
              </a>
            </li>
            
          </ul>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-bag"></i>
            <span>Latest</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul
            id="forms-nav"
            className="nav-content collapse "
            data-bs-parent="#admin-sidebar-nav"
          >
            <li>
              <a href="components-alerts.html">
                <i className="bi bi-pencil"></i>
                <span>Blog Editor</span>
              </a>
            </li>
            <li>
              <a href="components-accordion.html">
                <i className="bi bi-list-check"></i>
                <span>Sequance</span>
              </a>
            </li>
            <li>
              <a href="components-badges.html">
                <i className="bi bi-bookmark-heart"></i>
                <span>Is Home</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admincategory">
            <i className="fas fa-list"></i><span>Add Category</span>
          </Link>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/adminprofile">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </li>

        {/* <li className="nav-item">
          <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </a>
        </li> */}

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/">
            <i className="bi bi-arrow-left"></i>
            <span>Back Home</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
