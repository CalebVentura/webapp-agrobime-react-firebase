import { Link, NavLink } from "react-router-dom";

export const NavbarHome = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark rounded-3 mt-2 mx-2 mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Agrobime
          <img
            src="/agrobime.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top mx-2"
          />
        </Link>

        <div className="navbar-collapse px-1 d-flex justify-content-end">
          <ul className="navbar-nav">
            <NavLink className='mx-1 btn btn-success nav-link' to="/auth">
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
