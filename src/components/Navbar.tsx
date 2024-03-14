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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="links" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="links" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="links" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="links" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="links"
                href="https://www.dropbox.com/scl/fi/0z676q9u5ipeq6rehtcvw/Kyrne-Li-Resume.pdf?rlkey=bc2q5vgin2glie7mhxeub704j&dl=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="links"
                href="https://kyrnesblog.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
