const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          AutoStore
        </a>
        <div className="form-check-reverse">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Show likes
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
