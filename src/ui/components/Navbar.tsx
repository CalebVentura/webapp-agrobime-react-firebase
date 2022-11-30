import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

export const Navbar = () => {
  const navigate = useNavigate()
  const { logout } = useContext( UserContext )

  const handleLogout = async () => {
    navigate('/auth', { replace: true })
    await logout()
  }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark rounded-3 mx-2 mt-2 mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Agrobime
          <img
            src="/agrobime.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            {/* <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/home"
            >
              Home
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/monitoreo"
            >
              Monitoreo
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </div>
        </div>
        <div className="navbar-collapse mx-2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <button
              className="nav-item nav-link btn btn-danger"
              onClick={handleLogout}
            > Logout</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
