import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top background-charcoal">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="k.svg"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="links" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="links" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="links" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="links" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
