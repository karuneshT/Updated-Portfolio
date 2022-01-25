function Navbar() {
  return (
    <div className="container d-inline-flex align-items-center justify-content-between mt-2">
      <h1 className="text-warning ps-5">
        K.
      </h1>
      <span>
        <ul className="nav nav-menu pe-5">
          <li className="nav-item px-1">
            <a className="nav-link navigate-tabs px-2" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navigate-tabs px-3" href="#aboutus">
              About Me
            </a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link navigate-tabs px-2" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link navigate-tabs px-2" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link navigate-tabs px-2" href="#contact">
              Contact
            </a>
          </li>
          {/* <li className="nav-item px-2">
            <a className="nav-link navigate-tabs px-2" href="#Blog">
              Blog
            </a>
          </li> */}
        </ul>
      </span>
    </div>
  );
}

export default Navbar;
