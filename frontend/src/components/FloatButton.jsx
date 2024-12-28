import React, {useState} from "react";
import "../assets/styles/floatbutton.css";
import { Link } from "react-router-dom";

const FloatButton = ({ isAdmin }) => {
  const [show, setShow] = useState(false);

  return (
    <nav className="float-button">
      <ul>
        <li>
          <Link to="/Låtdiginspireras">
            <i className="fas fa-chevron-left"></i>
            <b>Back</b>
          </Link>
        </li>
        {isAdmin && (
          <li>
            <Link onClick={(e) => setShow(!show)}>
              <i className="fas fa-edit"></i>
              <b>Article Edit</b>
            </Link>
          </li>
        )}

        {/* <li>
          <a href="ref">
            <i className="fas fa-google-plus"></i>
            <b>Google +</b>
          </a>
        </li>
        <li>
          <a href="ref">
            <i className="fas fa-linkedin"></i>
            <b>LinkedIn</b>
          </a>
        </li>
        <li>
          <a href="ref">
            <i className="fas fa-youtube"></i>
            <b>YouTube</b>
          </a>
        </li>
        <li>
          <a href="ref">
            <i className="fas fa-instagram"></i>
            <b>Instagram</b>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default FloatButton;
