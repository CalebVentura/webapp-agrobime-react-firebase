import { Link, NavLink } from "react-router-dom";

export const NavbarAuth = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark rounded-3 m-2">
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
      </div>
        <div className="navbar-collapse d-flex justify-content-end">
          <div className="navbar-nav">
            <NavLink className='btn btn-primary mx-2 nav-link' to="/home"> Home </NavLink>
          </div>
        </div>
    </nav>
  );
};
